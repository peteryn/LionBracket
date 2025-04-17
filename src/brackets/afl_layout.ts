import { AFLBracketFlow } from "../../LionBracketEngine/src/afl_bracket/afl_bracket_flow.ts";
import { MatchNode } from "../../LionBracketEngine/src/models/match_node.ts";
import { AppNode } from "../nodes/types.ts";
import { MatchNodeType } from "../nodes/matchNodes/MatchNodeType.ts";
import { paths } from "../helper/TeamsTranslator.ts";
import { ChampionNodeType } from "../nodes/ChampionNodeType.ts";
import { Edge } from "@xyflow/react";

export function createAFLCoordinates(boundingXValue: number, boundingYValue: number, afl: AFLBracketFlow) {
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
	nodeCoordinates.set("lowerQuarterFinal1GhostNode", [
		boundingXValue + HORIZONTAL_OFFSET - 50,
		boundingYValue + UPPER_BRACKET_OFFSET + 7.5,
	]);
	nodeCoordinates.set(lbqf2.name, [
		boundingXValue + HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + NODE_RAISE_VALUE + VERTICAL_OFFSET,
	]);
	nodeCoordinates.set("lowerQuarterFinal2GhostNode", [
		boundingXValue + HORIZONTAL_OFFSET - 50,
		boundingYValue + UPPER_BRACKET_OFFSET + 7.5 + VERTICAL_OFFSET,
	]);

	nodeCoordinates.set(sf1.name, [
		boundingXValue + 2 * HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + 2 * NODE_RAISE_VALUE,
	]);
	nodeCoordinates.set("semiFinal1GhostNode", [
		boundingXValue + 2 * HORIZONTAL_OFFSET - 50,
		boundingYValue + UPPER_BRACKET_OFFSET + 1 * NODE_RAISE_VALUE + 7.5,
	]);
	nodeCoordinates.set(sf2.name, [
		boundingXValue + 2 * HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + 2 * NODE_RAISE_VALUE + VERTICAL_OFFSET,
	]);
	nodeCoordinates.set("semiFinal2GhostNode", [
		boundingXValue + 2 * HORIZONTAL_OFFSET - 50,
		boundingYValue + UPPER_BRACKET_OFFSET + 1 * NODE_RAISE_VALUE + VERTICAL_OFFSET + 7.5,
	]);

	nodeCoordinates.set(gf.name, [
		boundingXValue + 3 * HORIZONTAL_OFFSET,
		boundingYValue +
		UPPER_BRACKET_OFFSET +
		2 * NODE_RAISE_VALUE +
		(AFL_NODE_HEIGHT + VERTICAL_GAP) / 2,
	]);

	nodeCoordinates.set("champion", [
		boundingXValue + 4 * HORIZONTAL_OFFSET,
		boundingYValue +
		UPPER_BRACKET_OFFSET +
		2 * NODE_RAISE_VALUE +
		(AFL_NODE_HEIGHT + VERTICAL_GAP) / 2 +
		AFL_NODE_HEIGHT / 2 -
		100,
	]);

	/*
		afl total length is 1620
	*/

	return nodeCoordinates;
}

