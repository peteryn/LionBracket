import { Handle, Position, type NodeProps } from "@xyflow/react";
import { type ChampionNodeComponent } from "../types";

export function ChampionNodeComponent({ data }: NodeProps<ChampionNodeComponent>) {
	let image = null;
	if (data.imagePath !== "") {
		image = <img src={data.imagePath} alt={data.teamName}/>
	}
	return (
		<div className="champion-node">
			<p className="bourgeois champion-title">CHAMPION</p>
			<div className="champion-area">
				<div className="champion-image-container">
					{ image }
				</div>
				<p className="bebas-neue-regular champion-name">{data.teamName}</p>
			</div>
			<Handle type="target" position={Position.Left} id="champion:Input"></Handle>
		</div>
	);
}
