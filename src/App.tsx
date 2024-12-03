import { useCallback, useEffect, useState } from "react";
import {
	ReactFlow,
	Background,
	Controls,
	MiniMap,
	addEdge,
	useNodesState,
	useEdgesState,
	applyEdgeChanges,
	applyNodeChanges,
	type OnConnect,
	Position,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

export const globalSwiss: SwissBracket = new SwissBracket();

import { createSwissNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { SwissBracket } from "../BracketLion/SwissBracket";

export default function App() {
	const [swissB, setSwissB] = useState(globalSwiss.data);

	const initialNodes = createSwissNodes(globalSwiss);

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	nodes.map((node) => {
		node.data.parentSwissBracket = swissB;
	});
	nodes.forEach((node) => (node.data.updateSwissFun = setSwissB));

	useEffect(() => {
		console.log("in use effect");
		const updatedNodes = createSwissNodes(globalSwiss);
		setNodes(updatedNodes);
		console.log();
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
			minZoom={1}
			maxZoom={4}
		>
			<Background />
			<MiniMap />
			<Controls />
		</ReactFlow>
	);
}
