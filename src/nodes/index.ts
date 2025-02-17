import { type NodeTypes } from "@xyflow/react";

import { AppNode } from "./types";
import { RoundNodeComponent } from "./RoundNodeComponent";

import { SwissBracketFlow } from "../../LionBracketEngine/src/swiss_bracket/swiss_backet_flow";
import { levelOrderTraversal } from "../../LionBracketEngine/src/util/util";
import { RoundNodeType } from "./RoundNodeType";
import { StartingNodeComponent } from "./StartingNodeComponent";
import { EndingNodeUpperComponent } from "./EndingNodeUpperComponent";
import { ExitNodeComponent } from "./ExitNodeComponent";
import { ExitNodeType } from "./ExitNodeType";
import { EndingNodeMiddleComponent } from "./EndingNodeMiddleComponent";
import { EndingNodeLowerComponent } from "./EndingNodeLowerComponent";
export const swiss = new SwissBracketFlow(16, 3);

export let initialNodes: AppNode[] = [];

export function createSwissNodes(swiss: SwissBracketFlow) {
	const initialNodes: AppNode[] = [];
	let idVal = 0;
	let xVal = 0;
	let yVal = 0;
	let levelNumber = 1;
	levelOrderTraversal(swiss.rootRound, undefined, (level) => {
		yVal = 0;
		// TODO: rewrite to use the formulas described below
		if (levelNumber === 1) {
		}
		if (levelNumber === 2) {
			yVal = -29;
		}
		if (levelNumber === 3) {
			yVal = -58;
		}
		if (levelNumber === 4) {
			yVal = 85;
		}
		if (levelNumber === 5) {
			yVal = 285;
		}
		levelNumber++;

		level.forEach((node) => {
			const inputHandleId = `${node.name}:Input`;
			const outputHandleId = `${node.name}:Output`;
			const qualifiedHandleId = `${node.name}:QualifiedOutput`;
			const eliminatedHandleId = `${node.name}:EliminatedOutput`;
			const roundNodeType = new RoundNodeType(
				node.name,
				node,
				swiss,
				undefined,
				inputHandleId,
				outputHandleId,
				qualifiedHandleId,
				eliminatedHandleId
			);

			let obj: AppNode | undefined;
			switch (node.name) {
				case "0-0":
					obj = {
						id: node.name,
						position: { x: xVal, y: yVal },
						data: roundNodeType,
						type: "starting-node-component",
						draggable: false,
					};
					break;
				case "2-0":
				case "2-1":
					obj = {
						id: node.name,
						position: { x: xVal, y: yVal },
						data: roundNodeType,
						type: "ending-node-upper-component",
						draggable: false,
					};
					break;
				case "2-2":
					obj = {
						id: node.name,
						position: { x: xVal, y: yVal },
						data: roundNodeType,
						type: "ending-node-middle-component",
						draggable: false,
					};
					break;
				case "0-2":
				case "1-2":
					obj = {
						id: node.name,
						position: { x: xVal, y: yVal },
						data: roundNodeType,
						type: "ending-node-lower-component",
						draggable: false,
					};
					break;
				default:
					obj = {
						id: node.name,
						position: { x: xVal, y: yVal },
						data: roundNodeType,
						type: "round-node-component",
						draggable: false,
					};
			}

			initialNodes.push(obj);

			if (node.name === "2-0" || node.name === "2-1" || node.name === "2-2") {
				let qualObj: AppNode = {
					id: `${node.name}:Qualified`,
					position: { x: xVal + 350, y: yVal },
					data: new ExitNodeType(
						"QUALIFIED",
						"round-winning",
						swiss,
						node.name,
						`${node.name}:QualifiedInput`,
						true
					),
					type: "exit-node-component",
				};

				if (node.name === "2-0") {
					qualObj.position.y = -29 - 20;
				}
				if (node.name === "2-1") {
					qualObj.position.y = 171 - 20;
				}
				if (node.name === "2-2") {
					qualObj.position.y += 76 - 10;
				}

				initialNodes.push(qualObj);
			}

			if (node.name === "0-2" || node.name === "1-2" || node.name === "2-2") {
				let qualObj: AppNode = {
					id: `${node.name}:Eliminated`,
					position: { x: xVal + 350, y: 800 },
					data: new ExitNodeType(
						"ELIMINATED",
						"round-losing",
						swiss,
						node.name,
						`${node.name}:EliminatedInput`,
						false
					),
					type: "exit-node-component",
				};
				if (node.name === "0-2") {
					qualObj.position.y = 865 + 20;
				}
				if (node.name === "1-2") {
					qualObj.position.y = 664 + 20;
				}

				if (node.name === "2-2") {
					qualObj.position.y = 475 + 10;
				}

				initialNodes.push(qualObj);
			}

			idVal++;

			const numMatches = node.numSeeds / 2;
			const headerOffset = 36; // 29
			const versusHeight = 114;
			const borderWidth = 2;
			const gap = 20;
			yVal += numMatches * versusHeight + headerOffset + gap + borderWidth;
			// header offset must be found through trial and error
			// r1: 36 + 8*114 + 2 = 950
			// r2: 36*2 + 8*114 + 20 = 1004
			// r3: 36*3 + 8*114 + 40 = 1060 + 6
			// r4: 36*2 + 6*114 + 20 + 2*2 = 780
			// r5: 36 + 3*114 + 2 = 350
			// example: to center r5
			// yVal = (r1 - r5) / 2
		});

		xVal += 350;
	});
	return initialNodes;
}

// initialNodes = createSwissNodes(swiss);

export const nodeTypes = {
	// Add any of your custom nodes here!
	"round-node-component": RoundNodeComponent,
	"starting-node-component": StartingNodeComponent,
	"ending-node-upper-component": EndingNodeUpperComponent,
	"ending-node-middle-component": EndingNodeMiddleComponent,
	"ending-node-lower-component": EndingNodeLowerComponent,
	"exit-node-component": ExitNodeComponent,
} satisfies NodeTypes;
