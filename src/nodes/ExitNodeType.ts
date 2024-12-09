import { SwissBracket } from "../../BracketLion/SwissBracket";

export class ExitNodeType {
	[key: string]: unknown;
	swissBracket: SwissBracket;
	parent: string;

	constructor(swissBracket: SwissBracket, parent: string) {
		this.swissBracket = swissBracket;
		this.parent = parent;
	}
}
