import { Match } from "../../LionBracketEngine/src/models/match";

import { getScore } from "../helper/score";
import TeamInputArea from "./TeamInputArea";
import { addColor } from "../helper/color";
import { serializeBracket } from "../helper/serializer";
import { paths } from "../helper/TeamsTranslator";
import { BracketNode } from "../../LionBracketEngine/src/models/bracket_node";
import { Major1Brackets } from "../../LionBracketEngine/src/models/bracket";

export default function VersusRoundComponent({
	match,
	bracketWrapper,
	updateSwissFun,
}: {
	match: Match;
	bracketWrapper: Major1Brackets;
	updateSwissFun: React.Dispatch<React.SetStateAction<BracketNode>> | undefined;
}) {
	const roundNodeName = match.id.split(".")[0];

	const upperInputId = `${match.id}upper`;
	const lowerInputId = `${match.id}lower`;

	let upperScore = 0;
	let lowerScore = 0;
	if (match.matchRecord?.type === "FullRecord") {
		upperScore = match.matchRecord.upperSeedWins;
		lowerScore = match.matchRecord.lowerSeedWins;
	}

	function onChange() {
		const upperTeamWins = getScore(upperInputId);
		const lowerTeamWins = getScore(lowerInputId);
		switch (bracketWrapper.bracketType) {
			case "M1SwissBracket":
				const bracket = bracketWrapper.bracketObject;
				const matchRecord = bracket.getMatchRecord(match.id);
				if (matchRecord) {
					matchRecord.upperSeedWins = upperTeamWins;
					matchRecord.lowerSeedWins = lowerTeamWins;
					bracket.setMatchRecord(match.id, matchRecord);
					if (updateSwissFun) {
						bracket.updateFlow(bracket.getRoundNode(roundNodeName));
						const cloned = structuredClone(bracket.rootRound);
						bracket.rootRound = cloned;
						updateSwissFun(cloned);
						serializeBracket(bracket.rootRound, "sb");
					} else {
						console.log("updateSwissFun doesn't exist when it should");
					}
				} else {
					console.log("match record doesnt exist bad error");
				}
				break;
			case "M1AFLBracket":
				break;

			default:
			// should never happen
		}
	}

	let upperImagePath = "";
	let lowerImagePath = "";
	if (match.matchRecord?.type === "FullRecord") {
		upperImagePath = `/logos/${paths[match.matchRecord.upperSeed - 1]}.png`;
		lowerImagePath = `/logos/${paths[match.matchRecord.lowerSeed - 1]}.png`;
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
				inputId={upperInputId}
				imagePath={upperImagePath}
				startingScore={upperScore}
				colorClass={upperClass}
			></TeamInputArea>
			<div className="versus-section">
				<h3 className={classes}>VS</h3>
			</div>
			<TeamInputArea
				updateFun={onChange}
				inputId={lowerInputId}
				imagePath={lowerImagePath}
				startingScore={lowerScore}
				colorClass={lowerClass}
			></TeamInputArea>
		</div>
	);
}
