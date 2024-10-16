import {Handle, Position, type NodeProps, type Edge} from "@xyflow/react";

import { type MatchNode } from "./types";
import MatchComponent from "./MatchComponent";
import { useCallback } from "react";
import { getScore } from "./helper/score";

export function EndingMatchNode({ data }: NodeProps<MatchNode>) {

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
			<Handle type="target" position={Position.Left} id={data.getInputHandle1Id()} style={{ top: 20 }} />
			<Handle type="target" position={Position.Left} id={data.getInputHandle2Id()} style={{ top: 40 }} />
		</div>
	);
}
