import { Handle, Position } from "@xyflow/react";
import { TeamBox } from "../helper/TeamBox";

export function QualifiedNodeComponent() {
	return (
		<div className="react-flow__node-default qualified">
			<p className="versus-section-round-title bourgeois">QUALIFIED</p>
			<Handle type="target" position={Position.Left} id={"q1"} />

			<div className="qualified-area">
				<TeamBox imagePath=""></TeamBox>
				<TeamBox imagePath=""></TeamBox>
			</div>
		</div>
	);
}
