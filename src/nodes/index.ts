import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { VerticalInputNode } from "./VerticalInputNode";
import { MatchNode } from "./MatchNode";
import { AppNode } from "./types";

export const initialNodes: AppNode[] = [
	{ id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "wire" } },
	{
		id: "b",
		type: "position-logger",
		position: { x: -100, y: 100 },
		data: { label: "drag me!" },
	},
	{ id: "c", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
	{
		id: "d",
		type: "output",
		position: { x: 0, y: 200 },
		data: { label: "with React Flow" },
	},
	{
		id: "f",
		type: "match",
		position: { x: -500, y: -125 },
		data: { team1: "NRG", team2: "VITALITY", isStarting: true },
	},
];

export const nodeTypes = {
	"position-logger": PositionLoggerNode,
	// Add any of your custom nodes here!
	"vertical-input": VerticalInputNode,
	match: MatchNode,
} satisfies NodeTypes;
