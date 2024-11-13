import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";
import { type RoundNodeComponent } from "./types";

export function RoundNodeComponent({data}: NodeProps<RoundNodeComponent>) {

	return (
		// We add this class to use the same styles as React Flow's default nodes.
		<div className="react-flow__node-default">
			<Handle
				type="target"
				position={Position.Left}
				id={"a"}
			/>
			<p>{data.name}</p>
			<Handle
				type="source"
				position={Position.Right}
				id={"b"}
			/>
		</div>
	);
}