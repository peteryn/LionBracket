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

import { createSwissNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { SwissBracket } from "../BracketLion/SwissBracket";

export default function App() {
	const [swissB, setSwissB] = useState(new SwissBracket());
	const [myString, setMyString] = useState("default");

	const initialNodes = createSwissNodes(swissB);

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

	// nodes.forEach((node) => (node.data.parentSwissBracket = swissB));
	nodes.map((node) => {
		node.data.parentSwissBracket = swissB;
	});
	nodes.forEach((node) => (node.data.updateSwissFun = setSwissB));
	nodes.forEach((node) => (node.data.setMyString = setMyString));

	nodes.map((node) => {
		if (node.id === "1-0") {
			node.data.message = myString;
		}
	});

	// useEffect(() => {
	// 	console.log("in use effect");
	// 	setNodes((nds) =>
	// 		nds.map((node) => {
	// 			if (node.id === "1-0") {
	// 				// it's important that you create a new node object
	// 				// in order to notify react flow about the change
	// 				return {
	// 					...node,
	// 					style: {
	// 						...node.style,
	// 					},
	// 				};
	// 			}
	// 			return node;
	// 		})
	// 	);
	// }, [swissB, setNodes, myString]);

	useEffect(() => {
		console.log("in use effect");
		setNodes(createSwissNodes(swissB));
	}, [swissB, setNodes, myString]);


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
