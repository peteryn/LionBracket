import { GenericMatchNode } from "../../../LionBracketEngine/src/models/generic_match_node.ts";
import { Bracket } from "../../../LionBracketEngine/src/models/bracket.ts";

export type Team = {
	name: string,
	path: string,
}

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
	teams: Team[]
}

export function MatchNodeTypeConstructor<NodeNames extends string, B extends Bracket<NodeNames>>(
	node: GenericMatchNode<NodeNames>, bracket: B, bracketId: string, team: Team[]): MatchNodeType<NodeNames, B> {
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
		outputHandleId: `${nodeId}:Output`,
		teams: team
	};
}