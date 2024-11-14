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

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";


export default function App() {
	// const initialNodes = [
	// 	{
	// 		id: "-1",
	// 		data: { label: "Hello" },
	// 		position: { x: -200, y: 0 },
	// 	},
	// 	// {
	// 	// 	id: "2",
	// 	// 	data: { label: "World" },
	// 	// 	position: { x: 100, y: 100 },
	// 	// },
	// ];

	// let idVal = 0;
	// let xVal = 0;
	// let yVal = 0;
	// swiss.levelOrderTraversal(swiss.rootRound, undefined, (level) => {
	// 	yVal = 0;
	// 	level.forEach((node) => {
	// 		const obj = {
	// 			id: idVal.toString(),
	// 			data: { label: node.name },
	// 			position: { x: xVal, y: yVal },
	// 		};
	// 		idVal++;
	// 		yVal += 100;
	// 		initialNodes.push(obj);
	// 	});
	// 	xVal += 200;
	// });

	const [nodes, setNodes] = useState(initialNodes);
	const [edges, setEdges] = useState(initialEdges);

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
