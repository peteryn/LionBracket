import { GenericMatchNode } from "../../../LionBracketEngine/src/models/generic_match_node.ts";
import { Bracket } from "../../../LionBracketEngine/src/models/bracket.ts";

// export class MatchNodeType {
// 	[key: string]: unknown;
//
// 	name: string;
// 	matchNode: MatchNode;
// 	bracket: AFLBracket;
// 	updateFun: React.Dispatch<React.SetStateAction<MatchNode[]>> | undefined;
// 	upperInputHandleId: string;
// 	lowerInputHandleId: string;
// 	outputHandleId: string;
// 	ghostInputHandleId: string;
// 	championOutputHandleId: string;
//
// 	constructor(matchNode: MatchNode, bracket: AFLBracket) {
// 		this.name = matchNode.name;
// 		this.matchNode = matchNode;
// 		this.bracket = bracket;
// 		this.updateFun = undefined;
// 		this.upperInputHandleId = `${matchNode.name}:UpperInput`;
// 		this.lowerInputHandleId = `${matchNode.name}:LowerInput`;
// 		this.outputHandleId = `${matchNode.name}:Output`;
// 		this.ghostInputHandleId = `${matchNode.name}:GhostInput`;
// 		this.championOutputHandleId = `${matchNode.name}:ChampionOutput`;
// 	}
// }

export type MatchNodeType<NodeNames extends string, B extends Bracket<NodeNames>> = {
	bracketId: string;
	matchNode: GenericMatchNode<NodeNames>;
	bracket: B;
	updateFun: any | undefined;
	promoteFun: any | undefined;
	upperInputHandleId: string;
	middleInputHandleId: string;
	lowerInputHandleId: string;
	outputHandleId: string;
	// ghostInputHandleId: string;
	// championOutputHandleId: string;
}

export function MatchNodeTypeConstructor<NodeNames extends string, B extends Bracket<NodeNames>>(
	node: GenericMatchNode<NodeNames>, bracket: B, bracketId: string): MatchNodeType<NodeNames, B> {
	let nodeId = `${bracketId}:${node.name}`;
	return {
		bracketId: bracketId,
		matchNode: node,
		bracket: bracket,
		updateFun: undefined,
		promoteFun: undefined,
		upperInputHandleId: `${nodeId}:UpperInput`,
		middleInputHandleId: `${nodeId}:MiddleInput`,
		lowerInputHandleId: `${nodeId}:LowerInput`,
		outputHandleId: `${nodeId}:Output`
	};
}