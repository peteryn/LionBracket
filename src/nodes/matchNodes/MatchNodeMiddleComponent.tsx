import { Handle, Position, type NodeProps } from "@xyflow/react";
import { type MatchNodeIsolatedComponent } from "../types.ts";
import { createMatches } from "./matchNodeHelper.tsx";

export function MatchNodeMiddleComponent({ data }: NodeProps<MatchNodeIsolatedComponent>) {
	const teamAreas = createMatches(data);
	return (
		<div className="match-node">
			<div className="match-node-area">
				{teamAreas}
				<Handle type="source" position={Position.Right} id={data.outputHandleId}></Handle>
				<Handle type="target" position={Position.Left} id={data.inputHandleId}></Handle>
			</div>
		</div>
	);
}
