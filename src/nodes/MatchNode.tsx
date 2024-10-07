import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";

import { type MatchNode } from "./types";

export function MatchNode({ data }: NodeProps<MatchNode>) {
	const node = data;

	const team1Id = node.getTeam1InputId();
	const team2Id = node.getTeam2InputId();

	function declareWinner() {
		const score1 = getScore(team1Id);
		const score2 = getScore(team2Id);

		if (score1 > score2) {
			console.log("Team 1 won!");
			if (!data.target) {
				return;
			}
			const newEdge: Edge = {
				id: team1Id.concat("w"),
				source: data.getNodeId(),
				target: data.target,
				type: "smoothstep",
			};
			console.log(newEdge);
			data.update(newEdge);
		} else if (score1 < score2) {
			console.log("Team 2 won!");
			data.remove("new");
		} else {
			console.log("It's a draw.");
		}
	}

	return (
		<div className="react-flow__node-default">
			<div>
				{data.team1}
				<input
					id={team1Id}
					type="text"
					style={{ width: 10, marginLeft: 10 }}
					onChange={declareWinner}
				/>
			</div>
			<div>
				{data.team2}
				<input
					id={team2Id}
					type="text"
					style={{ width: 10, marginLeft: 10 }}
					onChange={declareWinner}
				/>
			</div>

			<StartingNode isStarting={data.isStarting ?? false}></StartingNode>
			<EndingNode isEnding={data.isEnding ?? false}></EndingNode>
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
