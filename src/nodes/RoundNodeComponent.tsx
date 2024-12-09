import { Handle, Position, type NodeProps } from "@xyflow/react";
import { type RoundNodeComponent } from "./types.ts";
import { globalSwiss } from "../App.tsx";
import VersusRoundComponent from "./VersusRoundComponent.tsx";
import { addColor } from "../helper/color.ts";
import { RoundNodeType } from "./RoundNodeType.ts";

export function RoundNodeComponent({ data }: NodeProps<RoundNodeComponent>) {
	const matchesComponents = createMatches(data);
	const classes = createRoundCSS(data.name);
	return (
		// We add this class to use the same styles as React Flow's default nodes.
		<div className="react-flow__node-default">
			<p className={classes}>{data.name}</p>
			<Handle type="target" position={Position.Left} id={data.inputHandleId} />
			<div className="versus-area">{matchesComponents}</div>
			<Handle type="source" position={Position.Right} id={data.outputHandleId} />
		</div>
	);
}

export function createMatches(data: RoundNodeType) {
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
	return matchesComponents;
}

export function createRoundCSS(name: string) {
	let classes = "versus-section-round-title bourgeois ";
	classes = addColor(name, classes, [
		"round-winning",
		"round-middle",
		"round-losing",
		"round-start",
	]);
	return classes;
}
