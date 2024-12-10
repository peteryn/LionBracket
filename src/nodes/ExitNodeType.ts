import { SwissBracket } from "../../BracketLion/SwissBracket";

export class ExitNodeType {
	[key: string]: unknown;
	swissBracket: SwissBracket;
	parent: string;
	inputHandleId: string;

	constructor(swissBracket: SwissBracket, parent: string, inputHandleId: string) {
		this.swissBracket = swissBracket;
		this.parent = parent;
		this.inputHandleId = inputHandleId;
	}
}
