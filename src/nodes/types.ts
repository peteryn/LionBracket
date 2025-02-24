import type { Node } from "@xyflow/react";
import { RoundNodeType } from "./RoundNodeType";
import { ExitNodeType } from "./ExitNodeType";
import { MatchNodeType } from "./MatchNodeType";
import { MatchNodeStartingComponent } from "./matchNodes/MatchNodeStartingComponent";

export type RoundNodeComponent = Node<RoundNodeType, "round-node-component">;
export type StartingNodeComponent = Node<RoundNodeType, "starting-node-component">;
export type EndingNodeUpperComponent = Node<RoundNodeType, "ending-node-upper-component">;
export type EndingNodeMiddleComponent = Node<RoundNodeType, "ending-node-middle-component">;
export type EndingNodeLowerComponent = Node<RoundNodeType, "ending-node-lower-component">;

export type ExitNodeComponent = Node<ExitNodeType, "exit-node-component">;

export type MatchNodeIsolatedComponent = Node<MatchNodeType, "match-node-isolated-component">;
export type MatchNodeStartingComponent = Node<MatchNodeType, "match-node-starting-component">;

export type AppNode =
	| RoundNodeComponent
	| StartingNodeComponent
	| EndingNodeUpperComponent
	| ExitNodeComponent
	| EndingNodeMiddleComponent
	| EndingNodeLowerComponent
	| MatchNodeIsolatedComponent
	| MatchNodeStartingComponent;
