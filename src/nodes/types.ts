import type { Node } from "@xyflow/react";
import { RoundNodeType } from "./roundNodes/RoundNodeType";
import { MatchNodeType } from "./MatchNodes/MatchNodeType";
import { GhostNodeType } from "./GhostNode/GhostNodeType.ts";
import { ChampionNodeType } from "./ChampionNode/ChampionNodeType.ts";
import { AflBracket, AflNodeNames } from "../../LionBracketEngine/src/afl_bracket/afl_bracket.ts";
import { Bracket } from "../../LionBracketEngine/src/models/bracket.ts";
import { PromotedNodeType } from "./PromotedNode/PromotedNodeType.ts";
import { GslLiteBracket, GslLiteNodeNames } from "../../LionBracketEngine/src/gsl_bracket/gsl_lite_bracket.ts";
import { ExitNodeType } from "./roundNodes/ExitNodeType.ts";

export type RoundNodeComponent = Node<RoundNodeType, "round-node-component">;
export type StartingNodeComponent = Node<RoundNodeType, "starting-node-component">;
export type EndingNodeUpperComponent = Node<RoundNodeType, "ending-node-upper-component">;
export type EndingNodeMiddleComponent = Node<RoundNodeType, "ending-node-middle-component">;
export type EndingNodeLowerComponent = Node<RoundNodeType, "ending-node-lower-component">;

export type ExitNodeComponent = Node<ExitNodeType, "exit-node-component">;

export type MatchNodeComponent<NodeNames extends string, B extends Bracket<NodeNames>> = Node<MatchNodeType<NodeNames, B>, "match-node-component">

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
	| GhostNode
	| ChampionNodeComponent
	| PromotedNodeComponent;
