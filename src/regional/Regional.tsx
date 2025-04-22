import { Background, Controls, Edge, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import { RegionalTournament } from "../../LionBracketEngine/src/gsl_afl_bracket/regional_tournament";
import { AppNode } from "../nodes/types";
import { nodeTypes } from "../nodes";
import { edgeTypes } from "../edges";
import { ExitNodeType } from "../nodes/ExitNodeType.ts";
import { AFLBracket, AFLNodeTypes } from "../../LionBracketEngine/src/afl_bracket/afl_bracket.ts";
import { MatchNodeType } from "../nodes/matchNodes/MatchNodeType.ts";
import { GenericMatchNode } from "../../LionBracketEngine/src/models/generic_match_node.ts";
import { createAFLEdges, createAFLNodes } from "../brackets/afl_layout.ts";
// import { createAFLEdges, createAFLNodes } from "../brackets/afl_layout.ts";

export default function Regional() {
	const tournament = new RegionalTournament();

	const GSL_A_nodes: AppNode[] = [];
	const GSL_B_nodes: AppNode[] = [];
	const AFL_nodes: AppNode[] = createAFLNodes(new AFLBracket(true), 0, 0);
	const initialNodes = AFL_nodes;

	const AFL_edges = createAFLEdges(new AFLBracket());
	const initialEdges: Edge[] = AFL_edges;

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
