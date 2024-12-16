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

import { createSwissNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import { SwissBracket } from "../BracketLion/SwissBracket";
import { clearBracket, deserializeStoredBracket, serializeBracket } from "./helper/serializer";
import { MatchRecord } from "../BracketLion/models";

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
		console.log("in useeffect");
		console.log(globalSwiss.data)
		setNodes(updatedNodes);
	}, [swissB, setNodes]);

	const resetBracket = () => {
		// to reset the bracket we simply set all first round matches to 0-0
		for (let i = 0; i < swissB.rootRound.matches.length; i++) {
			const mr = globalSwiss.getMatchRecord("0-0", i) as MatchRecord;
			mr.lowerTeamWins = 0;
			mr.upperTeamWins = 0;
			globalSwiss.setMatchRecord("0-0", i, mr);
		}
		setSwissB(structuredClone(globalSwiss.data));
		clearBracket(globalSwiss.data);
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
