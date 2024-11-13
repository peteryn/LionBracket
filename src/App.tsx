import { useCallback } from "react";
import {
	ReactFlow,
	Background,
	Controls,
	MiniMap,
	addEdge,
	useNodesState,
	useEdgesState,
	type OnConnect,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { SwissBracket } from "../BracketLion/SwissBracket";

const swiss = new SwissBracket();

export default function App() {
	const [nodes, , onNodesChange] = useNodesState(initialNodes);
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const onConnect: OnConnect = useCallback(
		(connection) => setEdges((edges) => addEdge(connection, edges)),
		[setEdges]
	);

	const removeEdge = useCallback(
		(edgeId: string) => {
			setEdges((edges) => edges.filter((edge) => edge.id !== edgeId));
		},
		[setEdges]
	);

	for (let i = 0; i < nodes.length; i++) {
		nodes[i].data.update = onConnect;
		nodes[i].data.remove = removeEdge;
	}

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
		>
			<Background />
			<MiniMap />
			<Controls />
		</ReactFlow>
	);
}
