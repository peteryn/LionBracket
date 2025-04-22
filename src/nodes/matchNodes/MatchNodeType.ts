import { AFLBracket } from "../../../../LionBracketEngine/src/afl_bracket/afl_bracket";
import { MatchNode } from "../../../LionBracketEngine/src/models/match_node";
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
	bracketName: string;
	matchNode: GenericMatchNode<NodeNames>;
	bracket: B;
	updateFun: React.Dispatch<React.SetStateAction<GenericMatchNode<NodeNames>[]>> | undefined;
	upperInputHandleId: string;
	lowerInputHandleId: string;
	outputHandleId: string;
	ghostInputHandleId: string;
	championOutputHandleId: string;
}