import { MatchNode } from "../../LionBracketEngine/src/models/match_node";

export class MatchNodeType {
	[key: string]: unknown;
	name: string;
	matchNode: MatchNode;
	updateFun: React.Dispatch<React.SetStateAction<MatchNode>> | undefined;
	inputHandleId: string;
	outputHandleId: string;
	qualifiedHandleId: string;
	eliminatedHandleId: string;

	constructor(
		name: string,
		matchNode: MatchNode,
		updateFun: React.Dispatch<React.SetStateAction<MatchNode>> | undefined,
		inputHandleId: string,
		outputHandleId: string,
		qualifiedHandleId: string,
		eliminatedHandleId: string
	) {
		this.name = name;
		this.matchNode = matchNode;
		this.updateFun = updateFun;
		this.inputHandleId = inputHandleId;
		this.outputHandleId = outputHandleId;
		this.qualifiedHandleId = qualifiedHandleId;
		this.eliminatedHandleId = eliminatedHandleId;
	}
}
