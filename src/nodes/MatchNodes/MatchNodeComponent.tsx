import { Handle, NodeProps, Position } from "@xyflow/react";
import { type MatchNodeComponent } from "../types.ts";
import { Bracket } from "../../../LionBracketEngine/src/models/bracket.ts";
import { getScore } from "../../helper/score.ts";
import { MatchNodeType } from "./MatchNodeType.ts";
import MatchTeamInputArea from "./MatchTeamInputArea.tsx";
import { useRef } from "react";

export function MatchNodeComponent<NodeNames extends string, B extends Bracket<NodeNames>>({ data }: NodeProps<MatchNodeComponent<NodeNames, B>>) {
	const teamAreas = createMatches(data);

	return (
		<div className="match-node">
			<div className="match-node-area">
				{teamAreas}
				<Handle
					type="target"
					position={Position.Left}
					id={`${data.upperInputHandleId}`}
					style={{ top: "30px" }}
				></Handle>
				<Handle type="target" position={Position.Left} id={data.middleInputHandleId}></Handle>
				<Handle
					type="target"
					position={Position.Left}
					id={data.lowerInputHandleId}
					style={{ top: "70px" }}
				></Handle>
				<Handle type="source" position={Position.Right} id={data.outputHandleId}></Handle>
			</div>
		</div>
	);
}

function createMatches<NodeNames extends string, B extends Bracket<NodeNames>>(data: MatchNodeType<NodeNames, B>) {
	const upperInputId = `${data.bracketId}.${data.matchNode.name}upper`;
	const lowerInputId = `${data.bracketId}.${data.matchNode.name}lower`;

	const upperInputRef = useRef<HTMLInputElement>(null);
	const lowerInputRef = useRef<HTMLInputElement>(null);

	function onChange() {
		const upperTeamWins = getScore(upperInputRef);
		const lowerTeamWins = getScore(lowerInputRef);
		const bracket = data.bracket;
		const matchRecord = bracket.getMatchRecord(data.matchNode.name);

		if (matchRecord?.type === "FullRecord") {
			matchRecord.upperSeedWins = upperTeamWins;
			matchRecord.lowerSeedWins = lowerTeamWins;
			bracket.setMatchRecord(data.matchNode.name, matchRecord);
			if (data.updateFun) {
				bracket.updateFlow(data.matchNode);
				console.log(bracket);
				const nodeList = bracket.getAllMatchNodes();

				data.updateFun(nodeList);
				if (data.promoteFun) {
					data.promoteFun();
				}
			} else {
				console.log("update function doesn't exist when it should");
			}
		}
	}

	let teamAreas;
	const matchRecord = data.matchNode.matchRecord;
	switch (matchRecord?.type) {
		case "FullRecord": {
			const upperImagePath = `/logos/${data.teams[matchRecord.upperSeed - 1].path}.png`;
			const lowerImagePath = `/logos/${data.teams[matchRecord.lowerSeed - 1].path}.png`;
			const upperTeamName = data.teams[matchRecord.upperSeed - 1].name.replace("_", " ");
			const lowerTeamName = data.teams[matchRecord.lowerSeed - 1].name.replace("_", " ");
			let colorClassUpper = "";
			let colorClassLower = "";
			if (matchRecord.upperSeedWins > matchRecord.lowerSeedWins) {
				colorClassUpper = "round-winning-text";
			}
			if (matchRecord.lowerSeedWins > matchRecord.upperSeedWins) {
				colorClassLower = "round-winning-text";
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
						inputRef={upperInputRef}
					></MatchTeamInputArea>

					<MatchTeamInputArea
						updateFun={onChange}
						showScore={true}
						inputId={lowerInputId}
						teamName={lowerTeamName}
						imagePath={lowerImagePath}
						startingScore={matchRecord.lowerSeedWins}
						colorClass={colorClassLower}
						inputRef={lowerInputRef}
					></MatchTeamInputArea>
				</>
			);
			break;
		}
		case "UpperRecord": {
			const upperImagePath = `/logos/${data.teams[matchRecord.upperSeed - 1].path}.png`;
			const upperTeamName = data.teams[matchRecord.upperSeed - 1].name.replace("_", " ");
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
					inputRef={upperInputRef}
				></MatchTeamInputArea>
			);
			break;
		}
		case "LowerRecord": {
			const lowerImagePath = `/logos/${data.teams[matchRecord.lowerSeed - 1].path}.png`;
			const lowerTeamName = data.teams[matchRecord.lowerSeed - 1].name.replace("_", " ");
			teamAreas = (
				<>
					<MatchTeamInputArea
						updateFun={() => {
						}}
						showScore={false}
						inputId={lowerInputId}
						teamName={lowerTeamName}
						imagePath={lowerImagePath}
						startingScore={matchRecord.lowerSeedWins}
						colorClass=""
						inputRef={lowerInputRef}
					></MatchTeamInputArea>
				</>
			);
		}
	}
	return teamAreas;
}