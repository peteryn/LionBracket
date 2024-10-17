import type { NodeTypes } from "@xyflow/react";

import { MatchNode } from "./MatchNode";
import { AppNode } from "./types";
import { Match } from "./Match";
import { Team } from "../teams/Team";
import { StartingMatchNode } from "./StartingMatchNode";
import { EndingMatchNode } from "./EndingMatchNode";

export const initialNodes: AppNode[] = [
	// { id: "a", position: { x: 0, y: 0 }, data: {} },
];

function create4TeamSingleElimination(bracketId: string) {
	const nrg = new Team("NRG", 1, "nrg.png");
	const vitality = new Team("Vitality", 2, "vitality.png");
	const falcons = new Team("Falcons", 3, "falcons.png");
	const g2 = new Team("G2 Esports", 4, "g2.png");

	const m1 = new Match(bracketId, "r1", "m1", nrg, vitality, true);
	const m2 = new Match(bracketId, "r1", "m2", g2, falcons, true);
	const m3 = new Match(bracketId, "r2", "m1", undefined, undefined);
	m1.target = m3;
	m2.target = m3;
	// TODO: write efficient way to calculate coordinate positions
	initialNodes.push(createMatchNode(m1, -500, -200));
	initialNodes.push(createMatchNode(m2, -500, -125));
	initialNodes.push(createMatchNode(m3, -250, -162.5));
	initialNodes.push({
		id: m1.getNodeId().concat("esta"),
		type: "starting-match",
		position: { x: 0, y: 0 },
		data: m1,
	});
}

function create1Team(bracketId: string) {
	const nrg = new Team("NRG", 1, "nrg.png");
	const vitality = new Team("Vitality", 2, "vitality.png");
	const m1 = new Match(bracketId, "r1", "m1", nrg, vitality, true);
	initialNodes.push(createMatchNode(m1, -500, -200));
}

function create2Team(bracketId: string) {
	const nrg = new Team("NRG", 1, "nrg.png");
	const vitality = new Team("Vitality", 2, "vitality.png");
	const falcons = new Team("Falcons", 3, "falcons.png");
	const g2 = new Team("G2 Esports", 4, "g2.png");

	const m1 = new Match(bracketId, "r1", "m1", nrg, vitality, true);
	const m2 = new Match(bracketId, "r2", "m1", g2, falcons, true);
	m1.target = m2;

	initialNodes.push(
		{
			id: m1.getNodeId(),
			type: "starting-match",
			position: {x: -200, y:0},
			data: m1
		}
	)
	initialNodes.push(
		{
			id: m2.getNodeId(),
			type: "ending-match",
			position: {x: 200, y:0},
			data: m2
		}
	)
}

function createMatchNode(data: Match, x: number, y: number): AppNode {
	return {
		id: data.getNodeId(),
		type: "match",
		position: { x: x, y: y },
		data: data,
	};
}

// create4TeamSingleElimination("b1");
create2Team("b1");

export const nodeTypes = {
	// Add any of your custom nodes here!
	"starting-match": StartingMatchNode,
	"ending-match": EndingMatchNode,
	match: MatchNode,
} satisfies NodeTypes;
