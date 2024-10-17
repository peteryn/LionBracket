import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";

import { type MatchNode } from "./types";
import MatchComponent from "./MatchComponent";
import { getScore } from "../helper/score";

export function MatchNode({ data }: NodeProps<MatchNode>) {
	const node = data;
	function declareWinner() {
		const score1 = getScore(node.getTeam1InputId());
		const score2 = getScore(node.getTeam2InputId());

		if (score1 > score2) {
			console.log("Team 1 won!");
			if (!data.target) {
				return;
			}
			const newEdge: Edge = {
				id: node.getTeam1InputId().concat("w"),
				source: node.getNodeId(),
				target: node.target!.getNodeId(),
				targetHandle: "b1r2m1i1",
				type: "straight",
			};
			console.log(data.getOutputHandle1Id());
			console.log(data.target.getInputHandle1Id());
			console.log(newEdge);
			// data.update(newEdge);
		} else if (score1 < score2) {
			console.log("Team 2 won!");
		} else {
			console.log("It's a draw.");
		}
	}

	return (
		<div className="react-flow__node-default">
			<Handle
				type="target"
				position={Position.Left}
				id={data.getInputHandle1Id()}
				style={{ top: 20 }}
			/>
			<Handle
				type="target"
				position={Position.Left}
				id={data.getInputHandle2Id()}
				style={{ top: 40 }}
			/>

			<MatchComponent data={data} onChange={declareWinner}></MatchComponent>

			<Handle
				type="source"
				position={Position.Right}
				id={data.getOutputHandle1Id()}
				style={{ top: 20 }}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id={data.getOutputHandle1Id()}
				style={{ top: 40 }}
			/>
		</div>
	);
}
