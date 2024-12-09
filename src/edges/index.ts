import type { Edge, EdgeTypes } from "@xyflow/react";

import { swiss } from "../nodes";

import { levelOrderTraversal } from "../../BracketLion/SwissBracket";

export const initialEdges: Edge[] = [];

levelOrderTraversal(swiss.data.rootRound, (node) => {
	if (node.winningRound) {
		const id = `${node.name}->${node.winningRound.name}`;
		initialEdges.push({
			id: id,
			source: node.name,
			target: node.winningRound.name,
			sourceHandle: `${node.name}:Output`,
			targetHandle: `${node.winningRound.name}:Input`,
			type: "step"
		});
	}
	if (node.losingRound) {
		const id = `${node.name}->${node.losingRound.name}`;
		initialEdges.push({
			id: id,
			source: node.name,
			target: node.losingRound.name,
			sourceHandle: `${node.name}:Output`,
			targetHandle: `${node.losingRound.name}:Input`,
			type: "step"
		});
	}
});

export const edgeTypes = {
	// Add your custom edge types here!
} satisfies EdgeTypes;
