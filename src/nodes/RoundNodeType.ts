import { RoundNode } from "../../LionBracketEngine/src/models/round_node";
import { Match, SwissMatch } from "../../LionBracketEngine/src/models/match";
import { SwissBracketFlow } from "../../LionBracketEngine/src/swiss_bracket/swiss_backet_flow";

export class RoundNodeType {
	[key: string]: unknown;
	name: string;
	matches: Match[] | SwissMatch[];
	swissBracket: SwissBracketFlow;
	updateSwissFun: React.Dispatch<React.SetStateAction<RoundNode>> | undefined;
	inputHandleId: string;
	outputHandleId: string;
	qualifiedHandleId: string;
	eliminatedHandleId: string;

	constructor(
		name: string,
		matches: Match[] | SwissMatch[],
		swissBracket: SwissBracketFlow,
		updateSwissFun: React.Dispatch<React.SetStateAction<RoundNode>> | undefined,
		inputHandleId: string,
		outputHandleId: string,
		qualifiedHandleId: string,
		eliminatedHandleId: string
	) {
		this.name = name;
		this.matches = matches;
		this.swissBracket = swissBracket;
		this.updateSwissFun = updateSwissFun;
		this.inputHandleId = inputHandleId;
		this.outputHandleId = outputHandleId;
		this.qualifiedHandleId = qualifiedHandleId;
		this.eliminatedHandleId = eliminatedHandleId;
	}
}
