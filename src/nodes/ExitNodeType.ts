import { SwissBracket } from "../../BracketLion/src/swiss_bracket/swiss_bracket";

export class ExitNodeType {
	[key: string]: unknown;
	title: string;
	colorClass: string;
	swissBracket: SwissBracket;
	parent: string;
	inputHandleId: string;
	isPromoted: boolean;

	constructor(
		title: string,
		colorClass: string,
		swissBracket: SwissBracket,
		parent: string,
		inputHandleId: string,
		isPromoted: boolean
	) {
		this.title = title;
		this.colorClass = colorClass;
		this.swissBracket = swissBracket;
		this.parent = parent;
		this.inputHandleId = inputHandleId;
		this.isPromoted = isPromoted;
	}
}
