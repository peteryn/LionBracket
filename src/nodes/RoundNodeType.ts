import { RoundNode } from "../../BracketLion/src/models/round_node";
import { SwissBracket } from "../../BracketLion/src/swiss_bracket/swiss_bracket";
import { SwissBracketData } from "../../BracketLion/src/swiss_bracket/swiss_bracket_data";

export class RoundNodeType {
	[key: string]: unknown;
	name: string;
	roundNode: RoundNode;
	swissBracket: SwissBracket;
	updateSwissFun: React.Dispatch<React.SetStateAction<SwissBracketData>> | undefined;
	inputHandleId: string;
	outputHandleId: string;
	qualifiedHandleId: string;
	eliminatedHandleId: string;

	constructor(
		name: string,
		roundNode: RoundNode,
		swissBracket: SwissBracket,
		updateSwissFun: React.Dispatch<React.SetStateAction<SwissBracketData>> | undefined,
		inputHandleId: string,
		outputHandleId: string,
		qualifiedHandleId: string,
		eliminatedHandleId: string
	) {
		this.name = name;
		this.roundNode = roundNode;
		this.swissBracket = swissBracket;
		this.updateSwissFun = updateSwissFun;
		this.inputHandleId = inputHandleId;
		this.outputHandleId = outputHandleId;
		this.qualifiedHandleId = qualifiedHandleId;
		this.eliminatedHandleId = eliminatedHandleId;
	}
}
