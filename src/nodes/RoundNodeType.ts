import { RoundNode } from "../../BracketLion/models";
import { Match } from "../../BracketLion/models";
import { SwissBracket } from "../../BracketLion/SwissBracket";

export class RoundNodeType {
	[key: string]: unknown;
	name: string;
	roundNode: RoundNode;
	parentSwissBracket: SwissBracket;
	updateSwissFun: React.Dispatch<React.SetStateAction<SwissBracket>> | undefined;
	setMyString: React.Dispatch<React.SetStateAction<string>> | undefined;
	message: string

	constructor(
		name: string,
		roundNode: RoundNode,
		swiss: SwissBracket,
		updateSwissFun: React.Dispatch<React.SetStateAction<SwissBracket>> | undefined,
		message: string
	) {
		this.name = name;
		this.roundNode = roundNode;
		this.parentSwissBracket = swiss;
		this.updateSwissFun = updateSwissFun;
		this.message = message
	}
}
