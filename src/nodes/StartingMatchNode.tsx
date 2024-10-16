import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";

import { type MatchNode } from "./types";
import { useCallback } from "react";
import { getScore } from "./helper/score";
import MatchComponent from "./MatchComponent";

export function StartingMatchNode({ data }: NodeProps<MatchNode>) {
	const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
		console.log("callback called");
		console.log(evt.target.value);
		const score1 = getScore(data.getTeam1InputId());
		const score2 = getScore(data.getTeam2InputId());
		console.log(score1);
		console.log(score2);
		const newEdge: Edge = {
			id: data.getTeam1InputId().concat("w"),
			source: data.getNodeId(),
			target: data.target!.getNodeId(),
			sourceHandle: data.getOutputHandle1Id(),
			targetHandle: data.target!.getInputHandle1Id(),
			type: "straight",
		};
		data.update(newEdge);
	}, []);

	return (
		// We add this class to use the same styles as React Flow's default nodes.
		<div className="react-flow__node-default">
			<MatchComponent data={data} onChange={onChange}></MatchComponent>

			<Handle
				type="source"
				position={Position.Right}
				id={data.getOutputHandle1Id()}
				style={{ top: 20 }}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id={data.getOutputHandle2Id()}
				style={{ top: 40 }}
			/>
		</div>
	);
}
