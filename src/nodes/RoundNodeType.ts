import { RoundNode } from "../../BracketLion/models";

export class RoundNodeType {
	[key: string]: unknown;
	name: string;
	roundNode: RoundNode;

	constructor(name: string, roundNode: RoundNode) {
		this.name = name;
		this.roundNode = roundNode;
	}
}