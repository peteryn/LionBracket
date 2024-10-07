import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { VerticalInputNode } from "./VerticalInputNode";
import { MatchNode } from "./MatchNode";
import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
	{
		id: "r1m1",
		type: "match",
		position: { x: -500, y: -200 },
		data: {
			team1: "NRG",
			team2: "VITALITY",
			isStarting: true,
			round: "r1",
			matchNumber: "m1",
			target: "r2m1",
			targetPos: "u",
		},
	},
	{
		id: "r1m2",
		type: "match",
		position: { x: -500, y: -125 },
		data: {
			team1: "G2",
			team2: "BDS",
			isStarting: true,
			round: "r1",
			matchNumber: "m2",
			target: "r2m1",
			targetPos: "",
		},
	},
	{
		id: "r2m1",
		type: "match",
		position: { x: -300, y: -162.5 },
		data: {
			team1: "",
			team2: "",
			isStarting: false,
			round: "r2",
			matchNumber: "m1",
		},
	},
];

function test() {
	const newNode: AppNode = {
		id: "r1m3",
		type: "match",
		position: { x: -500, y: 0 },
		data: { team1: "NRG", team2: "VITALITY", isStarting: true, round: "r1", matchNumber: "m1" },
	};
	initialNodes.push(newNode);
}

test();

export const nodeTypes = {
	"position-logger": PositionLoggerNode,
	// Add any of your custom nodes here!
	"vertical-input": VerticalInputNode,
	match: MatchNode,
} satisfies NodeTypes;
