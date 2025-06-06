import { Match } from "../../../LionBracketEngine/src/models/match";

import { getScore } from "../../helper/score";
import TeamInputArea from "./TeamInputArea";
import { addColor } from "./color";
import { serializeSwissBracket } from "../../helper/serializer";
import { BracketNode } from "../../../LionBracketEngine/src/models/bracket_node";
import { Seed } from "../../../LionBracketEngine/src/models/match_record";
import { SwissBracketFlow } from "../../../LionBracketEngine/src/swiss_bracket/swiss_backet_flow";
import { useRef } from "react";
import { Team } from "../../helper/teamTranslator";

export default function VersusRoundComponent({
												 match,
												 bracket,
												 updateSwissFun,
												 updatePromotedBracket,
												 swissBracketStorageName,
												 paths,
											 }: {
	match: Match;
	bracket: SwissBracketFlow;
	updateSwissFun: React.Dispatch<React.SetStateAction<BracketNode>> | undefined;
	updatePromotedBracket: ((seed: Seed[]) => void) | undefined;
	swissBracketStorageName: string;
	paths: Team[]
}) {
	const roundNodeName = match.id.split(".")[0];

	const upperInputId = `${match.id}upper`;
	const lowerInputId = `${match.id}lower`;

	const upperInputRef = useRef<HTMLInputElement>(null);
	const lowerInputRef = useRef<HTMLInputElement>(null);

	let upperScore = 0;
	let lowerScore = 0;
	if (match.matchRecord?.type === "FullRecord") {
		upperScore = match.matchRecord.upperSeedWins;
		lowerScore = match.matchRecord.lowerSeedWins;
	}

	function onChange() {
		const upperTeamWins = getScore(upperInputRef);
		const lowerTeamWins = getScore(lowerInputRef);
		const matchRecord = bracket.getMatchRecord(match.id);
		if (matchRecord) {
			matchRecord.upperSeedWins = upperTeamWins;
			matchRecord.lowerSeedWins = lowerTeamWins;
			bracket.setMatchRecord(match.id, matchRecord);
			if (updateSwissFun) {
				bracket.updateFlow(bracket.getBracketNode(roundNodeName));
				const cloned = structuredClone(bracket.rootRound);
				bracket.rootRound = cloned;
				updateSwissFun(cloned);
				serializeSwissBracket(bracket.rootRound, swissBracketStorageName);
				if (updatePromotedBracket) {
					updatePromotedBracket(bracket.getPromotedSeeds());
				}
			} else {
				console.log("updateSwissFun doesn't exist when it should");
			}
		} else {
			console.log("match record doesnt exist bad error");
		}
	}

	let upperImagePath = "";
	let lowerImagePath = "";
	let upperTeamName = "";
	let lowerTeamName = "";
	if (match.matchRecord?.type === "FullRecord") {
		upperImagePath = `/logos/${paths[match.matchRecord.upperSeed - 1].path}.png`;
		lowerImagePath = `/logos/${paths[match.matchRecord.lowerSeed - 1].path}.png`;
		upperTeamName = paths[match.matchRecord.upperSeed - 1].name;
		lowerTeamName = paths[match.matchRecord.lowerSeed - 1].name;
	}
	let classes = "versus ";

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
	if (upperScore > lowerScore) {
		upperClass = colorClass;
	} else if (upperScore < lowerScore) {
		lowerClass = colorClass;
	}

	return (
		<div className="versus-container" key={match.id}>
			<TeamInputArea
				updateFun={onChange}
				teamName={upperTeamName}
				inputId={upperInputId}
				imagePath={upperImagePath}
				startingScore={upperScore}
				colorClass={upperClass}
				inputRef={upperInputRef}
			></TeamInputArea>
			<div className="versus-section">
				<h3 className={classes}>VS</h3>
			</div>
			<TeamInputArea
				updateFun={onChange}
				inputId={lowerInputId}
				teamName={lowerTeamName}
				imagePath={lowerImagePath}
				startingScore={lowerScore}
				colorClass={lowerClass}
				inputRef={lowerInputRef}
			></TeamInputArea>
		</div>
	);
}
