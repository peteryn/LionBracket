import { Background, Controls, Edge, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import { RegionalTournament, GslBracketA } from "../../LionBracketEngine/src/gsl_afl_bracket/regional_tournament";
import { AppNode } from "../nodes/types";
import { nodeTypes } from "../nodes";
import { edgeTypes } from "../edges";
import { createAflEdges, createAflNodes } from "../brackets/afl_layout.ts";
import { createGslLiteEdges, createGslLiteNodes } from "../brackets/gsl_lite_layout.ts";

export default function Regional() {
	const tournament = new RegionalTournament();

	const gslNodesA: AppNode[] = createGslLiteNodes("GSL_A", tournament.gslA, 0, 0);
	const gslNodesB: AppNode[] = createGslLiteNodes("GSL_B", tournament.gslB, 1050 + 100, 0);
	const aflNodes: AppNode[] = createAflNodes(tournament.afl, 290, 960 + 200);
	const initialNodes = gslNodesA.concat(gslNodesB).concat(aflNodes);

	const gslEdgesA = createGslLiteEdges("GSL_A", tournament.gslA);
	const gslEdgesB = createGslLiteEdges("GSL_B", tournament.gslB);
	const aflEdges = createAflEdges(tournament.afl);
	const initialEdges: Edge[] = gslEdgesA.concat(gslEdgesB).concat(aflEdges);

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, , onEdgesChange] = useEdgesState(initialEdges);

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
