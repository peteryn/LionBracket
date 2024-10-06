import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";

import { type MatchNode } from "./types";

export function MatchNode({ data }: NodeProps<MatchNode>) {
	const team1Id = data.round.concat(data.matchNumber).concat("u");
	const team2Id = data.round.concat(data.matchNumber).concat("l");

	function declareWinner(e: any, team: string) {
		const value1 = (document.getElementById(team1Id) as HTMLInputElement).value;
		const value2 = (document.getElementById(team2Id) as HTMLInputElement).value;
		if (value2 == "") {
			console.log("val 2 is nothing");
		}
		console.log(`team1: ${value1}, team2: ${value2}`);

		// const newEdge: Edge = {
		//         id: `edge-${team}`,
		//         source: 'a', // Replace with actual source node ID
		//         target: 'c', // Replace with actual target node ID
		//         type: 'smoothstep', // or any other type you prefer
		//     };
		// data.update(newEdge)
	}

	return (
		<div className="react-flow__node-default">
			<div>
				{data.team1}
				<input
					id={team1Id}
					type="text"
					style={{ width: 10, marginLeft: 10 }}
					onChange={(e) => declareWinner(e, "team1")}
				/>
			</div>
			<div>
				{data.team2}
				<input id={team2Id} type="text" style={{ width: 10, marginLeft: 10 }} />
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
