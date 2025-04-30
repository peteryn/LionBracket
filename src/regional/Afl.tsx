import { AflBracket } from "../../LionBracketEngine/src/afl_bracket/afl_bracket.ts";
import { createAflEdges, createAflNodes } from "../brackets/afl_layout.ts";
import { useEffect, useState } from "react";
import { Background, Controls, Panel, ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import { nodeTypes } from "../nodes";
import { edgeTypes } from "../edges";
import { deserializeStoredAflBracket, serializeAflBracket } from "../helper/serializer.ts";
import { Team } from "../nodes/matchNodes/MatchNodeType.ts";

const localStorageName = "test";

export default function Afl({ teams }: { teams: Team[] }) {
	const aflBracket = new AflBracket(true);

	const aflMatchNodes = deserializeStoredAflBracket(localStorageName);
	if (aflMatchNodes) {
		aflBracket.buildBracket(aflMatchNodes);
	}
	serializeAflBracket(aflBracket, localStorageName);

	const initialNodes = createAflNodes("afl", aflBracket, 0, 0, teams);
	const initialEdges = createAflEdges("afl", aflBracket);

	const [afl, setAfl] = useState(aflBracket.getAllMatchNodes());

	const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
	const [edges, , onEdgesChange] = useEdgesState(initialEdges);

	nodes.forEach(node => {
		node.data.updateFun = setAfl;
	});

	useEffect(() => {
		aflBracket.buildBracket(afl);
		const aflNodes = createAflNodes("afl", aflBracket, 0, 0, teams);
		setNodes(aflNodes);
		serializeAflBracket(aflBracket, localStorageName);
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