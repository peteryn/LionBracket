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
import { SwissBracket } from "../../LionBracketEngine/src/swiss_bracket/swiss_bracket";
import { Major1SwissBracket } from "../../LionBracketEngine/src/models/bracket";
export const swiss = new SwissBracketFlow(16, 3);

export let initialNodes: AppNode[] = [];

export function createSwissNodes(swiss: SwissBracketFlow) {
	const coordinates = createCoordinates(0, 0, swiss);
	const initialNodes: AppNode[] = [];
	let idVal = 0;
	const swissBracketWrapper: Major1SwissBracket = {
		bracketType: "M1SwissBracket",
		bracketObject: swiss
	}
	levelOrderTraversal(swiss.rootRound, undefined, (level) => {
		level.forEach((node) => {
			const inputHandleId = `${node.name}:Input`;
			const outputHandleId = `${node.name}:Output`;
			const qualifiedHandleId = `${node.name}:QualifiedOutput`;
			const eliminatedHandleId = `${node.name}:EliminatedOutput`;
			const roundNodeType = new RoundNodeType(
				node.name,
				node.matches,
				swissBracketWrapper,
				undefined,
				inputHandleId,
				outputHandleId,
				qualifiedHandleId,
				eliminatedHandleId
			);

			let obj: AppNode | undefined;

			let xCalc = 0;
			let yCalc = 0;
			const res = coordinates.get(node.name);
			if (res) {
				xCalc = res[0];
				yCalc = res[1];
			}

			switch (node.name) {
				case "0-0":
					obj = {
						id: node.name,
						position: { x: xCalc, y: yCalc },
						data: roundNodeType,
						type: "starting-node-component",
						draggable: false,
					};
					break;
				case "2-0":
				case "2-1":
					obj = {
						id: node.name,
						position: { x: xCalc, y: yCalc },
						data: roundNodeType,
						type: "ending-node-upper-component",
						draggable: false,
					};
					break;
				case "2-2":
					obj = {
						id: node.name,
						position: { x: xCalc, y: yCalc },
						data: roundNodeType,
						type: "ending-node-middle-component",
						draggable: false,
					};
					break;
				case "0-2":
				case "1-2":
					obj = {
						id: node.name,
						position: { x: xCalc, y: yCalc },
						data: roundNodeType,
						type: "ending-node-lower-component",
						draggable: false,
					};
					break;
				default:
					obj = {
						id: node.name,
						position: { x: xCalc, y: yCalc },
						data: roundNodeType,
						type: "round-node-component",
						draggable: false,
					};
			}

			initialNodes.push(obj);

			if (node.name === "2-0" || node.name === "2-1" || node.name === "2-2") {
				let xCalc = 0;
				let yCalc = 0;
				const res = coordinates.get(`${node.level}:Qualified`);
				if (res) {
					xCalc = res[0];
					yCalc = res[1];
				} else {
					console.log("ERROR");
				}

				let qualObj: AppNode = {
					id: `${node.name}:Qualified`,
					position: { x: xCalc, y: yCalc },
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

				initialNodes.push(qualObj);
			}

			if (node.name === "0-2" || node.name === "1-2" || node.name === "2-2") {
				let xCalc = 0;
				let yCalc = 0;
				const res = coordinates.get(`${node.level}:Eliminated`);
				if (res) {
					xCalc = res[0];
					yCalc = res[1];
				}

				let qualObj: AppNode = {
					id: `${node.name}:Eliminated`,
					position: { x: xCalc, y: yCalc },
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

				initialNodes.push(qualObj);
			}
			idVal++;
		});
	});
	return initialNodes;
}

// initialNodes = createSwissNodes(swiss);

/*
new dimensions
round node height: 36px for header + numMatches*100px + 4px bottom border
round node width: 258px
h-gap between rounds is 350px - 258px = 92px
v-gap between rounds is 20px

height increase from r1 to r2 and r2 to r3 is 30px each

graph width = 5*92 + 6*258 - 2008
graph height = 2*(36+2*100+4) + (36+4*100+4) + 2*(20) = 960
graph middle = 480

r1 node: 36 + 8*100 + 4 = 840
r2: 2*(36 + 4*100 + 4) + 20 = 900
r3: 960
960 - 840 = 120
120 / 4 = 30 so 30 is the height mentioned on line 200

r4: 2(36 + 3*100 + 4) + 20 = 700
r5: (36 + 3*100 + 4) = 340

exit node height: 36 + 80 = 116
exit node width: 258px

*/

function createCoordinates(boundingXValue: number, boundingYValue: number, swiss: SwissBracket) {
	const SWISS_HEIGHT = 960;
	const VERTICAL_GAP = 20;
	const SWISS_NODE_HORIZONTAL_GAP = 92;
	const SWISS_NODE_WIDTH = 258;
	const SWISS_HORIZONTAL_OFFSET = SWISS_NODE_WIDTH + SWISS_NODE_HORIZONTAL_GAP;
	const EXIT_NODE_HEIGHT = 110;

	const nodeCoordinates: Map<string, number[]> = new Map();
	let xVal = boundingXValue;
	let yVal = boundingYValue;
	levelOrderTraversal(swiss.rootRound, undefined, (level) => {
		const numNodes = level.length;

		let roundHeight = (numNodes - 1) * VERTICAL_GAP;
		for (const node of level) {
			roundHeight += 36 + 4 + node.matches.length * 100;
		}

		const heightDiff = SWISS_HEIGHT - roundHeight;
		const heightOffset = heightDiff / 2;
		const levelNumber = level[0].level;

		yVal = boundingYValue + heightOffset;
		level.forEach((node) => {
			nodeCoordinates.set(node.name, [xVal, yVal]);
			const nodeHeight = 36 + 4 + node.matches.length * 100;
			yVal += VERTICAL_GAP + nodeHeight;
		});

		if (levelNumber === 4 || levelNumber === 5) {
			const qualifiedExitHeight =
				boundingYValue + heightOffset - VERTICAL_GAP - EXIT_NODE_HEIGHT;
			nodeCoordinates.set(`${levelNumber - 1}:Qualified`, [xVal, qualifiedExitHeight]);
			nodeCoordinates.set(`${levelNumber - 1}:Eliminated`, [xVal, yVal]);
		}

		xVal += SWISS_HORIZONTAL_OFFSET;
	});

	const finalExitHeight = EXIT_NODE_HEIGHT * 2 + VERTICAL_GAP;
	const heightDiff = SWISS_HEIGHT - finalExitHeight;
	const heightOffset = heightDiff / 2;
	nodeCoordinates.set(`${5}:Qualified`, [xVal, boundingYValue + heightOffset]);
	nodeCoordinates.set(`${5}:Eliminated`, [
		xVal,
		boundingYValue + heightOffset + EXIT_NODE_HEIGHT + VERTICAL_GAP,
	]);

	return nodeCoordinates;
}

export const nodeTypes = {
	// Add any of your custom nodes here!
	"round-node-component": RoundNodeComponent,
	"starting-node-component": StartingNodeComponent,
	"ending-node-upper-component": EndingNodeUpperComponent,
	"ending-node-middle-component": EndingNodeMiddleComponent,
	"ending-node-lower-component": EndingNodeLowerComponent,
	"exit-node-component": ExitNodeComponent,
} satisfies NodeTypes;
