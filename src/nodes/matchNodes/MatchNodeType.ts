import { AFLBracketFlow } from "../../../../LionBracketEngine/src/afl_bracket/afl_bracket_flow";
import { MatchNode } from "../../../../LionBracketEngine/src/models/match_node";

export class MatchNodeType {
	[key: string]: unknown;
	name: string;
	matchNode: MatchNode;
	bracket: AFLBracketFlow;
	updateFun: React.Dispatch<React.SetStateAction<MatchNode[]>> | undefined;
	inputHandleId: string;
	outputHandleId: string;
	ghostInputHandleId: string;
	championOutputHandleId: string;

	constructor(matchNode: MatchNode, bracket: AFLBracketFlow) {
		this.name = matchNode.name;
		this.matchNode = matchNode;
		this.bracket = bracket;
		this.updateFun = undefined;
		this.inputHandleId = `${matchNode.name}:Input`;
		this.outputHandleId = `${matchNode.name}:Output`;
		this.ghostInputHandleId = `${matchNode.name}:GhostInput`;
		this.championOutputHandleId = `${matchNode.name}:ChamptionOutput`;
	}
}
