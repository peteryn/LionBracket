import { Handle, Position } from "@xyflow/react";

export function GhostNode() {
	return (
		<div style={{ width: 5, height: 5 }}>
			<Handle
                id="ghostEdge"
				type="source"
				position={Position.Right}
				isConnectable={false}
				style={{ background: "", opacity: 0 }}
			/>
		</div>
	);
}
