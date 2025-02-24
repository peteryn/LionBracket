import { Handle, Position, type NodeProps } from "@xyflow/react";
import { type MatchNodeIsolatedComponent } from "../types.ts";
import MatchTeamInputArea from "./MatchTeamInputArea.tsx";

export function MatchNodeMiddleComponent2({ data }: NodeProps<MatchNodeIsolatedComponent>) {
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
				<Handle
					type="source"
					position={Position.Left}
					id={data.inputHandleId}
					style={{ top: "33px" }}
				></Handle>
				<Handle
					type="source"
					position={Position.Left}
					id={"test3"}
					style={{ top: "66px" }}
				></Handle>
			</div>
		</div>
	);
}
