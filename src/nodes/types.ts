import type { Node, BuiltInNode } from "@xyflow/react";

export type PositionLoggerNode = Node<{ label: string }, "position-logger">;
export type VerticalInputNode = Node<{ label: string }, "vertical-input">;
export type MatchNode = Node<{
	team1: string;
	team2: string;
	isStarting?: boolean;
	isEnding?: boolean;
	update?: any;
	remove?: any;
	round: string;
	matchNumber: string;
	target?: string;
	targetPos?: string;
}>;
export type AppNode = MatchNode;
