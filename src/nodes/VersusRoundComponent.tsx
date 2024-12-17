import { Match } from "../../BracketLion/models";
import { SwissBracketData } from "../../BracketLion/SwissBracketData";
import { getScore } from "../helper/score";
import TeamInputArea from "./TeamInputArea";
import { addColor } from "../helper/color";
import { SwissBracket } from "../../BracketLion/SwissBracket";
import { serializeBracket } from "../helper/serializer";
import { useState } from "react";

export default function VersusRoundComponent({
	match,
	swissBracket,
	updateSwissFun,
}: {
	match: Match;
	swissBracket: SwissBracket;
	updateSwissFun: React.Dispatch<React.SetStateAction<SwissBracketData>> | undefined;
}) {
	const upperInputId = `${match.id}upper`;
	const lowerInputId = `${match.id}lower`;

	let upperScore = 0;
	let lowerScore = 0;
	if (match.matchRecord) {
		upperScore = match.matchRecord.upperTeamWins;
		lowerScore = match.matchRecord.lowerTeamWins;
	}

	const upperTeamScore = upperScore;
	const lowerTeamScore = lowerScore;
	// const [upperTeamScore, setUpperTeamScore] = useState(upperScore);
	// const [lowerTeamScore, setLowerTeamScore] = useState(lowerScore);

	function onChange() {
		const upperTeamWins = getScore(upperInputId);
		const lowerTeamWins = getScore(lowerInputId);
		// setUpperTeamScore(upperTeamWins);
		// setLowerTeamScore(lowerTeamWins);
		const matchRecord = swissBracket.getMatchRecordById(match.id);
		if (matchRecord) {
			matchRecord.upperTeamWins = upperTeamWins;
			matchRecord.lowerTeamWins = lowerTeamWins;
			swissBracket.setMatchRecordById(match.id, matchRecord);
			swissBracket.setMatchRecordWithValueById(match.id, upperTeamWins, lowerTeamWins);
			if (updateSwissFun) {
				const cloned = structuredClone(swissBracket.data);
				swissBracket.data = cloned;
				updateSwissFun(cloned);
				serializeBracket(swissBracket.data);
			} else {
				console.log("very bad error");
			}
		} else {
			console.log("match record doesnt exist bad error");
		}
	}
	const paths: string[] = [
		"g2",
		"geng",
		"og",
		"ssg",
		"luminosity",
		"m80",
		"cloud9",
		"shopify",
		"snowmen",
		"dignitas",
		"moist",
		"nrg",
		"spate",
		"zero2one",
		"gbuffo",
		"incorrect",
	];

	let upperImagePath = "";
	let lowerImagePath = "";
	if (match.matchRecord) {
		upperImagePath = `/logos/${paths[match.matchRecord.upperTeam - 1]}.png`;
		lowerImagePath = `/logos/${paths[match.matchRecord.lowerTeam - 1]}.png`;
	}
	let classes = "versus ";
	const roundNodeName = match.id.split(".")[0];

	classes = addColor(roundNodeName, classes, [
		"round-winning-text",
		"round-middle-text",
		"round-losing-text",
		"round-start-text",
	]);

	let colorClass = addColor(roundNodeName, "", [
		"round-winning-text",
		"round-middle-text",
		"round-losing-text",
		"round-start-text",
	]);
	let upperClass = "";
	let lowerClass = "";
	if (upperTeamScore > lowerTeamScore) {
		upperClass = colorClass;
	} else if (upperTeamScore < lowerTeamScore) {
		lowerClass = colorClass;
	}

	return (
		<div className="versus-container" key={match.id}>
			<TeamInputArea
				updateFun={onChange}
				inputId={upperInputId}
				imagePath={upperImagePath}
				startingScore={upperTeamScore}
				colorClass={upperClass}
			></TeamInputArea>
			<div className="versus-section">
				<h3 className={classes}>VS</h3>
			</div>
			<TeamInputArea
				updateFun={onChange}
				inputId={lowerInputId}
				imagePath={lowerImagePath}
				startingScore={lowerTeamScore}
				colorClass={lowerClass}
			></TeamInputArea>
		</div>
	);
}
