import { useEffect, useState } from "react";
import {
	ReactFlow,
	Background,
	Controls,
	MiniMap,
	useNodesState,
	useEdgesState,
	Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/base.css";

import { SwissBracketFlow } from "../LionBracketEngine/src/swiss_bracket/swiss_backet_flow";
import { SwissBracketFlow8Apart } from "../LionBracketEngine/src/swiss_bracket/swiss_bracket_flow_8apart";

import { createAFLNodes, createSwissNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import {
	deserializeStoredAflBracket,
	deserializeStoredSwissBracket,
	serializeAflBracket,
	serializeSwissBracket,
} from "./helper/serializer";
import { AFLBracketFlow } from "../LionBracketEngine/src/afl_bracket/afl_bracket_flow";

export const useAFLSerialization = true;

export default function App() {
	let globalSwiss: SwissBracketFlow = new SwissBracketFlow8Apart(16, 3);
	const rootRound = deserializeStoredSwissBracket("sb");
	if (rootRound) {
		globalSwiss.rootRound = rootRound;
	}
	serializeSwissBracket(globalSwiss.rootRound, "sb");
	const [swissB, setSwissB] = useState(globalSwiss.rootRound);

	const globalAFL: AFLBracketFlow = new AFLBracketFlow();
	if (useAFLSerialization) {
		const aflMatchNodes = deserializeStoredAflBracket("aflb");
		if (aflMatchNodes) {
			globalAFL.buildBracket(aflMatchNodes);
		}
		serializeAflBracket(globalAFL, "aflb");
	}
	const [aflB, setAflB] = useState(globalAFL.getAllMatchNodes());

	const swissNodes = createSwissNodes(globalSwiss);
	const aflNodes = createAFLNodes(globalAFL);
	const initialNodes = swissNodes.concat(aflNodes);

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, , onEdgesChange] = useEdgesState(initialEdges);

	// for some reason this code must run after useNodesState
	nodes.forEach((node) => {
		// TODO: make it so that only nodes that require this are set
		if ("updateSwissFun" in node.data) {
			node.data.updateSwissFun = setSwissB;
		}
		if ("updateFun" in node.data) {
			node.data.updateFun = setAflB;
		}
	});

	useEffect(() => {
		globalAFL.buildBracket(aflB);
		if (useAFLSerialization) {
			serializeAflBracket(globalAFL, "aflb");
		}
		const swissNodes = createSwissNodes(globalSwiss);
		const aflNodes = createAFLNodes(globalAFL);
		const updatedNodes = swissNodes.concat(aflNodes);
		setNodes(updatedNodes);
	}, [swissB, aflB, setNodes]);

	const resetBracket = () => {
		globalSwiss = new SwissBracketFlow8Apart(16, 3);
		setSwissB(globalSwiss.rootRound);
		serializeSwissBracket(globalSwiss.rootRound, "sb");
	};

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
			<Panel position="bottom-center" className="reset-panel">
				<button onClick={resetBracket}>Reset</button>
			</Panel>
		</ReactFlow>
	);
}
