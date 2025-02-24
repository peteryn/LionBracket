import { Handle, Position } from "@xyflow/react";

export function GhostNode() {
	return (
		<div style={{ width: 5, height: 5 }}>
			<Handle
                id="ghostEdge"
				type="target"
				position={Position.Top}
				// isConnectable={false}
				style={{ background: "white" }}
			/>
		</div>
	);
}
