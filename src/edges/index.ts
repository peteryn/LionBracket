import type { Edge, EdgeTypes } from "@xyflow/react";

import { levelOrderTraversal } from "../../LionBracketEngine/src/util/util";
import { SwissBracketFlow } from "../../LionBracketEngine/src/swiss_bracket/swiss_backet_flow";

export const initialEdges: Edge[] = [];

const swiss = new SwissBracketFlow();
levelOrderTraversal(swiss.rootRound, (node) => {
	if (node.upperRound) {
		const id = `${node.name}->${node.upperRound.name}`;
		initialEdges.push({
			id: id,
			source: node.name,
			target: node.upperRound.name,
			sourceHandle: `${node.name}:Output`,
			targetHandle: `${node.upperRound.name}:Input`,
			type: "step",
			selectable: false,
		});
	}
	if (node.lowerRound) {
		const id = `${node.name}->${node.lowerRound.name}`;
		initialEdges.push({
			id: id,
			source: node.name,
			target: node.lowerRound.name,
			sourceHandle: `${node.name}:Output`,
			targetHandle: `${node.lowerRound.name}:Input`,
			type: "step",
			selectable: false,
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
			selectable: false,
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
			selectable: false,
		});
	}
});

initialEdges.push({
	id: "lbr1->lbqf1",
	source: "lowerBracketRound1",
	target: "lowerQuarterFinal1",
	sourceHandle: "lowerBracketRound1:Output",
	targetHandle: "lowerQuarterFinal1:Input",
	type: "step",
	style: { strokeWidth: 2 },
	selectable: false,
});

initialEdges.push({
	id: "lbr2->lbqf2",
	source: "lowerBracketRound2",
	target: "lowerQuarterFinal2",
	sourceHandle: "lowerBracketRound2:Output",
	targetHandle: "lowerQuarterFinal2:Input",
	type: "step",
	style: { strokeWidth: 2 },
	selectable: false,
});

initialEdges.push({
	id: "lbqf1->sf1",
	source: "lowerQuarterFinal1",
	target: "semiFinal1",
	sourceHandle: "lowerQuarterFinal1:Output",
	targetHandle: "semiFinal1:Input",
	type: "step",
	style: { strokeWidth: 2 },
	selectable: false,
});

initialEdges.push({
	id: "lbqf2->sf2",
	source: "lowerQuarterFinal2",
	target: "semiFinal2",
	sourceHandle: "lowerQuarterFinal2:Output",
	targetHandle: "semiFinal2:Input",
	type: "step",
	style: { strokeWidth: 2 },
	selectable: false,
});

initialEdges.push({
	id: "sf1->gf",
	source: "semiFinal1",
	target: "grandFinal",
	sourceHandle: "semiFinal1:Output",
	targetHandle: "grandFinal:Input",
	type: "step",
	style: { strokeWidth: 2 },
	selectable: false,
});

initialEdges.push({
	id: "sf2->gf",
	source: "semiFinal2",
	target: "grandFinal",
	sourceHandle: "semiFinal2:Output",
	targetHandle: "grandFinal:Input",
	type: "step",
	style: { strokeWidth: 2 },
	selectable: false,
});

initialEdges.push({
	id: "lqf1gn->lqf1",
	source: "lowerQuarterFinal1GhostNode",
	target: "lowerQuarterFinal1",
	sourceHandle: "lqf1gn:Output",
	targetHandle: "lowerQuarterFinal1:InputGhost",
	type: "step",
	style: { strokeWidth: 2 },
	selectable: false,
});

initialEdges.push({
	id: "lqf2gn->lqf2",
	source: "lowerQuarterFinal2GhostNode",
	target: "lowerQuarterFinal2",
	sourceHandle: "lqf2gn:Output",
	targetHandle: "lowerQuarterFinal2:InputGhost",
	type: "step",
	style: { strokeWidth: 2 },
	selectable: false,
});

initialEdges.push({
	id: "sf1gn->sf1",
	source: "semiFinal1GhostNode",
	target: "semiFinal1",
	sourceHandle: "sf1gn:Output",
	targetHandle: "semiFinal1:InputGhost",
	type: "step",
	style: { strokeWidth: 2 },
	selectable: false,
});

initialEdges.push({
	id: "sf2gn->sf2",
	source: "semiFinal2GhostNode",
	target: "semiFinal2",
	sourceHandle: "sf2gn:Output",
	targetHandle: "semiFinal2:InputGhost",
	type: "step",
	style: { strokeWidth: 2 },
	selectable: false,
});

// initialEdges.push({
// 	id: "gf->champion",
// 	source: "grandFinal",
// 	target: "champion",
// 	sourceHandle: "grandFinal:Output",
// 	targetHandle: "champion:Input"
// })

export const edgeTypes = {
	// Add your custom edge types here!
} satisfies EdgeTypes;
