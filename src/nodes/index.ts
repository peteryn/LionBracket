import { NodeTypes } from "@xyflow/react";
import { ChampionNodeComponent } from "./ChampionNodeComponent";
import { GhostNode } from "./ghost_node/GhostNode.tsx";
import { EndingNodeLowerComponent } from "./roundNodes/EndingNodeLowerComponent";
import { EndingNodeMiddleComponent } from "./roundNodes/EndingNodeMiddleComponent";
import { EndingNodeUpperComponent } from "./roundNodes/EndingNodeUpperComponent";
import { ExitNodeComponent } from "./roundNodes/ExitNodeComponent";
import { RoundNodeComponent } from "./roundNodes/RoundNodeComponent";
import { StartingNodeComponent } from "./roundNodes/StartingNodeComponent";
import { MatchNodeComponent } from "./matchNodes/MatchNodeComponent.tsx";
import { PromotedNodeComponent } from "./promoted_node/PromotedNodeComponent.tsx";

export const nodeTypes = {
	// Add any of your custom nodes here!
	"round-node-component": RoundNodeComponent,
	"starting-node-component": StartingNodeComponent,
	"ending-node-upper-component": EndingNodeUpperComponent,
	"ending-node-middle-component": EndingNodeMiddleComponent,
	"ending-node-lower-component": EndingNodeLowerComponent,
	"exit-node-component": ExitNodeComponent,
	"match-node-component": MatchNodeComponent,
	"ghost-node": GhostNode,
	"champion-node-component": ChampionNodeComponent,
	"promoted-node-component": PromotedNodeComponent,
} satisfies NodeTypes;