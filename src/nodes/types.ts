import type { Node } from "@xyflow/react";
import { Match } from "./Match";


export type MatchNode = Node<Match, "match">;
export type StartingMatchNode = Node<Match, "starting-match">
export type EndingMatchNode = Node<Match, "ending-match">
export type AppNode = MatchNode | StartingMatchNode | EndingMatchNode;
