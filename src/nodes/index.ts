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
import { AFLBracketFlow } from "../../LionBracketEngine/src/afl_bracket/afl_bracket_flow";
import { MatchNodeIsolatedComponent } from "./matchNodes/MatchNodeIsolatedComponent";
import { MatchNode } from "../../LionBracketEngine/src/models/match_node";
import { Match } from "../../LionBracketEngine/src/models/match";
import { MatchNodeType } from "./MatchNodeType";
import { MatchNodeStartingComponent } from "./matchNodes/MatchNodeStartingComponent";
import { MatchNodeEndingComponent } from "./matchNodes/MatchNodeEndingComponent";
import { MatchNodeMiddleComponent } from "./matchNodes/MatchNodeMiddleComponent";
import { MatchNodeMiddleComponent2 } from "./matchNodes/MatchNodeMiddleComponent2";
import { GhostNode } from "./GhostNode";

export let initialNodes: AppNode[] = [];

export function createSwissNodes(swiss: SwissBracketFlow) {
	const coordinates = createCoordinates(0, 0, swiss);
	const initialNodes: AppNode[] = [];
	let idVal = 0;
	const swissBracketWrapper: Major1SwissBracket = {
		bracketType: "M1SwissBracket",
		bracketObject: swiss,
	};
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

export function createAFLNodes(afl: AFLBracketFlow) {
	// const coordinates = createCoordinates(0, 0, swiss);
	// const initialNodes: AppNode[] = [];

	// const aflWrapper: Major1AFLBracket = {
	// 	bracketType: "M1AFLBracket",
	// 	bracketObject: afl,
	// };

	// const [uqf1, uqf2, lbr1, lbr2, lbqf1, lbqf2, sf1, sf2, gf] = afl.getAllMatchNodes();

	// const lb = [lbr1, lbr2];
	// const uqf = [uqf1, uqf2];
	// const lqf = [lbqf1, lbqf2];
	// const sf = [sf1, sf2];
	// const gfr = [gf];

	// const rounds = [lb, uqf, lqf, sf, gfr];
	// const roundNames = ["Upper Bracket Round 1", "Lower Bracket Round 1"]
	// rounds.forEach((round) => {

	// 	const inputHandleId = `${node.name}:Input`;
	// 	const outputHandleId = `${node.name}:Output`;
	// 	const qualifiedHandleId = `${node.name}:QualifiedOutput`;
	// 	const eliminatedHandleId = `${node.name}:EliminatedOutput`;

	// 	const roundNodeType = new RoundNodeType(node.name);
	// });

	// levelOrderTraversal(afl.lowerBracketRound1, undefined, (level) => {
	// 	level.forEach((node) => {
	// 		const inputHandleId = `${node.name}:Input`;
	// 		const outputHandleId = `${node.name}:Output`;
	// 		const qualifiedHandleId = `${node.name}:QualifiedOutput`;
	// 		const eliminatedHandleId = `${node.name}:EliminatedOutput`;
	// 		const roundNodeType = new RoundNodeType(
	// 			node.name,
	// 			[],
	// 			aflWrapper,
	// 			undefined,
	// 			inputHandleId,
	// 			outputHandleId,
	// 			qualifiedHandleId,
	// 			eliminatedHandleId
	// 		);

	// 		let obj: AppNode | undefined;

	// 		let xCalc = 0;
	// 		let yCalc = 0;
	// 		const res = coordinates.get(node.name);
	// 		if (res) {
	// 			xCalc = res[0];
	// 			yCalc = res[1];
	// 		}

	// 		switch (node.name) {
	// 			case "0-0":
	// 				obj = {
	// 					id: node.name,
	// 					position: { x: xCalc, y: yCalc },
	// 					data: roundNodeType,
	// 					type: "starting-node-component",
	// 					draggable: false,
	// 				};
	// 				break;
	// 			case "2-0":
	// 			case "2-1":
	// 				obj = {
	// 					id: node.name,
	// 					position: { x: xCalc, y: yCalc },
	// 					data: roundNodeType,
	// 					type: "ending-node-upper-component",
	// 					draggable: false,
	// 				};
	// 				break;
	// 			case "2-2":
	// 				obj = {
	// 					id: node.name,
	// 					position: { x: xCalc, y: yCalc },
	// 					data: roundNodeType,
	// 					type: "ending-node-middle-component",
	// 					draggable: false,
	// 				};
	// 				break;
	// 			case "0-2":
	// 			case "1-2":
	// 				obj = {
	// 					id: node.name,
	// 					position: { x: xCalc, y: yCalc },
	// 					data: roundNodeType,
	// 					type: "ending-node-lower-component",
	// 					draggable: false,
	// 				};
	// 				break;
	// 			default:
	// 				obj = {
	// 					id: node.name,
	// 					position: { x: xCalc, y: yCalc },
	// 					data: roundNodeType,
	// 					type: "round-node-component",
	// 					draggable: false,
	// 				};
	// 		}

	// 		initialNodes.push(obj);
	// 	});
	// });
	// return initialNodes;

	let node1;
	{
		const matchNode = new MatchNode("test", true);
		matchNode.match = new Match("test", 0);
		matchNode.match.matchRecord = {
			type: "FullRecord",
			upperSeed: 1,
			upperSeedWins: 0,
			lowerSeed: 2,
			lowerSeedWins: 1,
		};

		const matchNodeType = new MatchNodeType(
			"test",
			matchNode,
			undefined,
			"test:Input",
			"test:Output",
			"test:QualifiedOutput",
			"test:ElimiantedOutput"
		);

		let testNode: AppNode = {
			id: `testNode`,
			position: { x: 0, y: 950 },
			data: matchNodeType,
			type: "match-node-middle-component2",
		};
		node1 = testNode;
	}
	let node2;
	{
		const matchNode = new MatchNode("test", true);
		matchNode.match = new Match("test", 0);
		matchNode.match.matchRecord = {
			type: "FullRecord",
			upperSeed: 1,
			upperSeedWins: 0,
			lowerSeed: 2,
			lowerSeedWins: 1,
		};

		const matchNodeType = new MatchNodeType(
			"test",
			matchNode,
			undefined,
			"test:Input",
			"test:Output",
			"test:QualifiedOutput",
			"test:ElimiantedOutput"
		);

		let testNode: AppNode = {
			id: `testNode2`,
			position: { x: 350, y: 960 - 17 },
			data: matchNodeType,
			type: "match-node-middle-component",
		};
		node2 = testNode;
	}

	const ghostNode: AppNode = {
		id: "ghostNode",
		position: { x: -50, y: 950 + 30 - 2.5 },
		data: {},
		type: "ghost-node",
	};

	const [uqf1, uqf2, lbr1, lbr2, lbqf1, lbqf2, sf1, sf2, gf] = afl.getAllMatchNodes();

	const lb = [lbr1, lbr2];
	const uqf = [uqf1, uqf2];
	const lqf = [lbqf1, lbqf2];
	const sf = [sf1, sf2];
	const gfr = [gf];

	const rounds = [lb, uqf, lqf, sf, gfr];
	const roundNames = ["Upper Bracket Round 1", "Lower Bracket Round 1"];

	const coordinates = createAFLCoordinates(350, 1100, afl);

	type MatchNodeComponentTypes =
		| "match-node-starting-component"
		| "match-node-middle-component2"
		| "match-node-isolated-component"
		| "match-node-ending-component";
	function createMap(s: MatchNodeComponentTypes) {
		return (node: MatchNode) => {
			let xCalc = 0;
			let yCalc = 0;
			const res = coordinates.get(node.name);
			if (res) {
				xCalc = res[0];
				yCalc = res[1];
			}
			const appNode: AppNode = {
				id: node.name,
				position: { x: xCalc, y: yCalc },
				data: new MatchNodeType(node),
				type: s,
			};
			return appNode;
		};
	}

	const initialAFLNodes: AppNode[] = lb
		.map(createMap("match-node-starting-component"))
		.concat(uqf.map(createMap("match-node-isolated-component")))
		.concat(lqf.map(createMap("match-node-middle-component2")))
		.concat(sf.map(createMap("match-node-middle-component2")))
		.concat(gfr.map(createMap("match-node-ending-component")));

	return initialAFLNodes;
	// const lbr1AppNode: AppNode = {
	// 	id: lbr1.name,
	// 	position: { x: 0, y: 1400 },
	// 	data: new MatchNodeType(lbr1),
	// 	type: "match-node-starting-component",
	// };

	// const lbr2AppNode: AppNode = {
	// 	id: lbr2.name,
	// 	position: { x: 0, y: 1400 + 40 + 100 },
	// 	data: new MatchNodeType(lbr2),
	// 	type: "match-node-starting-component",
	// };

	// const lbqf1AppNode: AppNode = {
	// 	id: lbqf1.name,
	// 	position: { x: 0 + 258 + 92, y: 1400 - 20 },
	// 	data: new MatchNodeType(lbqf1),
	// 	type: "match-node-middle-component2",
	// };

	// const lbqf2AppNode: AppNode = {
	// 	id: lbqf2.name,
	// 	position: { x: 0 + 258 + 92, y: 1400 - 20 + 40 + 100 },
	// 	data: new MatchNodeType(lbqf2),
	// 	type: "match-node-middle-component2",
	// };

	// const uqf1AppNode: AppNode = {
	// 	id: uqf1.name,
	// 	position: { x: 0 + 258 + 92, y: 1400 - 20 - 350 },
	// 	data: new MatchNodeType(uqf1),
	// 	type: "match-node-isolated-component",
	// };

	// const uqf2AppNode: AppNode = {
	// 	id: uqf2.name,
	// 	position: { x: 0 + 258 + 92, y: 1400 - 20 - 350 + 100 + 40 },
	// 	data: new MatchNodeType(uqf2),
	// 	type: "match-node-isolated-component",
	// };

	// const sf1AppNode: AppNode = {
	// 	id: sf1.name,
	// 	position: { x: 0 + 2 * (258 + 92), y: 1400 - 40 },
	// 	data: new MatchNodeType(sf1),
	// 	type: "match-node-middle-component2",
	// };

	// const sf2AppNode: AppNode = {
	// 	id: sf2.name,
	// 	position: { x: 0 + 2 * (258 + 92), y: 1400 - 40 + 40 + 100 },
	// 	data: new MatchNodeType(sf2),
	// 	type: "match-node-middle-component2",
	// };

	// const gfAppNode: AppNode = {
	// 	id: gf.name,
	// 	position: { x: 0 + 3 * (258 + 92), y: 1400 - 40 + 70 },
	// 	data: new MatchNodeType(gf),
	// 	type: "match-node-ending-component",
	// };

	// return [
	// 	lbr1AppNode,
	// 	lbr2AppNode,
	// 	uqf1AppNode,
	// 	uqf2AppNode,
	// 	lbqf1AppNode,
	// 	lbqf2AppNode,
	// 	sf1AppNode,
	// 	sf2AppNode,
	// 	gfAppNode,
	// ];
}

function createAFLCoordinates(boundingXValue: number, boundingYValue: number, afl: AFLBracketFlow) {
	const VERTICAL_GAP = 40;
	const HORIZONTAL_GAP = 92;
	const AFL_NODE_HEIGHT = 100;
	const AFL_NODE_WIDTH = 258;
	const HORIZONTAL_OFFSET = HORIZONTAL_GAP + AFL_NODE_WIDTH;
	const VERTICAL_OFFSET = VERTICAL_GAP + AFL_NODE_HEIGHT;
	const UPPER_BRACKET_GAP = AFL_NODE_HEIGHT + 20;
	const UPPER_BRACKET_OFFSET = 2 * AFL_NODE_HEIGHT + VERTICAL_GAP + UPPER_BRACKET_GAP;
	const NODE_RAISE_VALUE = -20;

	const [uqf1, uqf2, lbr1, lbr2, lbqf1, lbqf2, sf1, sf2, gf] = afl.getAllMatchNodes();

	const nodeCoordinates: Map<string, number[]> = new Map();
	nodeCoordinates.set(uqf1.name, [boundingXValue + HORIZONTAL_OFFSET, boundingYValue]);
	nodeCoordinates.set(uqf2.name, [
		boundingXValue + HORIZONTAL_OFFSET,
		boundingYValue + VERTICAL_OFFSET,
	]);

	nodeCoordinates.set(lbr1.name, [boundingXValue, boundingYValue + UPPER_BRACKET_OFFSET]);
	nodeCoordinates.set(lbr2.name, [
		boundingXValue,
		boundingYValue + UPPER_BRACKET_OFFSET + VERTICAL_OFFSET,
	]);

	nodeCoordinates.set(lbqf1.name, [
		boundingXValue + HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + NODE_RAISE_VALUE,
	]);
	nodeCoordinates.set(lbqf2.name, [
		boundingXValue + HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + NODE_RAISE_VALUE + VERTICAL_OFFSET,
	]);

	nodeCoordinates.set(sf1.name, [
		boundingXValue + 2 * HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + 2 * NODE_RAISE_VALUE,
	]);
	nodeCoordinates.set(sf2.name, [
		boundingXValue + 2 * HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + 2 * NODE_RAISE_VALUE + VERTICAL_OFFSET,
	]);

	nodeCoordinates.set(gf.name, [
		boundingXValue + 3 * HORIZONTAL_OFFSET,
		boundingYValue +
			UPPER_BRACKET_OFFSET +
			2 * NODE_RAISE_VALUE +
			(AFL_NODE_HEIGHT + VERTICAL_GAP) / 2,
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
	"match-node-isolated-component": MatchNodeIsolatedComponent,
	"match-node-starting-component": MatchNodeStartingComponent,
	"match-node-ending-component": MatchNodeEndingComponent,
	"match-node-middle-component": MatchNodeMiddleComponent,
	"match-node-middle-component2": MatchNodeMiddleComponent2,
	"ghost-node": GhostNode,
} satisfies NodeTypes;
