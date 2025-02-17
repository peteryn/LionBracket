import { Handle, Position, type NodeProps } from "@xyflow/react";
import { type RoundNodeComponent } from "./types.ts";
import { createMatches, createRoundCSS } from "../helper/roundNodeHelper.tsx";

export function StartingNodeComponent({ data }: NodeProps<RoundNodeComponent>) {
	const matchesComponents = createMatches(data);
	const classes = createRoundCSS(data.name);
	return (
		// We add this class to use the same styles as React Flow's default nodes.
		<div className="react-flow__node-default round-node">
			<p className={classes}>{data.name}</p>
			<div className="versus-area versus-grid">
				<div>
					<p>test</p>
				</div>

				<div>
					<p>vs</p>
				</div>

				<div>
					<p>test</p>
				</div>
			</div>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt illum, facere officiis consequatur a, omnis voluptate rem explicabo alias sunt hic quo eius quae asperiores ex temporibus magnam aliquid saepe.
			<Handle type="source" position={Position.Right} id={data.outputHandleId} />
		</div>
	);
}
