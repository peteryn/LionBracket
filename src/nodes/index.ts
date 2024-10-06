import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { VerticalInputNode } from "./VerticalInputNode";
import { MatchNode } from "./MatchNode";
import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
	{
		id: "a",
		type: "match",
		position: { x: -500, y: -200 },
		data: { team1: "NRG", team2: "VITALITY", isStarting: true, round: "r1", matchNumber: "m1" },
	},
	{
		id: "b",
		type: "match",
		position: { x: -500, y: -125 },
		data: { team1: "G2", team2: "BDS", isStarting: true, round: "r1", matchNumber: "m2" },
	},
	{
		id: "c",
		type: "match",
		position: { x: -300, y: -162.5 },
		data: {
			team1: "NRG",
			team2: "VITALITY",
			isStarting: false,
			round: "r2",
			matchNumber: "m1",
		},
	},
];

export const nodeTypes = {
	"position-logger": PositionLoggerNode,
	// Add any of your custom nodes here!
	"vertical-input": VerticalInputNode,
	match: MatchNode,
} satisfies NodeTypes;
