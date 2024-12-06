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
	return (
		// We add this class to use the same styles as React Flow's default nodes.
		<div className="react-flow__node-default">
			<p className="versus-section-round-title">0-0</p>
			<Handle type="target" position={Position.Left} id={"a"} />
			{/* <p>{data.name}</p> */}
			<div className="versus-area">{matchesComponents}</div>
			<Handle type="source" position={Position.Right} id={"b"} />
		</div>
	);
}
