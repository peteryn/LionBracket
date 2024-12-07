import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";
import { type RoundNodeComponent } from "./types.ts";
import { getScore } from "../helper/score.ts";
import { globalSwiss } from "../App.tsx";
import VersusRoundComponent from "./VersusRoundComponent.tsx";

export function RoundNodeComponent({ data }: NodeProps<RoundNodeComponent>) {
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
			<Handle type="target" position={Position.Left} id={"a"} />
			{/* <p>{data.name}</p> */}
			<div className="versus-area">{matchesComponents}</div>
			<Handle type="source" position={Position.Right} id={"b"} />
		</div>
	);
}

export function addColor(discriminator: string, classes: string, colorClasses: string[]) {
	switch (discriminator) {
		case "1-0":
		case "2-0":
			classes += colorClasses[0];
			break;
		case "0-1":
		case "1-1":
		case "2-1":
			classes += colorClasses[1];
			break;
		case "0-2":
		case "1-2":
		case "2-2":
			classes += colorClasses[2];
			break;
		default:
			classes += colorClasses[3];
	}
	return classes;
}
