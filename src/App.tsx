import { useEffect, useState } from "react";
import {
	ReactFlow,
	Background,
	Controls,
	MiniMap,
	useNodesState,
	useEdgesState,
} from "@xyflow/react";

import "@xyflow/react/dist/base.css";

export const globalSwiss: SwissBracket = new SwissBracket();
// const swissData = globalSwiss.data;
// console.log(swissData.matches)
// const matchesMapSerialized = JSON.stringify(Array.from(swissData.matches.entries()));
// const roundNodesMapSerialized = JSON.stringify(Array.from(swissData.roundNodes.entries()));
// const rootRoundSerialized = JSON.stringify(swissData.rootRound);
// const teams = JSON.stringify(swissData.teams);

// localStorage.setItem("matches", matchesMapSerialized);
// localStorage.setItem("roundNodes", roundNodesMapSerialized);
// localStorage.setItem("rootRound", rootRoundSerialized);
// localStorage.setItem("teams", teams);

// const storedMatches = localStorage.getItem("matches");
// const storedRoundNodes = localStorage.getItem("roundNodes");
// const storedRootRound = localStorage.getItem("rootRound");
// const storedTeams = localStorage.getItem("teams");

// if (storedMatches && storedRoundNodes && storedRootRound && storedTeams) {
// 	swissData.matches = new Map(JSON.parse(storedMatches));
// 	swissData.roundNodes = new Map(JSON.parse(storedRoundNodes));
// 	swissData.rootRound = JSON.parse(storedRootRound);
// 	swissData.teams = JSON.parse(storedTeams);
// }

import { createSwissNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { SwissBracket } from "../BracketLion/SwissBracket";

export default function App() {
	const [swissB, setSwissB] = useState(globalSwiss.data);

	const initialNodes = createSwissNodes(globalSwiss);

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, , onEdgesChange] = useEdgesState(initialEdges);

	nodes.forEach((node) => (node.data.updateSwissFun = setSwissB));

	useEffect(() => {
		const updatedNodes = createSwissNodes(globalSwiss);
		setNodes(updatedNodes);
	}, [swissB, setNodes]);

	return (
		<ReactFlow
			colorMode="dark"
			nodes={nodes}
			nodeTypes={nodeTypes}
			onNodesChange={onNodesChange}
			edges={edges}
			onEdgesChange={onEdgesChange}
			edgeTypes={edgeTypes}
			fitView
			minZoom={0.5}
			maxZoom={4}
		>
			<Background color="#141414" />
			<MiniMap />
			<Controls />
		</ReactFlow>
	);
}
