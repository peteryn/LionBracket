import { GSLBracket } from "../../LionBracketEngine/src/gsl_bracket/gsl_bracket.ts";

export function createGSLNodes(gsl: GSLBracket, xCoordinate: number, yCoordinate: number) {
	const [uqf1, uqf2, uqf3, uqf4, usf1, usf2, uf, lqf1, lqf2, lsf1, lsf2, lf] = gsl.getAllMatchNodes();
	const startingMatchNodes = [uqf1, uqf2, uqf3, uqf4, lqf1, lqf2];
	const middleMatchNodes = [usf1, usf2];
	const middleMatchNodesWithGhostNodes = [lsf1, lsf2];
	const finalMatchNodes = [uf, lf];


}