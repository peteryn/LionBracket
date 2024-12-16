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

import { createSwissNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { SwissBracket } from "../BracketLion/SwissBracket";
import { deserializeStoredBracket, serializeBracket } from "./helper/serializer";

export const globalSwiss: SwissBracket = new SwissBracket();
const swissData = deserializeStoredBracket();
if (swissData) {
	console.log(swissData);
	globalSwiss.data = swissData;
}

serializeBracket(globalSwiss.data);

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
