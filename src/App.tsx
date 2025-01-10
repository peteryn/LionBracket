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
import { AFLBracketFlow } from "../LionBracketEngine/src/afl_bracket/afl_bracket_flow";

import { createSwissNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { deserializeStoredBracket, serializeBracket } from "./helper/serializer";
import { MatchNode } from "../LionBracketEngine/src/models/match_node";

export let globalSwiss: SwissBracketFlow = new SwissBracketFlow(16, 3);
const rootRound = deserializeStoredBracket("sb");
if (rootRound) {
	globalSwiss.rootRound = rootRound;
}
serializeBracket(globalSwiss.rootRound, "sb");

export let globalAFL = new AFLBracketFlow();
export type aflRoot = {
	upperQuarterFinal1: MatchNode;
	upperQuarterFinal2: MatchNode;
	lowerBracketRound1: MatchNode;
	lowerBracketRound2: MatchNode;
};

export default function App() {
	const aflData: aflRoot = {
		upperQuarterFinal1: globalAFL.upperQuarterFinal1,
		upperQuarterFinal2: globalAFL.upperQuarterFinal2,
		lowerBracketRound1: globalAFL.lowerBracketRound1,
		lowerBracketRound2: globalAFL.lowerBracketRound2,
	};
	const [aflB, setAFLB] = useState(aflData);

	const initialNodes = [];
	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, , onEdgesChange] = useEdgesState(initialEdges);
	// const [swissB, setSwissB] = useState(globalSwiss.rootRound);

	// const initialNodes = createSwissNodes(globalSwiss);

	// const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	// const [edges, , onEdgesChange] = useEdgesState(initialEdges);

	// nodes.forEach((node) => (node.data.updateSwissFun = setSwissB));

	// useEffect(() => {
	// 	const updatedNodes = createSwissNodes(globalSwiss);
	// 	setNodes(updatedNodes);
	// }, [swissB, setNodes]);

	// const resetBracket = () => {
	// 	globalSwiss = new SwissBracketFlow(16, 3);
	// 	setSwissB(globalSwiss.rootRound);
	// 	serializeBracket(globalSwiss.rootRound, "sb");
	// };

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
			{/* <Panel position="bottom-center" className="reset-panel">
				<button onClick={resetBracket}>Reset</button>
			</Panel> */}
		</ReactFlow>
	);
}
