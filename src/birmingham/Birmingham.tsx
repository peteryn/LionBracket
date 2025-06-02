// import { useEffect, useState } from "react";
// import {
// 	ReactFlow,
// 	Background,
// 	Controls,
// 	useNodesState,
// 	useEdgesState,
// 	Panel,
// } from "@xyflow/react";
// import "@xyflow/react/dist/base.css";

// import { SwissBracketFlow } from "../../LionBracketEngine/src/swiss_bracket/swiss_backet_flow.ts";
// import { SwissBracketFlow8Apart } from "../../LionBracketEngine/src/swiss_bracket/swiss_bracket_flow_buchholz.ts";

// import { createSwissNodes } from "./birmingham-nodes";
// import { nodeTypes } from "../nodes";
// import { initialEdges } from "./birmingham-edges";
// import { edgeTypes } from "../edges";
// import {
// 	deserializeStoredAflBracket,
// 	deserializeStoredSwissBracket,
// 	serializeAflBracket,
// 	serializeSwissBracket,
// } from "../helper/serializer";
// import { AflBracket } from "../../LionBracketEngine/src/afl_bracket/afl_bracket";
// import { initializeAFLBracket } from "../../LionBracketEngine/src/util/util";
// import { Seed } from "../../LionBracketEngine/src/models/match_record";

// import { createAflNodes } from "../layouts/aflLayout.ts";
// import ReportButton from "../components/ReportButton.tsx";
// import ResetButton from "../components/ResetButton.tsx";
// import { major1Teams } from "../helper/teamTranslator.ts";

// export const useAFLSerialization = true;

// export default function Birmingham() {
// 	let globalSwiss: SwissBracketFlow = new SwissBracketFlow8Apart(16, 3);
// 	const rootRound = deserializeStoredSwissBracket("sb");
// 	if (rootRound) {
// 		globalSwiss.rootRound = rootRound;
// 	}
// 	serializeSwissBracket(globalSwiss.rootRound, "sb");
// 	const [swissB, setSwissB] = useState(globalSwiss.rootRound);

// 	let globalAFL: AflBracket = new AflBracket(false);
// 	if (useAFLSerialization) {
// 		const aflMatchNodes = deserializeStoredAflBracket("aflb");
// 		if (aflMatchNodes) {
// 			globalAFL.buildBracket(aflMatchNodes);
// 		}
// 		serializeAflBracket(globalAFL, "aflb");
// 	}
// 	const [aflB, setAflB] = useState(globalAFL.getAllMatchNodes());

// 	const swissNodes = createSwissNodes(globalSwiss);
// 	const aflNodes = createAflNodes("aflb", globalAFL, 194, 1100, major1Teams);
// 	const initialNodes = swissNodes.concat(aflNodes);

// 	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
// 	const [edges, , onEdgesChange] = useEdgesState(initialEdges);

// 	const updateAFL = (seeds: Seed[]) => {
// 		globalAFL.clearAllMatchRecords();
// 		initializeAFLBracket(seeds, globalAFL, 0, 3, "UpperQuarterFinal1");
// 		initializeAFLBracket(seeds, globalAFL, 1, 2, "UpperQuarterFinal2");
// 		initializeAFLBracket(seeds, globalAFL, 4, 7, "LowerBracketRound1");
// 		initializeAFLBracket(seeds, globalAFL, 5, 6, "LowerBracketRound2");
// 		const nodeList = globalAFL.getAllMatchNodes();
// 		const cloned = structuredClone(nodeList);
// 		setAflB(cloned);
// 	};

// 	// for some reason this code must run after useNodesState
// 	nodes.forEach((node) => {
// 		if ("updateSwissFun" in node.data) {
// 			node.data.updateSwissFun = setSwissB;
// 			node.data.updatePromotedBracket = updateAFL;
// 		}
// 		if ("updateFun" in node.data) {
// 			node.data.updateFun = setAflB;
// 		}
// 	});

// 	useEffect(() => {
// 		globalAFL.buildBracket(aflB);
// 		if (useAFLSerialization) {
// 			serializeAflBracket(globalAFL, "aflb");
// 		}
// 		const swissNodes = createSwissNodes(globalSwiss);
// 		const aflNodes = createAflNodes("aflb", globalAFL, 194, 1100, major1Teams);
// 		const updatedNodes = swissNodes.concat(aflNodes);
// 		setNodes(updatedNodes);
// 	}, [swissB, aflB, setNodes]);

// 	const resetBracket = () => {
// 		globalSwiss = new SwissBracketFlow8Apart(16, 3);
// 		globalAFL = new AflBracket(false);
// 		setSwissB(globalSwiss.rootRound);
// 		setAflB(globalAFL.getAllMatchNodes());
// 		serializeSwissBracket(globalSwiss.rootRound, "sb");
// 		serializeAflBracket(globalAFL, "aflb");
// 	};

// 	return (
// 		<ReactFlow
// 			colorMode="dark"
// 			nodes={nodes}
// 			nodeTypes={nodeTypes}
// 			onNodesChange={onNodesChange}
// 			edges={edges}
// 			onEdgesChange={onEdgesChange}
// 			edgeTypes={edgeTypes}
// 			fitView
// 			minZoom={0.3}
// 			maxZoom={4}
// 		>
// 			<Background color="#141414"/>
// 			<Controls showInteractive={false}/>
// 			<ResetButton resetBracket={resetBracket}></ResetButton>
// 			<ReportButton></ReportButton>
// 		</ReactFlow>
// 	);
// }