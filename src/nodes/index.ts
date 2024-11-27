import type { NodeTypes } from "@xyflow/react";

import { MatchNode } from "./MatchNode";
import { AppNode } from "./types";
import { Match } from "../../BracketLion/models";
import { Team } from "../teams/Team";
import { StartingMatchNode } from "./StartingMatchNode";
import { EndingMatchNode } from "./EndingMatchNode";
import { RoundNodeComponent } from "./RoundNodeComponent";

import { SwissBracket } from "../../BracketLion/SwissBracket";
import { RoundNodeType } from "./RoundNodeType";
import { useState } from "react";
export const swiss = new SwissBracket();

export let initialNodes: AppNode[] = [
	// { id: "a", position: { x: 0, y: 0 }, data: {} },
];

export function createSwissNodes(swiss: SwissBracket) {
	const initialNodes: AppNode[] = [];
	let idVal = 0;
	let xVal = 0;
	let yVal = 0;
	swiss.levelOrderTraversal(swiss.rootRound, undefined, (level) => {
		yVal = 0;
		if (level.length === 1) {
		}
		if (level.length === 2) {
			yVal = 0;
		}
		if (level.length === 3) {
			yVal = -50;
		}

		level.forEach((node) => {
			const roundNodeType = new RoundNodeType(node.name, node, swiss, undefined, "default");
			const obj: AppNode = {
				id: node.name,
				position: { x: xVal, y: yVal },
				data: roundNodeType,
				type: "round-node-component",
			};
			initialNodes.push(obj);
			idVal++;
			yVal += 150;
		});

		xVal += 225;
	});
	return initialNodes;
}

// create4TeamSingleElimination("b1");
// create2Team("b1");
initialNodes = createSwissNodes(swiss);

export const nodeTypes = {
	// Add any of your custom nodes here!
	"starting-match": StartingMatchNode,
	"ending-match": EndingMatchNode,
	"round-node-component": RoundNodeComponent,
	match: MatchNode,
} satisfies NodeTypes;
