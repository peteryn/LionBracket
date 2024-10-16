import {Handle, Position, type NodeProps} from "@xyflow/react";

import { type MatchNode } from "./types";

export function EndingMatchNode({ data }: NodeProps<MatchNode>) {

	return (
		// We add this class to use the same styles as React Flow's default nodes.
		<div className="react-flow__node-default">
            <h1>Hi</h1>
			<Handle type="target" position={Position.Left} id={data.getInputHandle1Id()} style={{ top: 20 }} />
			<Handle type="target" position={Position.Left} id={data.getInputHandle2Id()} style={{ top: 40 }} />
		</div>
	);
}
