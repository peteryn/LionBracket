import { AppNode } from "../nodes/types.ts";
import { MatchNodeTypeConstructor, Team } from "../nodes/matchNodes/MatchNodeType.ts";
import {
	GslLiteBracket,
	GslLiteMatchNode,
} from "../../LionBracketEngine/src/gsl_bracket/gsl_lite_bracket.ts";
import { getSeedOrUndefined } from "../../LionBracketEngine/src/util/util.ts";
import { paths } from "../helper/TeamsTranslator.ts";
import { Edge } from "@xyflow/react";
import { GhostNodeType } from "../nodes/ghost_node/GhostNodeType.ts";

// total dimensions (1050, 960)
export function createGslCoordinates(boundingXValue: number, boundingYValue: number, gsl: GslLiteBracket) {
	const VERTICAL_GAP = 40;
	const HORIZONTAL_GAP = 92;
	const NODE_HEIGHT = 100;
	const NODE_WIDTH = 258;
	const NODE_RAISE_VALUE = -20;

	const HORIZONTAL_OFFSET = HORIZONTAL_GAP + NODE_WIDTH;
	const VERTICAL_OFFSET = VERTICAL_GAP + NODE_HEIGHT;
	const UPPER_BRACKET_GAP = 60;

	// based off of promoted node css class
	// (100 - 58) / 2 = 21
	const PROMOTED_NODE_MIDDLE = 21;

	const GHOST_VERTICAL_OFFSET = 27.5;
	const GHOST_HORIZONTAL_OFFSET = 50;

	const [uqf1, uqf2, uqf3, uqf4, usf1, usf2, lqf1, lqf2, lsf1, lsf2] = gsl.getAllMatchNodes();
	const nodeCoordinates: Map<string, [x: number, y: number]> = new Map();

	let curY = boundingYValue;
	for (let i = 0; i < gsl.upperMatches.length; i++) {
		curY = boundingYValue + VERTICAL_OFFSET * i; // change after all coordinates are set
		nodeCoordinates.set(gsl.upperMatches[i].name, [boundingXValue, curY]);
	}

	for (let i = 0; i < gsl.lowerMatches.length; i++) {
		nodeCoordinates.set(gsl.lowerMatches[i].name, [boundingXValue, curY + UPPER_BRACKET_GAP + VERTICAL_OFFSET * (i + 1)]);
	}

	nodeCoordinates.set(usf1.name, [boundingXValue + HORIZONTAL_OFFSET, boundingYValue + (((2 * NODE_HEIGHT) + VERTICAL_GAP) / 2) - NODE_HEIGHT / 2]);
	nodeCoordinates.set(usf2.name, [boundingXValue + HORIZONTAL_OFFSET, boundingYValue + 2 * VERTICAL_OFFSET + (((2 * NODE_HEIGHT) + VERTICAL_GAP) / 2) - NODE_HEIGHT / 2]);

	nodeCoordinates.set(lsf1.name, [boundingXValue + HORIZONTAL_OFFSET, boundingYValue + 4 * VERTICAL_OFFSET + UPPER_BRACKET_GAP + NODE_RAISE_VALUE]);
	nodeCoordinates.set(lsf2.name, [boundingXValue + HORIZONTAL_OFFSET, boundingYValue + 5 * VERTICAL_OFFSET + UPPER_BRACKET_GAP + NODE_RAISE_VALUE]);

	nodeCoordinates.set(`${usf1.name}:Promoted`, [boundingXValue + 2 * HORIZONTAL_OFFSET, boundingYValue + (((2 * NODE_HEIGHT) + VERTICAL_GAP) / 2) - NODE_HEIGHT / 2 + PROMOTED_NODE_MIDDLE]);
	nodeCoordinates.set(`${usf2.name}:Promoted`, [boundingXValue + 2 * HORIZONTAL_OFFSET, boundingYValue + 2 * VERTICAL_OFFSET + (((2 * NODE_HEIGHT) + VERTICAL_GAP) / 2) - NODE_HEIGHT / 2 + PROMOTED_NODE_MIDDLE]);

	nodeCoordinates.set(`${lsf1.name}:Promoted`, [boundingXValue + 2 * HORIZONTAL_OFFSET, boundingYValue + 4 * VERTICAL_OFFSET + UPPER_BRACKET_GAP + NODE_RAISE_VALUE + PROMOTED_NODE_MIDDLE]);
	nodeCoordinates.set(`${lsf2.name}:Promoted`, [boundingXValue + 2 * HORIZONTAL_OFFSET, boundingYValue + 5 * VERTICAL_OFFSET + UPPER_BRACKET_GAP + NODE_RAISE_VALUE + PROMOTED_NODE_MIDDLE]);

	nodeCoordinates.set(`${lsf1.name}:Ghost`, [boundingXValue + HORIZONTAL_OFFSET - GHOST_HORIZONTAL_OFFSET, boundingYValue + 4 * VERTICAL_OFFSET + UPPER_BRACKET_GAP + NODE_RAISE_VALUE + GHOST_VERTICAL_OFFSET]);
	nodeCoordinates.set(`${lsf2.name}:Ghost`, [boundingXValue + HORIZONTAL_OFFSET - GHOST_HORIZONTAL_OFFSET, boundingYValue + 5 * VERTICAL_OFFSET + UPPER_BRACKET_GAP + NODE_RAISE_VALUE + GHOST_VERTICAL_OFFSET]);

	return nodeCoordinates;
}

