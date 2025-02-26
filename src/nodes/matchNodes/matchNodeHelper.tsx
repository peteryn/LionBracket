import { getScore } from "../../helper/score";
import { paths } from "../../helper/TeamsTranslator";
import { MatchNodeType } from "../MatchNodeType";
import MatchTeamInputArea from "./MatchTeamInputArea";

export function createMatches(data: MatchNodeType) {
	const match = data.matchNode.match;
	const upperInputId = `${match.id}upper`;
	const lowerInputId = `${match.id}lower`;

	function onChange() {
		const upperTeamWins = getScore(upperInputId);
		const lowerTeamWins = getScore(lowerInputId);
		const bracket = data.bracket;
		const matchRecord = bracket.getMatchRecord(match.id);
		// console.log(`upper team wins: ${upperTeamWins}`)
		// console.log(`lower team wins: ${lowerTeamWins}`)
		// console.log(`bracket: ${bracket}`)
		// console.log(`matchRecord: ${matchRecord}`)
		if (matchRecord?.type === "FullRecord") {
			matchRecord.upperSeedWins = upperTeamWins;
			matchRecord.lowerSeedWins = lowerTeamWins;
			bracket.setMatchRecord(match.id, matchRecord);
			if (data.updateFun) {
				console.log("in updateFun");
				bracket.updateFlow(data.matchNode);
				const nodeList = bracket.getAllMatchNodes();
				const cloned = structuredClone(nodeList);
				bracket.buildBracket(cloned);
				data.updateFun(cloned);
				// data.updateFun([]);
				console.log(bracket.upperQuarterFinal1.upperRound)
				console.log("exit updateFun");
			} else {
				console.log("afl update function doesn't exist when it should");
			}
		}
	}

	let teamAreas;
	switch (match.matchRecord?.type) {
		case "FullRecord": {
			const upperImagePath = `/logos/${paths[match.matchRecord.upperSeed - 1]}.png`;
			const lowerImagePath = `/logos/${paths[match.matchRecord.lowerSeed - 1]}.png`;
			const upperTeamName = paths[match.matchRecord.upperSeed - 1];
			const lowerTeamName = paths[match.matchRecord.lowerSeed - 1];

			teamAreas = (
				<>
					<MatchTeamInputArea
						updateFun={onChange}
						inputId={upperInputId}
						teamName={upperTeamName}
						imagePath={upperImagePath}
						startingScore={match.matchRecord.upperSeedWins}
						colorClass=""
					></MatchTeamInputArea>

					<MatchTeamInputArea
						updateFun={onChange}
						inputId={lowerInputId}
						teamName={lowerTeamName}
						imagePath={lowerImagePath}
						startingScore={match.matchRecord.lowerSeedWins}
						colorClass=""
					></MatchTeamInputArea>
				</>
			);
			break;
		}
		case "UpperRecord": {
			const upperImagePath = `/logos/${paths[match.matchRecord.upperSeed - 1]}.png`;
			const upperTeamName = paths[match.matchRecord.upperSeed - 1];
			teamAreas = (
				<MatchTeamInputArea
					updateFun={undefined}
					inputId={upperInputId}
					teamName={upperTeamName}
					imagePath={upperImagePath}
					startingScore={match.matchRecord.upperSeedWins}
					colorClass=""
				></MatchTeamInputArea>
			);
			break;
		}
		case "LowerRecord":
			const lowerImagePath = `/logos/${paths[match.matchRecord.lowerSeed - 1]}.png`;
			const lowerTeamName = paths[match.matchRecord.lowerSeed - 1];
			teamAreas = (
				<MatchTeamInputArea
					updateFun={undefined}
					inputId={lowerInputId}
					teamName={lowerTeamName}
					imagePath={lowerImagePath}
					startingScore={match.matchRecord.lowerSeedWins}
					colorClass=""
				></MatchTeamInputArea>
			);
	}
	return teamAreas;
}
