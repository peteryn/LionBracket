import { getScore } from "../../helper/score";
import { paths } from "../../helper/TeamsTranslator";
import MatchTeamInputArea from "./MatchTeamInputArea";
import { EliminationMatchNode } from "../types.ts";

export function createMatches(data: EliminationMatchNode) {
	// const match = data.matchNode.match;
	const upperInputId = `${data.bracketName}.${data.matchNode.name}upper`;
	const lowerInputId = `${data.bracketName}.${data.matchNode.name}lower`;

	function onChange() {
		const upperTeamWins = getScore(upperInputId);
		const lowerTeamWins = getScore(lowerInputId);
		const bracket = data.bracket;
		const matchRecord = bracket.getMatchRecord(data.matchNode.name);

		if (matchRecord?.type === "FullRecord") {
			matchRecord.upperSeedWins = upperTeamWins;
			matchRecord.lowerSeedWins = lowerTeamWins;
			bracket.setMatchRecord(data.matchNode.name, matchRecord);
			if (data.updateFun) {
				bracket.updateFlow(data.matchNode);
				const nodeList = bracket.getAllMatchNodes();
				const cloned = structuredClone(nodeList);
				bracket.buildBracket(cloned);

				data.updateFun(cloned);
			} else {
				console.log("afl update function doesn't exist when it should");
			}
		}
	}

	let teamAreas;
	const matchRecord = data.matchNode.matchRecord;
	switch (matchRecord?.type) {
		case "FullRecord": {
			const upperImagePath = `/logos/${paths[matchRecord.upperSeed - 1]}.png`;
			const lowerImagePath = `/logos/${paths[matchRecord.lowerSeed - 1]}.png`;
			const upperTeamName = paths[matchRecord.upperSeed - 1].replace("_", " ");
			const lowerTeamName = paths[matchRecord.lowerSeed - 1].replace("_", " ");
			let colorClassUpper = "";
			let colorClassLower = "";
			if (matchRecord.upperSeedWins > matchRecord.lowerSeedWins) {
				colorClassUpper = "round-winning-text";
				// colorClassLower = "round-losing-text";
			}
			if (matchRecord.lowerSeedWins > matchRecord.upperSeedWins) {
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
						startingScore={matchRecord.upperSeedWins}
						colorClass={colorClassUpper}
					></MatchTeamInputArea>

					<MatchTeamInputArea
						updateFun={onChange}
						showScore={true}
						inputId={lowerInputId}
						teamName={lowerTeamName}
						imagePath={lowerImagePath}
						startingScore={matchRecord.lowerSeedWins}
						colorClass={colorClassLower}
					></MatchTeamInputArea>
				</>
			);
			break;
		}
		case "UpperRecord": {
			const upperImagePath = `/logos/${paths[matchRecord.upperSeed - 1]}.png`;
			const upperTeamName = paths[matchRecord.upperSeed - 1].replace("_", " ");
			teamAreas = (
				<MatchTeamInputArea
					updateFun={() => {
					}}
					showScore={false}
					inputId={upperInputId}
					teamName={upperTeamName}
					imagePath={upperImagePath}
					startingScore={matchRecord.upperSeedWins}
					colorClass=""
				></MatchTeamInputArea>
			);
			break;
		}
		case "LowerRecord": {
			const lowerImagePath = `/logos/${paths[matchRecord.lowerSeed - 1]}.png`;
			const lowerTeamName = paths[matchRecord.lowerSeed - 1].replace("_", " ");
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
						startingScore={matchRecord.lowerSeedWins}
						colorClass=""
					></MatchTeamInputArea>
				</>
			);
		}
	}
	return teamAreas;
}
