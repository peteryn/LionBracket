import type { Edge, EdgeTypes } from "@xyflow/react";

import { swiss } from "../nodes";

export const initialEdges: Edge[] = [
	// { id: 'a->c', source: 'a', target: 'c', animated: true },
	// { id: 'b->d', source: 'b', target: 'd' },
	// { id: 'c->d', source: 'c', target: 'd', animated: true },
];

swiss.levelOrderTraversal(swiss.rootRound, (node) => {
	if (node.winningRound) {
		const id = `${node.name}->${node.winningRound.name}`;
		initialEdges.push({
			id: id,
			source: node.name,
			target: node.winningRound.name,
			type: "step"
		});
	}
	if (node.losingRound) {
		const id = `${node.name}->${node.losingRound.name}`;
		initialEdges.push({
			id: id,
			source: node.name,
			target: node.losingRound.name,
			type: "step"
		});
	}
});

export const edgeTypes = {
	// Add your custom edge types here!
} satisfies EdgeTypes;
