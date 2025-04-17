import { getScore } from "../../helper/score";
import { paths } from "../../helper/TeamsTranslator";
import { MatchNodeType } from "./MatchNodeType";
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
				bracket.updateFlow(data.matchNode);
				const nodeList = bracket.getAllMatchNodes();
				const cloned = structuredClone(nodeList);
				bracket.buildBracket(cloned);

				data.updateFun(cloned);
				// data.updateFun([]);
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
			const upperTeamName = paths[match.matchRecord.upperSeed - 1].replace("_", " ");
			const lowerTeamName = paths[match.matchRecord.lowerSeed - 1].replace("_", " ");
			let colorClassUpper = "";
			let colorClassLower = "";
			if (match.matchRecord.upperSeedWins > match.matchRecord.lowerSeedWins) {
				colorClassUpper = "round-winning-text";
				// colorClassLower = "round-losing-text";
			}
			if (match.matchRecord.lowerSeedWins > match.matchRecord.upperSeedWins) {
				colorClassLower = "round-winning-text";
				// colorClassLower = "round-winning-text";
			}

			teamAreas = (
				<>
					<MatchTeamInputArea
						updateFun={onChange}
						showScore={true}
						inputId={upperInputId}
						teamName={upperTeamName}
						imagePath={upperImagePath}
						startingScore={match.matchRecord.upperSeedWins}
						colorClass={colorClassUpper}
					></MatchTeamInputArea>

					<MatchTeamInputArea
						updateFun={onChange}
						showScore={true}
						inputId={lowerInputId}
						teamName={lowerTeamName}
						imagePath={lowerImagePath}
						startingScore={match.matchRecord.lowerSeedWins}
						colorClass={colorClassLower}
					></MatchTeamInputArea>
				</>
			);
			break;
		}
		case "UpperRecord": {
			const upperImagePath = `/logos/${paths[match.matchRecord.upperSeed - 1]}.png`;
			const upperTeamName = paths[match.matchRecord.upperSeed - 1].replace("_", " ");
			teamAreas = (
				<MatchTeamInputArea
					updateFun={() => {
					}}
					showScore={false}
					inputId={upperInputId}
					teamName={upperTeamName}
					imagePath={upperImagePath}
					startingScore={match.matchRecord.upperSeedWins}
					colorClass=""
				></MatchTeamInputArea>
			);
			break;
		}
		case "LowerRecord": {
			const lowerImagePath = `/logos/${paths[match.matchRecord.lowerSeed - 1]}.png`;
			const lowerTeamName = paths[match.matchRecord.lowerSeed - 1].replace("_", " ");
			teamAreas = (
				<>
					<div></div>
					<MatchTeamInputArea
						updateFun={() => {
						}}
						showScore={false}
						inputId={lowerInputId}
						teamName={lowerTeamName}
						imagePath={lowerImagePath}
						startingScore={match.matchRecord.lowerSeedWins}
						colorClass=""
					></MatchTeamInputArea>
				</>
			);
		}
	}
	return teamAreas;
}
