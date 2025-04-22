import { NodeTypes } from "@xyflow/react";
import { ChampionNodeComponent } from "./ChampionNodeComponent";
import { GhostNode } from "./GhostNode";
import { MatchNodeEndingComponent } from "./matchNodes/MatchNodeEndingComponent";
import { MatchNodeIsolatedComponent } from "./matchNodes/MatchNodeIsolatedComponent";
import { MatchNodeMiddleComponent } from "./matchNodes/MatchNodeMiddleComponent";
import { MatchNodeMiddleComponent2 } from "./matchNodes/MatchNodeMiddleComponent2";
import { MatchNodeStartingComponent } from "./matchNodes/MatchNodeStartingComponent";
import { EndingNodeLowerComponent } from "./roundNodes/EndingNodeLowerComponent";
import { EndingNodeMiddleComponent } from "./roundNodes/EndingNodeMiddleComponent";
import { EndingNodeUpperComponent } from "./roundNodes/EndingNodeUpperComponent";
import { ExitNodeComponent } from "./roundNodes/ExitNodeComponent";
import { RoundNodeComponent } from "./roundNodes/RoundNodeComponent";
import { StartingNodeComponent } from "./roundNodes/StartingNodeComponent";
import { MatchNodeMiddleComponentTwoParents } from "./matchNodes/MatchNodeMiddleComponentTwoParents.tsx";
import { MatchNodeComponent } from "./matchNodes/MatchNodeComponent.tsx";

export const nodeTypes = {
	// Add any of your custom nodes here!
	"round-node-component": RoundNodeComponent,
	"starting-node-component": StartingNodeComponent,
	"ending-node-upper-component": EndingNodeUpperComponent,
	"ending-node-middle-component": EndingNodeMiddleComponent,
	"ending-node-lower-component": EndingNodeLowerComponent,
	"exit-node-component": ExitNodeComponent,
	"match-node-component": MatchNodeComponent,
	// "match-node-isolated-component": MatchNodeIsolatedComponent,
	// "match-node-starting-component": MatchNodeStartingComponent,
	// "match-node-ending-component": MatchNodeEndingComponent,
	// "match-node-middle-component": MatchNodeMiddleComponent,
	// "match-node-middle-component2": MatchNodeMiddleComponent2,
	// "match-node-middle-component-two-parents": MatchNodeMiddleComponentTwoParents,
	"ghost-node": GhostNode,
	"champion-node-component": ChampionNodeComponent,
} satisfies NodeTypes;