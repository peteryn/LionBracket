import { RoundNode } from "../../BracketLion/models";
import { SwissBracketData } from "../../BracketLion/SwissBracketData";

export class RoundNodeType {
	[key: string]: unknown;
	name: string;
	roundNode: RoundNode;
	updateSwissFun: React.Dispatch<React.SetStateAction<SwissBracketData>> | undefined;
	inputHandleId: string
	outputHandleId: string

	constructor(
		name: string,
		roundNode: RoundNode,
		updateSwissFun: React.Dispatch<React.SetStateAction<SwissBracketData>> | undefined,
		inputHandleId: string,
		outputHandleId: string
	) {
		this.name = name;
		this.roundNode = roundNode;
		this.updateSwissFun = updateSwissFun;
		this.inputHandleId = inputHandleId;
		this.outputHandleId = outputHandleId
	}
}