export function createAFLNodes(afl: AFLBracketFlow, xCoordinate: number, yCoordinate: number) {
	const [uqf1, uqf2, lbr1, lbr2, lbqf1, lbqf2, sf1, sf2, gf] = afl.getAllMatchNodes();

	const lb = [lbr1, lbr2];
	const uqf = [uqf1, uqf2];
	const lqf = [lbqf1, lbqf2];
	const sf = [sf1, sf2];
	const gfr = [gf];

	const coordinates = createAFLCoordinates(xCoordinate, yCoordinate, afl);

	type MatchNodeComponentTypes =
		| "match-node-starting-component"
		| "match-node-middle-component"
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
				position: {x: xCalc, y: yCalc},
				data: new MatchNodeType(node, afl),
				type: s,
				draggable: false,
			};
			return appNode;
		};
	}

	const initialAFLNodes: AppNode[] = lb
		.map(createMap("match-node-starting-component"))
		.concat(uqf.map(createMap("match-node-isolated-component")))
		.concat(lqf.map(createMap("match-node-middle-component2")))
		.concat(sf.map(createMap("match-node-middle-component2")))
		.concat(gfr.map(createMap("match-node-middle-component")));

	function createGhostNode(ghostId: string, ghostShortened: string) {
		let xCalc = 0;
		let yCalc = 0;
		const res = coordinates.get(ghostId);
		if (res) {
			xCalc = res[0];
			yCalc = res[1];
		}
		const ghostNode: AppNode = {
			id: ghostId,
			position: {x: xCalc, y: yCalc},
			data: {name: ghostShortened, outputHandleId: `${ghostShortened}:Output`},
			type: "ghost-node",
			draggable: false,
		};
		initialAFLNodes.push(ghostNode);
	}

	createGhostNode("lowerQuarterFinal1GhostNode", "lqf1gn");
	createGhostNode("lowerQuarterFinal2GhostNode", "lqf2gn");
	createGhostNode("semiFinal1GhostNode", "sf1gn");
	createGhostNode("semiFinal2GhostNode", "sf2gn");

	let xCalc = 0;
	let yCalc = 0;
	const res = coordinates.get("champion");
	if (res) {
		xCalc = res[0];
		yCalc = res[1];
	}
	let championPathName = "";
	let championName = "";
	if (gf.match.matchRecord?.type === "FullRecord") {
		if (gf.match.matchRecord.upperSeedWins > gf.match.matchRecord.lowerSeedWins) {
			championPathName = `/logos/${paths[gf.match.matchRecord.upperSeed - 1]}.png`;
			championName = `${paths[gf.match.matchRecord.upperSeed - 1]}`.replace("_", " ");
		} else if (gf.match.matchRecord.upperSeedWins < gf.match.matchRecord.lowerSeedWins) {
			championPathName = `/logos/${paths[gf.match.matchRecord.lowerSeed - 1]}.png`;
			championName = `${paths[gf.match.matchRecord.lowerSeed - 1]}`.replace("_", " ");
		}
	}
	const championNode: AppNode = {
		id: "champion",
		position: {x: xCalc, y: yCalc},
		data: new ChampionNodeType(championName, championPathName),
		type: "champion-node-component",
		draggable: false,
	};
	initialAFLNodes.push(championNode);

	return initialAFLNodes;
}

export function createAFLEdges(afl: AFLBracketFlow) {
	const aflNodes = afl.getAllMatchNodes();
	const edges: Edge[] = [];
	aflNodes.forEach((node) => {
		if (node.name === "upperQuarterFinal1" || node.name === "upperQuarterFinal2") {
			return;
		}

		if (node.upperRound) {
			edges.push({
				id: `${node.name}->${node.upperRound.name}`,
				source: node.name,
				target: node.upperRound.name,
				sourceHandle: `${node.name}:Output`,
				targetHandle: `${node.upperRound.name}:Input`,
				type: "step",
				style: {strokeWidth: 2},
				selectable: false,
			});
		}
		if (node.lowerRound) {
			edges.push({
				id: `${node.name}->${node.lowerRound.name}`,
				source: node.name,
				target: node.lowerRound.name,
				sourceHandle: `${node.name}:Output`,
				targetHandle: `${node.lowerRound.name}:Input`,
				type: "step",
				style: {strokeWidth: 2},
				selectable: false,
			});
		}
	})

	edges.push({
		id: "lqf1gn->lqf1",
		source: "lowerQuarterFinal1GhostNode",
		target: "lowerQuarterFinal1",
		sourceHandle: "lqf1gn:Output",
		targetHandle: "lowerQuarterFinal1:InputGhost",
		type: "step",
		style: {strokeWidth: 2},
		selectable: false,
	});

	edges.push({
		id: "lqf2gn->lqf2",
		source: "lowerQuarterFinal2GhostNode",
		target: "lowerQuarterFinal2",
		sourceHandle: "lqf2gn:Output",
		targetHandle: "lowerQuarterFinal2:InputGhost",
		type: "step",
		style: {strokeWidth: 2},
		selectable: false,
	});

	edges.push({
		id: "sf1gn->sf1",
		source: "semiFinal1GhostNode",
		target: "semiFinal1",
		sourceHandle: "sf1gn:Output",
		targetHandle: "semiFinal1:InputGhost",
		type: "step",
		style: {strokeWidth: 2},
		selectable: false,
	});

	edges.push({
		id: "sf2gn->sf2",
		source: "semiFinal2GhostNode",
		target: "semiFinal2",
		sourceHandle: "sf2gn:Output",
		targetHandle: "semiFinal2:InputGhost",
		type: "step",
		style: {strokeWidth: 2},
		selectable: false,
	});

	return edges;
}