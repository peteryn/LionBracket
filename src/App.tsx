import { useCallback, useState } from "react";
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

import { initialNodes, nodeTypes, swiss } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";


export default function App() {
	const [swissB, setSwissB] = useState(swiss);

	const [nodes, setNodes, updateNodes] = useNodesState(initialNodes);
	const [edges, setEdges] = useState(initialEdges);

	nodes.forEach(node => node.data.parentSwissBracket = swissB);
	nodes.forEach(node => node.data.updateSwissFun = setSwissB);

	const onNodesChange = useCallback(
		(changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[]
	);
	const onEdgesChange = useCallback(
		(changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[]
	);
	const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

	return (
		<ReactFlow
			colorMode="dark"
			nodes={nodes}
			nodeTypes={nodeTypes}
			onNodesChange={onNodesChange}
			edges={edges}
			edgeTypes={edgeTypes}
			onEdgesChange={onEdgesChange}
			onConnect={onConnect}
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
