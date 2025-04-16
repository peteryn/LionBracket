import { Match, SwissMatch } from "../../../LionBracketEngine/src/models/match";
import { BracketNode } from "../../../LionBracketEngine/src/models/bracket_node";
import { Seed } from "../../../LionBracketEngine/src/models/match_record";
import { SwissBracketFlow } from "../../../LionBracketEngine/src/swiss_bracket/swiss_backet_flow";

export class RoundNodeType {
	[key: string]: unknown;
	name: string;
	matches: Match[];
	swissBracket: SwissBracketFlow;
	updateSwissFun: React.Dispatch<React.SetStateAction<BracketNode>> | undefined;
	updatePromotedBracket: ((seeds: Seed[]) => void) | undefined;
	inputHandleId: string;
	outputHandleId: string;
	qualifiedHandleId: string;
	eliminatedHandleId: string;

	constructor(
		name: string,
		matches: Match[] | SwissMatch[],
		swissBracket: SwissBracketFlow,
		updateSwissFun: React.Dispatch<React.SetStateAction<BracketNode>> | undefined,
		updatePromotedBracket: ((seeds: Seed[]) => void) | undefined,
		inputHandleId: string,
		outputHandleId: string,
		qualifiedHandleId: string,
		eliminatedHandleId: string
	) {
		this.name = name;
		this.matches = matches;
		this.swissBracket = swissBracket;
		this.updateSwissFun = updateSwissFun;
		this.updatePromotedBracket = updatePromotedBracket;
		this.inputHandleId = inputHandleId;
		this.outputHandleId = outputHandleId;
		this.qualifiedHandleId = qualifiedHandleId;
		this.eliminatedHandleId = eliminatedHandleId;
	}
}
