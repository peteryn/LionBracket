/*
import type { Edge } from "@xyflow/react";

import { levelOrderTraversal } from "../../LionBracketEngine/src/util/util";
import { SwissBracketFlow } from "../../LionBracketEngine/src/swiss_bracket/swiss_backet_flow";
import { AFLBracketFlow } from "../../LionBracketEngine/src/afl_bracket/afl_bracket_flow";
import {createAFLEdges} from "../brackets/afl_layout.ts";

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

initialEdges.push(...createAFLEdges(new AFLBracketFlow()))
 */