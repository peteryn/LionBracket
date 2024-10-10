import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";

import { type MatchNode } from "./types";

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
				source: data.getNodeId(),
				target: data.target,
				type: "smoothstep",
			};
			console.log(newEdge);
			data.update(newEdge);
		} else if (score1 < score2) {
			console.log("Team 2 won!");
		} else {
			console.log("It's a draw.");
		}
	}

	return (
		<div className="react-flow__node-default">
			<div>
				{node.team1}
				<input
					id={node.getTeam1InputId()}
					type="text"
					style={{ width: 10, marginLeft: 10 }}
					onChange={declareWinner}
				/>
			</div>
			<div>
				{node.team2}
				<input
					id={node.getTeam2InputId()}
					type="text"
					style={{ width: 10, marginLeft: 10 }}
					onChange={declareWinner}
				/>
			</div>

			<StartingNode isStarting={node.isStarting ?? false}></StartingNode>
			<EndingNode isEnding={node.isEnding ?? false}></EndingNode>
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
function StartingNode({ isStarting }: { isStarting: boolean }) {
	if (!isStarting) {
		return (
			<>
				<Handle type="target" position={Position.Left} id="a" style={{ top: 20 }} />
				<Handle type="target" position={Position.Left} id="b" style={{ top: 40 }} />
			</>
		);
	} else {
		return null;
	}
}

function EndingNode({ isEnding }: { isEnding: boolean }) {
	if (!isEnding) {
		return (
			<>
				<Handle type="source" position={Position.Right} id="c" style={{ top: 20 }} />
				<Handle type="source" position={Position.Right} id="d" style={{ top: 40 }} />
			</>
		);
	} else {
		return null;
	}
}
