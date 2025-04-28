import { Background, Controls, Edge, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import {
	RegionalTournament,
	GslBracketA,
	BracketType
} from "../../LionBracketEngine/src/gsl_afl_bracket/regional_tournament";
import { AppNode } from "../nodes/types";
import { nodeTypes } from "../nodes";
import { edgeTypes } from "../edges";
import { createAflEdges, createAflNodes } from "../brackets/afl_layout.ts";
import { createGslLiteEdges, createGslLiteNodes } from "../brackets/gsl_lite_layout.ts";
import { useEffect, useState } from "react";
import { initializeAFLBracket } from "../../LionBracketEngine/src/util/util.ts";
import { Seed } from "../../LionBracketEngine/src/models/match_record.ts";

const localStorageName = "test";

export default function Regional() {
	const tournament = new RegionalTournament();

	const gslNodesA: AppNode[] = createGslLiteNodes("GSL_A", tournament.gslA, 0, 0);
	const gslNodesB: AppNode[] = createGslLiteNodes("GSL_B", tournament.gslB, 1050 + 100, 0);
	const aflNodes: AppNode[] = createAflNodes("AFL", tournament.afl, 290, 960 + 200);
	const initialNodes = gslNodesA.concat(gslNodesB).concat(aflNodes);

	const gslEdgesA = createGslLiteEdges("GSL_A", tournament.gslA);
	const gslEdgesB = createGslLiteEdges("GSL_B", tournament.gslB);
	const aflEdges = createAflEdges("AFL", tournament.afl);
	const initialEdges: Edge[] = gslEdgesA.concat(gslEdgesB).concat(aflEdges);

	const [gslA, setGslA] = useState(tournament.gslA.getAllMatchNodes());
	const [gslB, setGslB] = useState(tournament.gslB.getAllMatchNodes());
	const [afl, setAfl] = useState(tournament.afl.getAllMatchNodes());

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, , onEdgesChange] = useEdgesState(initialEdges);

	nodes.forEach((node) => {
		if (node.data.bracketId === "GSL_A") {
			node.data.updateFun = setGslA;
		}
		if (node.data.bracketId === "GSL_B") {
			node.data.updateFun = setGslB;
		}
		if (node.data.bracketId === "AFL") {
			node.data.updateFun = setAfl;
		}
	});

	useEffect(() => {
		tournament.gslA.buildBracket(gslA);
		tournament.gslB.buildBracket(gslB);
		tournament.afl.clearAllMatchRecords();

		// [1, 3, 5, 7]
		const GSL_A_results = tournament.gslA.getPromoted();
		// [2, 4, 6, 8]
		const GSL_B_results = tournament.gslB.getPromoted();

		const promotedSeeds: (Seed | undefined)[] = GSL_A_results.flatMap((seed, index) => [seed, GSL_B_results[index]]);
		initializeAFLBracket(promotedSeeds, tournament.afl, 0, 3, "UpperQuarterFinal1");
		initializeAFLBracket(promotedSeeds, tournament.afl, 1, 2, "UpperQuarterFinal2");
		initializeAFLBracket(promotedSeeds, tournament.afl, 4, 7, "LowerBracketRound1");
		initializeAFLBracket(promotedSeeds, tournament.afl, 5, 6, "LowerBracketRound2");

		setAfl(tournament.afl.getAllMatchNodes())
	}, [gslA, gslB]);

	useEffect(() => {
		tournament.gslA.buildBracket(gslA);
		tournament.gslB.buildBracket(gslB);
		tournament.afl.buildBracket(afl)

		const gslNodesA: AppNode[] = createGslLiteNodes("GSL_A", tournament.gslA, 0, 0);
		const gslNodesB: AppNode[] = createGslLiteNodes("GSL_B", tournament.gslB, 1050 + 100, 0);
		const aflNodes: AppNode[] = createAflNodes("AFL", tournament.afl, 290, 960 + 200);
		const initialNodes = gslNodesA.concat(gslNodesB).concat(aflNodes);

		setNodes(initialNodes);
	}, [afl]);

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
			<Background color="#141414"/>
			<Controls showInteractive={false}/>
		</ReactFlow>
	);
}
