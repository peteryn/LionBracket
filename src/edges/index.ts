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
			type: "step",
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
			type: "step",
		});
	}

	if (node.name.split("-")[0] === "2") {
		initialEdges.push({
			id: `${node.name}->qualified`,
			source: `${node.name}`,
			target: `${node.name}:Qualified`,
			sourceHandle: `${node.name}:QualifiedOutput`,
			targetHandle: `${node.name}:QualifiedInput`,
			type: "step",
		});
	}

	if (node.name.split("-")[1] === "2") {
		initialEdges.push({
			id: `${node.name}->eliminated`,
			source: `${node.name}`,
			target: `${node.name}:Eliminated`,
			sourceHandle: `${node.name}:EliminatedOutput`,
			targetHandle: `${node.name}:EliminatedInput`,
			type: "step",
		});
	}
});

export const edgeTypes = {
	// Add your custom edge types here!
} satisfies EdgeTypes;
