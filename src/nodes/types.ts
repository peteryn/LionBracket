import type { Node } from "@xyflow/react";
import { RoundNodeType } from "./roundNodes/RoundNodeType";
import { ExitNodeType } from "./ExitNodeType";
import { MatchNodeType } from "./matchNodes/MatchNodeType";
import { GhostNodeType } from "./GhostNodeType";
import { MatchNodeStartingComponent } from "./matchNodes/MatchNodeStartingComponent";
import { ChampionNodeType } from "./ChampionNodeType";
import { AFLNodeTypes } from "../../LionBracketEngine/src/afl_bracket/afl_bracket.ts";
import { GSLNodeTypes } from "../../LionBracketEngine/src/gsl_bracket/gsl_bracket.ts";
import { GenericMatchNode } from "../../LionBracketEngine/src/models/generic_match_node.ts";
import { Bracket } from "../../LionBracketEngine/src/models/bracket.ts";

export type RoundNodeComponent = Node<RoundNodeType, "round-node-component">;
export type StartingNodeComponent = Node<RoundNodeType, "starting-node-component">;
export type EndingNodeUpperComponent = Node<RoundNodeType, "ending-node-upper-component">;
export type EndingNodeMiddleComponent = Node<RoundNodeType, "ending-node-middle-component">;
export type EndingNodeLowerComponent = Node<RoundNodeType, "ending-node-lower-component">;

export type ExitNodeComponent = Node<ExitNodeType, "exit-node-component">;

export type EliminationMatchNode =
	MatchNodeType<AFLNodeTypes, Bracket<GenericMatchNode<AFLNodeTypes>, AFLNodeTypes>>
	| MatchNodeType<GSLNodeTypes, Bracket<GenericMatchNode<GSLNodeTypes>, GSLNodeTypes>>

export type MatchNodeIsolatedComponent = Node<EliminationMatchNode, "match-node-isolated-component">;
export type MatchNodeStartingComponent = Node<EliminationMatchNode, "match-node-starting-component">;
export type MatchNodeEndingComponent = Node<EliminationMatchNode, "match-node-ending-component">;
export type MatchNodeMiddleComponent = Node<EliminationMatchNode, "match-node-middle-component">;
export type MatchNodeMiddleComponent2 = Node<EliminationMatchNode, "match-node-middle-component2">;
export type MatchNodeMiddleComponentTwoParents = Node<EliminationMatchNode, "match-node-component-two-parents">;

export type GhostNode = Node<GhostNodeType, "ghost-node">;
export type ChampionNodeComponent = Node<ChampionNodeType, "champion-node-component">;

export type AppNode =
	| RoundNodeComponent
	| StartingNodeComponent
	| EndingNodeUpperComponent
	| ExitNodeComponent
	| EndingNodeMiddleComponent
	| EndingNodeLowerComponent
	| MatchNodeIsolatedComponent
	| MatchNodeStartingComponent
	| MatchNodeEndingComponent
	| MatchNodeMiddleComponent
	| MatchNodeMiddleComponent2
	| GhostNode
	| ChampionNodeComponent;
