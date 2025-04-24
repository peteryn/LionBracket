import { AppNode } from "../nodes/types.ts";
import { MatchNodeTypeConstructor } from "../nodes/matchNodes/MatchNodeType.ts";
import { GslLiteBracket, GslLiteNodeNames } from "../../LionBracketEngine/src/gsl_bracket/gsl_lite_bracket.ts";

export function createGSLCoordinates(boundingXValue: number, boundingYValue: number, gsl: GslLiteBracket) {
	const VERTICAL_GAP = 40;
	const HORIZONTAL_GAP = 92;
	const NODE_HEIGHT = 100;
	const NODE_WIDTH = 258;
	const NODE_RAISE_VALUE = -20;

	const HORIZONTAL_OFFSET = HORIZONTAL_GAP + NODE_WIDTH;
	const VERTICAL_OFFSET = VERTICAL_GAP + NODE_HEIGHT;
	const UPPER_BRACKET_GAP = NODE_HEIGHT + 20;

	const [uqf1, uqf2, uqf3, uqf4, usf1, usf2, lqf1, lqf2, lsf1, lsf2] = gsl.getAllMatchNodes();
	const nodeCoordinates: Map<GslLiteNodeNames, [x: number, y: number]> = new Map();

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

	return nodeCoordinates;
}

export function createGSLNodes(gsl: GslLiteBracket, xCoordinate: number, yCoordinate: number) {
	const allMatchNodes = gsl.getAllMatchNodes();
	const coordinates = createGSLCoordinates(0, 0, gsl);

	const initialNodes: AppNode[] = allMatchNodes.map((node) => {
		const res = coordinates.get(node.name);
		let xCalc = 0;
		let yCalc = -200;
		if (res) {
			xCalc = res[0];
			yCalc = res[1];
		}
		const appNode: AppNode = {
			id: node.name,
			position: { x: xCalc, y: yCalc },
			data: MatchNodeTypeConstructor(node, gsl),
			type: "match-node-component",
			draggable: false,
		};
		return appNode;
	});

	return initialNodes;
}