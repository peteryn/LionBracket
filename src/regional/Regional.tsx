import { Background, Controls, Edge, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import { RegionalTournament } from "../../LionBracketEngine/src/gsl_afl_bracket/regional_tournament";
import { AppNode } from "../nodes/types";
import { nodeTypes } from "../nodes";
import { edgeTypes } from "../edges";
import { createAflEdges, createAflNodes } from "../brackets/afl_layout.ts";
import { createGslLiteEdges, createGslLiteNodes } from "../brackets/gsl_lite_layout.ts";
import { useEffect, useState } from "react";
import { initializeAFLBracket } from "../../LionBracketEngine/src/util/util.ts";
import { Seed } from "../../LionBracketEngine/src/models/match_record.ts";
import { deserializeRegionalTournament, serializeRegionalTournament } from "../helper/serializer.ts";
import { Team } from "../nodes/matchNodes/MatchNodeType.ts";

const localStorageName = "regionalTest";

export default function Regional({ teams }: { teams: Team[] }) {
	const tournament = new RegionalTournament();

	deserializeRegionalTournament(tournament, localStorageName);
	serializeRegionalTournament(tournament, localStorageName);

	const initialNodes = getAllNodes(tournament, teams);

	const gslEdgesA = createGslLiteEdges("GSL_A", tournament.gslA);
	const gslEdgesB = createGslLiteEdges("GSL_B", tournament.gslB);
	const aflEdges = createAflEdges("AFL", tournament.afl);
	const initialEdges: Edge[] = [...gslEdgesA, ...gslEdgesB, ...aflEdges];

	const [gslA, setGslA] = useState(tournament.gslA.getAllMatchNodes());
	const [gslB, setGslB] = useState(tournament.gslB.getAllMatchNodes());
	const [afl, setAfl] = useState(tournament.afl.getAllMatchNodes());

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, , onEdgesChange] = useEdgesState(initialEdges);

	const promoteFun = () => {
		tournament.afl.clearAllMatchRecords();
		tournament.gslA.buildBracket(gslA);
		tournament.gslB.buildBracket(gslB);

		// [1, 3, 5, 7]
		const GSL_A_results = tournament.gslA.getPromoted();
		// [2, 4, 6, 8]
		const GSL_B_results = tournament.gslB.getPromoted();

		const promotedSeeds: (Seed | undefined)[] = GSL_A_results.flatMap((seed, index) => [seed, GSL_B_results[index]]);
		initializeAFLBracket(promotedSeeds, tournament.afl, 0, 3, "UpperQuarterFinal1");
		initializeAFLBracket(promotedSeeds, tournament.afl, 1, 2, "UpperQuarterFinal2");
		initializeAFLBracket(promotedSeeds, tournament.afl, 4, 7, "LowerBracketRound1");
		initializeAFLBracket(promotedSeeds, tournament.afl, 5, 6, "LowerBracketRound2");

		setAfl(tournament.afl.getAllMatchNodes());
	};

	nodes.forEach((node) => {
		if (node.data.bracketId === "GSL_A") {
			node.data.updateFun = setGslA;
			node.data.promoteFun = promoteFun;
		}
		if (node.data.bracketId === "GSL_B") {
			node.data.updateFun = setGslB;
			node.data.promoteFun = promoteFun;
		}
		if (node.data.bracketId === "AFL") {
			node.data.updateFun = setAfl;
		}
	});

	useEffect(() => {
		tournament.gslA.buildBracket(gslA);
	}, [gslA]);

	useEffect(() => {
		tournament.gslB.buildBracket(gslB);
	}, [gslB]);

	useEffect(() => {
		tournament.gslA.buildBracket(gslA);
		tournament.gslB.buildBracket(gslB);
		tournament.afl.buildBracket(afl);
		serializeRegionalTournament(tournament, localStorageName);

		const initialNodes = getAllNodes(tournament, teams);

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

function getAllNodes(tournament: RegionalTournament, teams: Team[]) {
	const gslNodesA: AppNode[] = createGslLiteNodes("GSL_A", tournament.gslA, 0, 0, teams);
	const gslNodesB: AppNode[] = createGslLiteNodes("GSL_B", tournament.gslB, 1050 + 100, 0, teams);
	const aflNodes: AppNode[] = createAflNodes("AFL", tournament.afl, 290, 960, teams);
	return [...gslNodesA, ...gslNodesB, ...aflNodes];
}