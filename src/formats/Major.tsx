import { useEffect, useState } from "react";
import { SwissBracketFlow } from "../../LionBracketEngine/src/swiss_bracket/swiss_backet_flow";
import { SwissBracketFlow8Apart } from "../../LionBracketEngine/src/swiss_bracket/swiss_bracket_flow_buchholz";
import {
	deserializeStoredAflBracket,
	deserializeStoredSwissBracket,
	serializeAflBracket,
	serializeSwissBracket,
} from "../helper/serializer";
import { Team } from "../helper/teamTranslator";
import {
	useNodesState,
	useEdgesState,
	ReactFlow,
	Background,
	Controls,
} from "@xyflow/react";
import { AflBracket } from "../../LionBracketEngine/src/afl_bracket/afl_bracket";
import { Seed } from "../../LionBracketEngine/src/models/match_record";
import { initializeAFLBracket } from "../../LionBracketEngine/src/util/util";
import { createSwissNodes } from "../birmingham/birmingham-nodes";
import ReportButton from "../components/ReportButton";
import ResetButton from "../components/ResetButton";
import { edgeTypes } from "../edges";
import { createAflEdges, createAflNodes } from "../layouts/aflLayout";
import { nodeTypes } from "../nodes";
import { createSwissEdges } from "../birmingham/birmingham-edges";
import { BackButton } from "../components/BackButton";

const useAFLSerialization = true;

export default function Major({
	teams,
	localSwissName,
	localAflName,
}: {
	teams: Team[];
	localSwissName: string;
	localAflName: string;
}) {
	let globalSwiss: SwissBracketFlow = new SwissBracketFlow8Apart(16, 3);
	const rootRound = deserializeStoredSwissBracket(localSwissName);
	if (rootRound) {
		globalSwiss.rootRound = rootRound;
	}
	serializeSwissBracket(globalSwiss.rootRound, localSwissName);
	const [swissB, setSwissB] = useState(globalSwiss.rootRound);
	let globalAFL: AflBracket = new AflBracket(false);
	if (useAFLSerialization) {
		const aflMatchNodes = deserializeStoredAflBracket(localAflName);
		if (aflMatchNodes) {
			globalAFL.buildBracket(aflMatchNodes);
		}
		serializeAflBracket(globalAFL, localAflName);
	}
	const [aflB, setAflB] = useState(globalAFL.getAllMatchNodes());

	const swissNodes = createSwissNodes(globalSwiss, localSwissName, teams);
	const aflNodes = createAflNodes(localAflName, globalAFL, 194, 1100, teams);
	const initialNodes = swissNodes.concat(aflNodes);
	const swissEdges = createSwissEdges();
	const aflEdges = createAflEdges(localAflName, globalAFL);
	const initialEdges = swissEdges.concat(aflEdges);

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, , onEdgesChange] = useEdgesState(initialEdges);

	const updateAFL = (seeds: Seed[]) => {
		globalAFL.clearAllMatchRecords();
		initializeAFLBracket(seeds, globalAFL, 0, 3, "UpperQuarterFinal1");
		initializeAFLBracket(seeds, globalAFL, 1, 2, "UpperQuarterFinal2");
		initializeAFLBracket(seeds, globalAFL, 4, 7, "LowerBracketRound1");
		initializeAFLBracket(seeds, globalAFL, 5, 6, "LowerBracketRound2");
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
			serializeAflBracket(globalAFL, localAflName);
		}
		const swissNodes = createSwissNodes(globalSwiss, localSwissName, teams);
		const aflNodes = createAflNodes(
			localAflName,
			globalAFL,
			194,
			1100,
			teams
		);
		const updatedNodes = swissNodes.concat(aflNodes);
		setNodes(updatedNodes);
	}, [swissB, aflB, setNodes]);

	const resetBracket = () => {
		globalSwiss = new SwissBracketFlow8Apart(16, 3);
		globalAFL = new AflBracket(false);
		setSwissB(globalSwiss.rootRound);
		setAflB(globalAFL.getAllMatchNodes());
		serializeSwissBracket(globalSwiss.rootRound, localSwissName);
		serializeAflBracket(globalAFL, localAflName);
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
			<BackButton/>
			<ResetButton resetBracket={resetBracket}></ResetButton>
			<ReportButton></ReportButton>
		</ReactFlow>
	);
}
