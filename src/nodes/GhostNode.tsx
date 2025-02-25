import { Handle, NodeProps, Position } from "@xyflow/react";
import { type GhostNode } from "./types.ts";

export function GhostNode({ data }: NodeProps<GhostNode>) {
	return (
		<div style={{ width: 5, height: 5 }}>
			<Handle
                id={data.outputHandleId}
				type="source"
				position={Position.Right}
				isConnectable={false}
				style={{ background: "", opacity: 0 }}
			/>
		</div>
	);
}
