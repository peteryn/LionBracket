import { Handle, Position, type NodeProps } from "@xyflow/react";
import { type MatchNodeIsolatedComponent } from "../types.ts";
import { createMatches } from "./matchNodeHelper.tsx";

export function MatchNodeMiddleComponent2({ data }: NodeProps<MatchNodeIsolatedComponent>) {
	const teamAreas = createMatches(data);

	return (
		<div className="match-node">
			<div className="match-node-area">
				{teamAreas}
				<Handle
					type="target"
					position={Position.Left}
					id={`${data.inputHandleId}Ghost`}
					style={{ top: "30px" }}
				></Handle>
				<Handle
					type="target"
					position={Position.Left}
					id={data.inputHandleId}
					style={{ top: "70px" }}
				></Handle>
				<Handle type="source" position={Position.Right} id={data.outputHandleId}></Handle>
			</div>
		</div>
	);
}
