import { GSLBracket, GSLNodeTypes } from "../../LionBracketEngine/src/gsl_bracket/gsl_bracket.ts";
import { AppNode } from "../nodes/types.ts";
import { MatchNodeTypeConstructor } from "../nodes/matchNodes/MatchNodeType.ts";

export function createGSLCoordinates(boundingXValue: number, boundingYValue: number, gsl: GSLBracket) {
	const VERTICAL_GAP = 40;
	const HORIZONTAL_GAP = 92;
	const NODE_HEIGHT = 100;
	const NODE_WIDTH = 258;

	const HORIZONTAL_OFFSET = HORIZONTAL_GAP + NODE_WIDTH;
	const VERTICAL_OFFSET = VERTICAL_GAP + NODE_HEIGHT;

	const nodeCoordinates: Map<GSLNodeTypes, number[]> = new Map();

	return nodeCoordinates;
}

export function createGSLNodes(gsl: GSLBracket, xCoordinate: number, yCoordinate: number) {
	const allMatchNodes = gsl.getAllMatchNodes();
	const coordinates = createGSLCoordinates(0, 0, gsl);

	const initialNodes: AppNode[] = allMatchNodes.map((node) => {
		const res = coordinates.get(node.name);
		let xCalc = 0;
		let yCalc = 0;
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
	})

	return initialNodes;
}