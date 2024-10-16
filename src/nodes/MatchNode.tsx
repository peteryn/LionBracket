import { Handle, Position, type NodeProps, type Edge, useUpdateNodeInternals } from "@xyflow/react";

import { type MatchNode } from "./types";
import { useEffect, useState } from "react";

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
			<div>
				{node.team1?.name}
				<img src={node.team1?.logo} alt="" height={10} width={10} />
				<input
					id={node.getTeam1InputId()}
					type="text"
					style={{ width: 10, marginLeft: 10 }}
					onChange={declareWinner}
				/>
			</div>
			<div>
				{node.team2?.name}
				<img src={node.team2?.logo} alt="" height={10} width={10} />
				<input
					id={node.getTeam2InputId()}
					type="text"
					style={{ width: 10, marginLeft: 10 }}
					onChange={declareWinner}
				/>
			</div>

			<StartingNode
				isStarting={node.isStarting ?? false}
				id1={node.getInputHandle1Id()}
				id2={node.getInputHandle1Id()}
			></StartingNode>
			<EndingNode
				isEnding={node.isEnding ?? false}
				id1={node.getOutputHandle1Id()}
				id2={node.getOutputHandle2Id()}
			></EndingNode>
		</div>
	);
}

function getScore(id: string): number {
	const stringValue = (document.getElementById(id) as HTMLInputElement).value;
	if (stringValue === "") {
		return 0;
	} else {
		return Number(stringValue);
	}
}

// TODO: work on creating unqiue ids for handles
function StartingNode({ isStarting, id1, id2 }: { isStarting: boolean; id1: string; id2: string }) {
	if (!isStarting) {
		return (
			<>
				<Handle type="source" position={Position.Left} id={id1} style={{ top: 20 }} />
				<Handle type="source" position={Position.Left} id={id2} style={{ top: 40 }} />
			</>
		);
	} else {
		return null;
	}
}

function EndingNode({ isEnding, id1, id2 }: { isEnding: boolean; id1: string; id2: string }) {
	if (!isEnding) {
		return (
			<>
				<Handle type="target" position={Position.Right} id={id1} style={{ top: 20 }} />
				<Handle type="target" position={Position.Right} id={id2} style={{ top: 40 }} />
			</>
		);
	} else {
		return null;
	}
}
