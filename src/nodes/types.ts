import type { Node } from "@xyflow/react";
import { Match } from "./Match";
import { RoundNodeType } from "./RoundNodeType";


export type MatchNode = Node<Match, "match">;
export type StartingMatchNode = Node<Match, "starting-match">
export type EndingMatchNode = Node<Match, "ending-match">

export type RoundNodeComponent = Node<RoundNodeType, "round-node-component">
export type AppNode = MatchNode | StartingMatchNode | EndingMatchNode | RoundNodeComponent;
