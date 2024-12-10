import { SwissBracket } from "../../BracketLion/SwissBracket";

export class ExitNodeType {
	[key: string]: unknown;
	title: string;
	colorClass: string;
	swissBracket: SwissBracket;
	parent: string;
	inputHandleId: string;

	constructor(title: string, colorClass: string, swissBracket: SwissBracket, parent: string, inputHandleId: string) {
		this.title = title
		this.colorClass = colorClass
		this.swissBracket = swissBracket;
		this.parent = parent;
		this.inputHandleId = inputHandleId;
	}
}
