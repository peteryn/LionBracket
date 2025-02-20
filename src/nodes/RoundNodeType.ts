import { Match, SwissMatch } from "../../LionBracketEngine/src/models/match";
import { Major1Brackets } from "../../LionBracketEngine/src/models/bracket";
import { BracketNode } from "../../LionBracketEngine/src/models/bracket_node";

export class RoundNodeType {
	[key: string]: unknown;
	name: string;
	matches: Match[];
	swissBracket: Major1Brackets;
	updateSwissFun: React.Dispatch<React.SetStateAction<BracketNode>> | undefined;
	inputHandleId: string;
	outputHandleId: string;
	qualifiedHandleId: string;
	eliminatedHandleId: string;

	constructor(
		name: string,
		matches: Match[] | SwissMatch[],
		swissBracket: Major1Brackets,
		updateSwissFun: React.Dispatch<React.SetStateAction<BracketNode>> | undefined,
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
