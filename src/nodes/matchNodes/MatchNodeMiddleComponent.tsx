import { Handle, Position, type NodeProps } from "@xyflow/react";
import { type MatchNodeIsolatedComponent } from "../types.ts";
import MatchTeamInputArea from "./MatchTeamInputArea.tsx";

export function MatchNodeMiddleComponent({ data }: NodeProps<MatchNodeIsolatedComponent>) {
	return (
		<div className="match-node">
			<div className="match-node-area">
				<MatchTeamInputArea
					updateFun={() => {}}
					inputId="test"
					teamName="G2 Esports"
					imagePath="/logos/g2.png"
					startingScore={0}
					colorClass=""
				></MatchTeamInputArea>

				<MatchTeamInputArea
					updateFun={() => {}}
					inputId="test"
					teamName="Vitality"
					imagePath="/logos/vitality.png"
					startingScore={0}
					colorClass=""
				></MatchTeamInputArea>
				<Handle type="source" position={Position.Right} id={data.outputHandleId}></Handle>
				<Handle type="target" position={Position.Left} id={data.inputHandleId}></Handle>
			</div>
		</div>
	);
}
