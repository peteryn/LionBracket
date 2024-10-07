import type { NodeTypes } from "@xyflow/react";

import { PositionLoggerNode } from "./PositionLoggerNode";
import { VerticalInputNode } from "./VerticalInputNode";
import { MatchNode } from "./MatchNode";
import { AppNode } from "./types";
import { Match } from "./Match";

export const initialNodes: AppNode[] = [];


function create4TeamSingleElimination(bracketId: string) {
	const m1 = new Match(bracketId, "r1", "m1", "NRG", "Vitality", true);
	const m2 = new Match(bracketId, "r1", "m2", "Falcons", "G2", true);
	const m3 = new Match(bracketId, "r2", "m1", "", "");
	m1.target = m3.getNodeId();
	m2.target = m3.getNodeId();
	// TODO: write efficient way to calculate coordinate positions
	initialNodes.push(createMatchNode(m1, -500, -200));
	initialNodes.push(createMatchNode(m2, -500, -125));
	initialNodes.push(createMatchNode(m3, -250, -162.5));
}

function createMatchNode(data: Match, x: number, y: number): AppNode {
	return {
		id: data.getNodeId(),
		type: "match",
		position: { x: x, y: y },
		data: data,
	};
}

create4TeamSingleElimination("b1");

export const nodeTypes = {
	"position-logger": PositionLoggerNode,
	// Add any of your custom nodes here!
	"vertical-input": VerticalInputNode,
	match: MatchNode,
} satisfies NodeTypes;
