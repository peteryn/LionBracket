import { useEffect, useState } from "react";
import {
	ReactFlow,
	Background,
	Controls,
	useNodesState,
	useEdgesState,
	Panel,
} from "@xyflow/react";
import "@xyflow/react/dist/base.css";

import { SwissBracketFlow } from "../../../LionBracket/LionBracketEngine/src/swiss_bracket/swiss_backet_flow";
import { SwissBracketFlow8Apart } from "../../../LionBracket/LionBracketEngine/src/swiss_bracket/swiss_bracket_flow_buchholz";

import { createAFLNodes, createSwissNodes, nodeTypes } from "./birmingham-nodes";
import { initialEdges, edgeTypes } from "./birmingham-edges";
import {
	deserializeStoredAflBracket,
	deserializeStoredSwissBracket,
	serializeAflBracket,
	serializeSwissBracket,
} from "../helper/serializer";
import { AFLBracketFlow } from "../../../LionBracketEngine/src/afl_bracket/afl_bracket_flow";
import { populateMatchRecord } from "../../../LionBracketEngine/src/util/util";
import { Seed } from "../../../LionBracketEngine/src/models/match_record";

export const useAFLSerialization = true;

export default function Birmingham() {
	let globalSwiss: SwissBracketFlow = new SwissBracketFlow8Apart(16, 3);
	const rootRound = deserializeStoredSwissBracket("sb");
	if (rootRound) {
		globalSwiss.rootRound = rootRound;
	}
	serializeSwissBracket(globalSwiss.rootRound, "sb");
	const [swissB, setSwissB] = useState(globalSwiss.rootRound);

	let globalAFL: AFLBracketFlow = new AFLBracketFlow(false);
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

	const updateAFL = (seeds: Seed[]) => {
		globalAFL.clearAllMatchRecords();
		populateMatchRecord(seeds, globalAFL, 0, 3, "upperQuarterFinal1");
		populateMatchRecord(seeds, globalAFL, 1, 2, "upperQuarterFinal2");
		populateMatchRecord(seeds, globalAFL, 4, 7, "lowerBracketRound1");
		populateMatchRecord(seeds, globalAFL, 5, 6, "lowerBracketRound2");
		const nodeList = globalAFL.getAllMatchNodes();
		const cloned = structuredClone(nodeList);
		setAflB(cloned);
	};

	// for some reason this code must run after useNodesState
	nodes.forEach((node) => {
		if ("updateSwissFun" in node.data) {
			node.data.updateSwissFun = setSwissB;
			node.data.updatePromotedBracket = updateAFL;
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
		globalAFL = new AFLBracketFlow(false);
		setSwissB(globalSwiss.rootRound);
		setAflB(globalAFL.getAllMatchNodes());
		serializeSwissBracket(globalSwiss.rootRound, "sb");
		serializeAflBracket(globalAFL, "aflb");
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
			minZoom={0.3}
			maxZoom={4}
		>
			<Background color="#141414" />
			<Controls showInteractive={false} />
			<Panel position="bottom-center" className="reset-panel">
				<button onClick={resetBracket} className="bourgeois ">
					RESET
				</button>
			</Panel>
			<Panel position="bottom-right" className="bourgeois">
				<a href="https://github.com/peteryn/LionBracket/issues" className="report-link">
					Report an Issue
				</a>
			</Panel>
		</ReactFlow>
	);
}
