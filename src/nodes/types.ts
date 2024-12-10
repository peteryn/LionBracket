import type { Node } from "@xyflow/react";
import { Match } from "./Match";
import { RoundNodeType } from "./RoundNodeType";
import { ExitNodeType } from "./ExitNodeType";

export type MatchNode = Node<Match, "match">;
export type StartingMatchNode = Node<Match, "starting-match">;
export type EndingMatchNode = Node<Match, "ending-match">;

export type RoundNodeComponent = Node<RoundNodeType, "round-node-component">;
export type StartingNodeComponent = Node<RoundNodeType, "starting-node-component">;
export type EndingNodeUpperComponent = Node<RoundNodeType, "ending-node-upper-component">;
export type EndingNodeMiddleComponent = Node<RoundNodeType, "ending-node-middle-component">;
export type EndingNodeLowerComponent = Node<RoundNodeType, "ending-node-lower-component">;

export type ExitNodeComponent = Node<ExitNodeType, "exit-node-component">;

export type AppNode =
	| RoundNodeComponent
	| StartingNodeComponent
	| EndingNodeUpperComponent
	| ExitNodeComponent
	| EndingNodeMiddleComponent
	| EndingNodeLowerComponent;
