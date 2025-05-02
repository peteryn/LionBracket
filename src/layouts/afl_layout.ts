import { AflBracket, AflMatchNode } from "../../LionBracketEngine/src/afl_bracket/afl_bracket.ts";
import { AppNode } from "../nodes/types.ts";
import { MatchNodeTypeConstructor, Team } from "../nodes/matchNodes/MatchNodeType.ts";
import { ChampionNodeType } from "../nodes/champion_node/ChampionNodeType.ts";
import { Edge } from "@xyflow/react";
import { GhostNodeType } from "../nodes/ghost_node/GhostNodeType.ts";

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

	const [uqf1, uqf2, lbr1, lbr2, lqf1, lqf2, sf1, sf2, gf] = afl.getAllMatchNodes();

	const nodeCoordinates: Map<string, [x: number, y: number]> = new Map();
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

	nodeCoordinates.set(lqf1.name, [
		boundingXValue + HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + NODE_RAISE_VALUE,
	]);
	nodeCoordinates.set(`${lqf1.name}:Ghost`, [
		boundingXValue + HORIZONTAL_OFFSET - 50,
		boundingYValue + UPPER_BRACKET_OFFSET + 7.5,
	]);
	nodeCoordinates.set(lqf2.name, [
		boundingXValue + HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + NODE_RAISE_VALUE + VERTICAL_OFFSET,
	]);
	nodeCoordinates.set(`${lqf2.name}:Ghost`, [
		boundingXValue + HORIZONTAL_OFFSET - 50,
		boundingYValue + UPPER_BRACKET_OFFSET + 7.5 + VERTICAL_OFFSET,
	]);

	nodeCoordinates.set(sf1.name, [
		boundingXValue + 2 * HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + 2 * NODE_RAISE_VALUE,
	]);
	nodeCoordinates.set(`${sf1.name}:Ghost`, [
		boundingXValue + 2 * HORIZONTAL_OFFSET - 50,
		boundingYValue + UPPER_BRACKET_OFFSET + 1 * NODE_RAISE_VALUE + 7.5,
	]);
	nodeCoordinates.set(sf2.name, [
		boundingXValue + 2 * HORIZONTAL_OFFSET,
		boundingYValue + UPPER_BRACKET_OFFSET + 2 * NODE_RAISE_VALUE + VERTICAL_OFFSET,
	]);
	nodeCoordinates.set(`${sf2.name}:Ghost`, [
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

export function createAflNodes(bracketId: string, afl: AflBracket, xCoordinate: number, yCoordinate: number, teams: Team[]) {
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
		const nodeId = `${bracketId}:${node.name}`;
		const appNode: AppNode = {
			id: nodeId,
			position: { x: xCalc, y: yCalc },
			data: MatchNodeTypeConstructor(node, afl, bracketId, teams),
			type: "match-node-component",
			draggable: false,
		};
		return appNode;
	});

	function createGhostNode(bracketId: string, node: AflMatchNode, coordinates: Map<string, [x: number, y: number]>) {
		const ghostId = `${bracketId}:${node.name}:Ghost`;
		let xCalc = 0;
		let yCalc = 0;
		const res = coordinates.get(`${node.name}:Ghost`);
		if (res) {
			xCalc = res[0];
			yCalc = res[1];
		}
		const ghostNode: AppNode = {
			id: ghostId,
			position: { x: xCalc, y: yCalc },
			data: new GhostNodeType(ghostId),
			type: "ghost-node",
			draggable: false,
		};
		initialAFLNodes.push(ghostNode);
	}

	createGhostNode(bracketId, afl.getBracketNode("LowerQuarterFinal1"), coordinates);
	createGhostNode(bracketId, afl.getBracketNode("LowerQuarterFinal2"), coordinates);
	createGhostNode(bracketId, afl.getBracketNode("SemiFinal1"), coordinates);
	createGhostNode(bracketId, afl.getBracketNode("SemiFinal2"), coordinates);

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
			championPathName = `/logos/${teams[gf.matchRecord.upperSeed - 1].path}.png`;
			championName = teams[gf.matchRecord.upperSeed - 1].name;
		} else if (gf.matchRecord.upperSeedWins < gf.matchRecord.lowerSeedWins) {
			championPathName = `/logos/${teams[gf.matchRecord.lowerSeed - 1].path}.png`;
			championName = teams[gf.matchRecord.lowerSeed - 1].name;
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

export function createAflEdges(bracketId: string, afl: AflBracket) {
	const aflNodes = afl.getAllMatchNodes();
	const edges: Edge[] = [];
	aflNodes.forEach((node) => {
		if (node.name === "UpperQuarterFinal1" || node.name === "UpperQuarterFinal2") {
			return;
		}

		const nodeId = `${bracketId}:${node.name}`;
		if (node.upperRound) {
			const upperNodeId = `${bracketId}:${node.upperRound.name}`;
			if (node.name === "SemiFinal1" || node.name === "SemiFinal2") {
				edges.push({
					id: `${nodeId}->${upperNodeId}`,
					source: nodeId,
					target: upperNodeId,
					sourceHandle: `${nodeId}:Output`,
					targetHandle: `${upperNodeId}:MiddleInput`,
					type: "step",
					style: { strokeWidth: 2 },
					selectable: false,
				});
				return;
			}

			edges.push({
				id: `${nodeId}->${upperNodeId}`,
				source: nodeId,
				target: upperNodeId,
				sourceHandle: `${nodeId}:Output`,
				targetHandle: `${upperNodeId}:LowerInput`,
				type: "step",
				style: { strokeWidth: 2 },
				selectable: false,
			});
		}
		if (node.lowerRound) {
			const lowerNodeId = `${bracketId}:${node.lowerRound.name}`;
			edges.push({
				id: `${nodeId}->${lowerNodeId}`,
				source: nodeId,
				target: lowerNodeId,
				sourceHandle: `${nodeId}:Output`,
				targetHandle: `${lowerNodeId}:UpperInput`,
				type: "step",
				style: { strokeWidth: 2 },
				selectable: false,
			});
		}
	});

	const lqf1 = afl.getBracketNode("LowerQuarterFinal1");
	const lqf2 = afl.getBracketNode("LowerQuarterFinal2");
	const sf1 = afl.getBracketNode("SemiFinal1");
	const sf2 = afl.getBracketNode("SemiFinal2");
	const withGhostNodes = [lqf1, lqf2, sf1, sf2];
	withGhostNodes.forEach((node) => {
		const nodeId = `${bracketId}:${node.name}`;
		edges.push({
			id: `${nodeId}:Ghost->${nodeId}`,
			source: `${nodeId}:Ghost`,
			target: `${nodeId}`,
			sourceHandle: `${nodeId}:Ghost:Output`,
			targetHandle: `${nodeId}:UpperInput`,
			type: "step",
			style: { strokeWidth: 2 },
			selectable: false,
		});
	});

	return edges;
}