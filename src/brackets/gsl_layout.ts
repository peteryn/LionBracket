import { GSLBracketFlow } from "../../LionBracketEngine/src/gsl_bracket/gsl_bracket_flow.ts";

export function createGSLNodes(gsl: GSLBracketFlow, xCoordinate: number, yCoordinate: number) {
	const [uqf1, uqf2, uqf3, uqf4, usf1, usf2, uf, lqf1, lqf2, lsf1, lsf2, lf] = gsl.getAllMatchNodes();
	const startingMatchNodes = [uqf1, uqf2, uqf3, uqf4, lqf1, lqf2];
	
}