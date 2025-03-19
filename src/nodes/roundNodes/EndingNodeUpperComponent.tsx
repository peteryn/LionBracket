import { Handle, Position, type NodeProps } from "@xyflow/react";
import { type RoundNodeComponent } from "../types.ts";
import { createMatches, createRoundCSS } from "./roundNodeHelper.tsx";

export function EndingNodeUpperComponent({ data }: NodeProps<RoundNodeComponent>) {
	const matchesComponents = createMatches(data);
	const classes = createRoundCSS(data.name);
	return (
		// We add this class to use the same styles as React Flow's default nodes.
		<div className="react-flow__node-default">
			<p className={classes}>{data.name}</p>
			<Handle type="target" position={Position.Left} id={data.inputHandleId} />
			<div className="versus-area">{matchesComponents}</div>
			<Handle type="source" position={Position.Right} id={data.outputHandleId} />
			<Handle
				type="source"
				isConnectable={false}
				position={Position.Right}
				id={data.qualifiedHandleId}
				className="qualified-handle"
			/>
		</div>
	);
}
