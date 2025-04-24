import type { Node } from "@xyflow/react";
import { RoundNodeType } from "./roundNodes/RoundNodeType";
import { ExitNodeType } from "./ExitNodeType";
import { MatchNodeType } from "./matchNodes/MatchNodeType";
import { GhostNodeType } from "./GhostNodeType";
import { MatchNodeStartingComponent } from "./matchNodes/MatchNodeStartingComponent";
import { ChampionNodeType } from "./ChampionNodeType";
import { AflBracket, AflNodeNames } from "../../LionBracketEngine/src/afl_bracket/afl_bracket.ts";
import { GslBracket, GslNodeNames } from "../../LionBracketEngine/src/gsl_bracket/gsl_bracket.ts";
import { GenericMatchNode } from "../../LionBracketEngine/src/models/generic_match_node.ts";
import { Bracket } from "../../LionBracketEngine/src/models/bracket.ts";
import { PromotedNodeType } from "./PromotedNodeType.ts";
import { GslLiteBracket, GslLiteNodeNames } from "../../LionBracketEngine/src/gsl_bracket/gsl_lite_bracket.ts";

export type RoundNodeComponent = Node<RoundNodeType, "round-node-component">;
export type StartingNodeComponent = Node<RoundNodeType, "starting-node-component">;
export type EndingNodeUpperComponent = Node<RoundNodeType, "ending-node-upper-component">;
export type EndingNodeMiddleComponent = Node<RoundNodeType, "ending-node-middle-component">;
export type EndingNodeLowerComponent = Node<RoundNodeType, "ending-node-lower-component">;

export type ExitNodeComponent = Node<ExitNodeType, "exit-node-component">;

export type MatchNodeComponent<NodeNames extends string, B extends Bracket<NodeNames>> = Node<MatchNodeType<NodeNames, B>, "match-node-component">

export type MatchNodeIsolatedComponent<NodeNames extends string, B extends Bracket<NodeNames>> = Node<MatchNodeType<NodeNames, B>, "match-node-isolated-component">;
export type MatchNodeStartingComponent<NodeNames extends string, B extends Bracket<NodeNames>> = Node<MatchNodeType<NodeNames, B>, "match-node-starting-component">;
export type MatchNodeEndingComponent<NodeNames extends string, B extends Bracket<NodeNames>> = Node<MatchNodeType<NodeNames, B>, "match-node-ending-component">;
export type MatchNodeMiddleComponent<NodeNames extends string, B extends Bracket<NodeNames>> = Node<MatchNodeType<NodeNames, B>, "match-node-middle-component">;
export type MatchNodeMiddleComponent2<NodeNames extends string, B extends Bracket<NodeNames>> = Node<MatchNodeType<NodeNames, B>, "match-node-middle-component2">;
export type MatchNodeMiddleComponentTwoParents<NodeNames extends string, B extends Bracket<NodeNames>> = Node<MatchNodeType<NodeNames, B>, "match-node-component-two-parents">;

export type GhostNode = Node<GhostNodeType, "ghost-node">;
export type ChampionNodeComponent = Node<ChampionNodeType, "champion-node-component">;
export type PromotedNodeComponent = Node<PromotedNodeType, "promoted-node-component">;

export type AppNode =
	| RoundNodeComponent
	| StartingNodeComponent
	| EndingNodeUpperComponent
	| ExitNodeComponent
	| EndingNodeMiddleComponent
	| EndingNodeLowerComponent
	| MatchNodeComponent<AflNodeNames, AflBracket>
	| MatchNodeComponent<GslLiteNodeNames, GslLiteBracket>
	| MatchNodeIsolatedComponent<AflNodeNames, AflBracket>
	// | MatchNodeStartingComponent
	// | MatchNodeEndingComponent
	// | MatchNodeMiddleComponent
	// | MatchNodeMiddleComponent2
	| GhostNode
	| ChampionNodeComponent
	| PromotedNodeComponent;
