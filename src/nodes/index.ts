import type { NodeTypes } from "@xyflow/react";

import { MatchNode } from "./MatchNode";
import { AppNode } from "./types";
import { Match } from "./Match";
import { Team } from "../teams/Team";
import { StartingMatchNode } from "./StartingMatchNode";
import { EndingMatchNode } from "./EndingMatchNode";
import { RoundNodeComponent } from "./RoundNodeComponent";

import { SwissBracket } from "../../BracketLion/SwissBracket";
import { RoundNodeType } from "./RoundNodeType";
export const swiss = new SwissBracket();

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

	initialNodes.push({
		id: m1.getNodeId(),
		type: "starting-match",
		position: { x: -200, y: 0 },
		data: m1,
	});
	initialNodes.push({
		id: m2.getNodeId(),
		type: "ending-match",
		position: { x: 200, y: 0 },
		data: m2,
	});
}

function createMatchNode(data: Match, x: number, y: number): AppNode {
	return {
		id: data.getNodeId(),
		type: "match",
		position: { x: x, y: y },
		data: data,
	};
}

function createSwissNodes() {
	// initialNodes.push({
	// 	id: "1",
	// 	type: "round-node-component",
	// 	position: {x: 0, y: 0},
	// 	data: {label: "hi"},
	// })

	let idVal = 0;
	let xVal = 0;
	let yVal = 0;
	swiss.levelOrderTraversal(swiss.rootRound, undefined, (level) => {
		yVal = 0;
		if (level.length === 1) {
			level.forEach((node) => {
				const roundNodeType = new RoundNodeType(node.name);
				const obj: AppNode = {
					id: node.name,
					position: { x: xVal, y: yVal },
					data: roundNodeType,
					type: "round-node-component",
				};
				initialNodes.push(obj);
				idVal++;
				yVal += 100;
			});
		}
		if (level.length === 2) {
			yVal = -50;
			level.forEach((node) => {
				const roundNodeType = new RoundNodeType(node.name);
				const obj: AppNode = {
					id: node.name,
					position: { x: xVal, y: yVal },
					data: roundNodeType,
					type: "round-node-component",
				};
				initialNodes.push(obj);
				idVal++;
				yVal += 100;
			});
		}
		if (level.length === 3) {
			yVal = -100;
			level.forEach((node) => {
				const roundNodeType = new RoundNodeType(node.name);
				const obj: AppNode = {
					id: node.name,
					position: { x: xVal, y: yVal },
					data: roundNodeType,
					type: "round-node-component",
				};
				initialNodes.push(obj);
				idVal++;
				yVal += 100;
			});
		}

		xVal += 225;
	});
}

// create4TeamSingleElimination("b1");
// create2Team("b1");
createSwissNodes();

export const nodeTypes = {
	// Add any of your custom nodes here!
	"starting-match": StartingMatchNode,
	"ending-match": EndingMatchNode,
	"round-node-component": RoundNodeComponent,
	match: MatchNode,
} satisfies NodeTypes;