export function createGslLiteNodes(bracketId: string, gsl: GslLiteBracket, xCoordinate: number, yCoordinate: number, teams: Team[]) {
	const allMatchNodes = gsl.getAllMatchNodes();
	const coordinates = createGslCoordinates(xCoordinate, yCoordinate, gsl);

	const initialNodes: AppNode[] = allMatchNodes.map((node) => {
		const res = coordinates.get(node.name);
		let xCalc = 0;
		let yCalc = -200;
		if (res) {
			xCalc = res[0];
			yCalc = res[1];
		}
		const nodeId = `${bracketId}:${node.name}`;
		const appNode: AppNode = {
			id: nodeId,
			position: { x: xCalc, y: yCalc },
			data: MatchNodeTypeConstructor(node, gsl, bracketId, teams),
			type: "match-node-component",
			draggable: false,
		};
		return appNode;
	});

	initialNodes.push(createPromotedNode(bracketId, gsl.getBracketNode("UpperSemiFinal1"), coordinates, teams));
	initialNodes.push(createPromotedNode(bracketId, gsl.getBracketNode("UpperSemiFinal2"), coordinates, teams));
	initialNodes.push(createPromotedNode(bracketId, gsl.getBracketNode("LowerSemiFinal1"), coordinates, teams));
	initialNodes.push(createPromotedNode(bracketId, gsl.getBracketNode("LowerSemiFinal2"), coordinates, teams));

	initialNodes.push(createGhostNode(bracketId, gsl.getBracketNode("LowerSemiFinal1"), coordinates));
	initialNodes.push(createGhostNode(bracketId, gsl.getBracketNode("LowerSemiFinal2"), coordinates));

	return initialNodes;
}

function createGhostNode(bracketId: string, node: GslLiteMatchNode, coordinates: Map<string, [x: number, y: number]>): AppNode {
	const ghostId = `${bracketId}:${node.name}:Ghost`;
	let xCalc = 0;
	let yCalc = 0;
	const res = coordinates.get(`${node.name}:Ghost`);
	if (res) {
		xCalc = res[0];
		yCalc = res[1];
	}
	return {
		id: ghostId,
		position: { x: xCalc, y: yCalc },
		data: new GhostNodeType(ghostId),
		type: "ghost-node",
		draggable: false,
	};
}

function createPromotedNode(bracketId: string, node: GslLiteMatchNode, coordinates: Map<string, [x: number, y: number]>, teams: Team[]): AppNode {
	const res = coordinates.get(`${node.name}:Promoted`);
	let xCalc = 0;
	let yCalc = -200;
	if (res) {
		xCalc = res[0];
		yCalc = res[1];
	}

	const promotedSeedOrUndefined = getSeedOrUndefined(node.matchRecord);
	let promotedTeamName = "";
	let promotedTeamPath = "";
	if (promotedSeedOrUndefined) {
		promotedTeamPath = `/logos/${teams[promotedSeedOrUndefined - 1].path}.png`;
		promotedTeamName = teams[promotedSeedOrUndefined - 1].name.replace("_", " ");
	}

	return {
		id: `${bracketId}:${node.name}:Promoted`,
		position: { x: xCalc, y: yCalc },
		type: "promoted-node-component",
		data: {
			inputId: `${bracketId}:${node.name}:Promoted`,
			teamName: promotedTeamName,
			imagePath: promotedTeamPath,
		},
		draggable: false,
	};
}

export function createGslLiteEdges(bracketId: string, gsl: GslLiteBracket) {
	const allMatchNodes = gsl.getAllMatchNodes();
	const edges: Edge[] = [];
	allMatchNodes.forEach((node) => {
		const nodeId = `${bracketId}:${node.name}`;
		if (node.upperRound) {
			const upperNodeId = `${bracketId}:${node.upperRound.name}`;
			if (node.name === "LowerQuarterFinal1" || node.name === "LowerQuarterFinal2") {
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
				return;
			}

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
		}
		// for promoted nodes
		if (!node.upperRound) {
			edges.push({
				id: `${nodeId}->${nodeId}:Promoted`,
				source: nodeId,
				target: `${nodeId}:Promoted`,
				sourceHandle: `${nodeId}:Output`,
				targetHandle: `${nodeId}:Promoted`,
				type: "step",
				style: { strokeWidth: 2 },
				selectable: false,
			});
		}
		// for ghost nodes
		if (node.name === "LowerSemiFinal1" || node.name === "LowerSemiFinal2") {
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
		}
	});
	return edges;
}
