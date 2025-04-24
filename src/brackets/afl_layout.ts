import { AflBracket } from "../../LionBracketEngine/src/afl_bracket/afl_bracket.ts";
import { AppNode } from "../nodes/types.ts";
import { MatchNodeTypeConstructor } from "../nodes/matchNodes/MatchNodeType.ts";
import { paths } from "../helper/TeamsTranslator.ts";
import { ChampionNodeType } from "../nodes/ChampionNodeType.ts";
import { Edge } from "@xyflow/react";

// total dimensions (1620, 680)
export function createAflCoordinates(boundingXValue: number, boundingYValue: number, afl: AflBracket) {
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
	nodeCoordinates.set("LowerQuarterFinal1GhostNode", [
		boundingXValue + HORIZONTAL_OFFSET - 50,
		boundingYValue + UPPER_BRACKET_OFFSET + 7.5,
	]);
	nodeCoordinates.set(lbqf2.name, [
		boundingXValue + HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + NODE_RAISE_VALUE + VERTICAL_OFFSET,
	]);
	nodeCoordinates.set("LowerQuarterFinal2GhostNode", [
		boundingXValue + HORIZONTAL_OFFSET - 50,
		boundingYValue + UPPER_BRACKET_OFFSET + 7.5 + VERTICAL_OFFSET,
	]);

	nodeCoordinates.set(sf1.name, [
		boundingXValue + 2 * HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + 2 * NODE_RAISE_VALUE,
	]);
	nodeCoordinates.set("SemiFinal1GhostNode", [
		boundingXValue + 2 * HORIZONTAL_OFFSET - 50,
		boundingYValue + UPPER_BRACKET_OFFSET + 1 * NODE_RAISE_VALUE + 7.5,
	]);
	nodeCoordinates.set(sf2.name, [
		boundingXValue + 2 * HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + 2 * NODE_RAISE_VALUE + VERTICAL_OFFSET,
	]);
	nodeCoordinates.set("SemiFinal2GhostNode", [
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

	return nodeCoordinates;
}

export function createAflNodes(afl: AflBracket, xCoordinate: number, yCoordinate: number) {
	const allMatchNodes = afl.getAllMatchNodes();

	const coordinates = createAflCoordinates(xCoordinate, yCoordinate, afl);

	const initialAFLNodes: AppNode[] = allMatchNodes.map((node) => {
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
			data: MatchNodeTypeConstructor(node, afl),
			type: "match-node-component",
			draggable: false,
		};
		return appNode;
	});

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
			position: { x: xCalc, y: yCalc },
			data: { name: ghostShortened, outputHandleId: `${ghostShortened}:Output` },
			type: "ghost-node",
			draggable: false,
		};
		initialAFLNodes.push(ghostNode);
	}

	createGhostNode("LowerQuarterFinal1GhostNode", "lqf1gn");
	createGhostNode("LowerQuarterFinal2GhostNode", "lqf2gn");
	createGhostNode("SemiFinal1GhostNode", "sf1gn");
	createGhostNode("SemiFinal2GhostNode", "sf2gn");

	let xCalc = 0;
	let yCalc = 0;
	const res = coordinates.get("champion");
	if (res) {
		xCalc = res[0];
		yCalc = res[1];
	}
	let championPathName = "";
	let championName = "";

	const gf = afl.getBracketNode("GrandFinal");

	if (gf.matchRecord?.type === "FullRecord") {
		if (gf.matchRecord.upperSeedWins > gf.matchRecord.lowerSeedWins) {
			championPathName = `/logos/${paths[gf.matchRecord.upperSeed - 1]}.png`;
			championName = `${paths[gf.matchRecord.upperSeed - 1]}`.replace("_", " ");
		} else if (gf.matchRecord.upperSeedWins < gf.matchRecord.lowerSeedWins) {
			championPathName = `/logos/${paths[gf.matchRecord.lowerSeed - 1]}.png`;
			championName = `${paths[gf.matchRecord.lowerSeed - 1]}`.replace("_", " ");
		}
	}
	const championNode: AppNode = {
		id: "champion",
		position: { x: xCalc, y: yCalc },
		data: new ChampionNodeType(championName, championPathName),
		type: "champion-node-component",
		draggable: false,
	};
	initialAFLNodes.push(championNode);

	return initialAFLNodes;
}

export function createAflEdges(afl: AflBracket) {
	const aflNodes = afl.getAllMatchNodes();
	const edges: Edge[] = [];
	aflNodes.forEach((node) => {
		if (node.name === "UpperQuarterFinal1" || node.name === "UpperQuarterFinal2") {
			return;
		}

		if (node.name === "SemiFinal1" || node.name === "SemiFinal2") {
			edges.push({
				id: `${node.name}->${node.upperRound!.name}`,
				source: node.name,
				target: node.upperRound!.name,
				sourceHandle: `${node.name}:Output`,
				targetHandle: `${node.upperRound!.name}:MiddleInput`,
				type: "step",
				style: { strokeWidth: 2 },
				selectable: false,
			});
			return;
		}

		if (node.upperRound) {
			edges.push({
				id: `${node.name}->${node.upperRound.name}`,
				source: node.name,
				target: node.upperRound.name,
				sourceHandle: `${node.name}:Output`,
				targetHandle: `${node.upperRound.name}:LowerInput`,
				type: "step",
				style: { strokeWidth: 2 },
				selectable: false,
			});
		}
		if (node.lowerRound) {
			edges.push({
				id: `${node.name}->${node.lowerRound.name}`,
				source: node.name,
				target: node.lowerRound.name,
				sourceHandle: `${node.name}:Output`,
				targetHandle: `${node.lowerRound.name}:UpperInput`,
				type: "step",
				style: { strokeWidth: 2 },
				selectable: false,
			});
		}
	});

	edges.push({
		id: "lqf1gn->lqf1",
		source: "LowerQuarterFinal1GhostNode",
		target: "LowerQuarterFinal1",
		sourceHandle: "lqf1gn:Output",
		targetHandle: "LowerQuarterFinal1:UpperInput",
		type: "step",
		style: { strokeWidth: 2 },
		selectable: false,
	});

	edges.push({
		id: "lqf2gn->lqf2",
		source: "LowerQuarterFinal2GhostNode",
		target: "LowerQuarterFinal2",
		sourceHandle: "lqf2gn:Output",
		targetHandle: "LowerQuarterFinal2:UpperInput",
		type: "step",
		style: { strokeWidth: 2 },
		selectable: false,
	});

	edges.push({
		id: "sf1gn->sf1",
		source: "SemiFinal1GhostNode",
		target: "SemiFinal1",
		sourceHandle: "sf1gn:Output",
		targetHandle: "SemiFinal1:UpperInput",
		type: "step",
		style: { strokeWidth: 2 },
		selectable: false,
	});

	edges.push({
		id: "sf2gn->sf2",
		source: "SemiFinal2GhostNode",
		target: "SemiFinal2",
		sourceHandle: "sf2gn:Output",
		targetHandle: "SemiFinal2:UpperInput",
		type: "step",
		style: { strokeWidth: 2 },
		selectable: false,
	});

	return edges;
}