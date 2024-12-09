import { Handle, Position, type NodeProps } from "@xyflow/react";
import { type RoundNodeComponent } from "./types.ts";
import { globalSwiss } from "../App.tsx";
import VersusRoundComponent from "./VersusRoundComponent.tsx";
import { addColor } from "../helper/color.ts";

export function StartingNodeComponent({ data }: NodeProps<RoundNodeComponent>) {
	const matches = globalSwiss.data.roundNodes.get(data.name)?.matches;
	if (!matches) {
		throw new Error();
	}
	const matchesComponents = matches.map((match) => (
		<VersusRoundComponent
			key={match.id}
			match={match}
			updateSwissFun={data.updateSwissFun}
		></VersusRoundComponent>
	));
	let classes = "versus-section-round-title bourgeois ";
	classes = addColor(data.name, classes, [
		"round-winning",
		"round-middle",
		"round-losing",
		"round-start",
	]);
	return (
		// We add this class to use the same styles as React Flow's default nodes.
		<div className="react-flow__node-default">
			<p className={classes}>{data.name}</p>
			<div className="versus-area">{matchesComponents}</div>
			<Handle type="source" position={Position.Right} id={"b"} />
		</div>
	);
}
