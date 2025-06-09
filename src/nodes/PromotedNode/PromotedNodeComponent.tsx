import { type PromotedNodeComponent } from "../types.ts";
import { Handle, NodeProps, Position } from "@xyflow/react";

export function PromotedNodeComponent({ data }: NodeProps<PromotedNodeComponent>) {
	let image = null;
	if (data.imagePath !== "") {
		image = <img src={data.imagePath} alt={data.teamName}/>
	}
	return (
		<div className="promoted-node">
			<div className="match-team-area-image-container">
				{image}
			</div>
			<div className="promoted-team-name-text bebas-neue-regular">
				<p>{data.teamName}</p>
			</div>
			<Handle id={data.inputId} type={"target"} position={Position.Left}></Handle>
		</div>
	);
}