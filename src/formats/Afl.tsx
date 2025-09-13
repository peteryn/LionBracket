import { AflBracket } from "../../LionBracketEngine/src/afl_bracket/afl_bracket.ts";
import { createAflEdges, createAflNodes } from "../layouts/aflLayout.ts";
import { useEffect, useState } from "react";
import {
	Background,
	Controls,
	Panel,
	ReactFlow,
	useEdgesState,
	useNodesState,
} from "@xyflow/react";
import { nodeTypes } from "../nodes/index.ts";
import { edgeTypes } from "../edges/index.ts";
import {
	deserializeStoredAflBracket,
	serializeAflBracket,
	serializeRegionalTournament,
} from "../helper/serializer.ts";

import { Team } from "../helper/teamTranslator.ts";
import ResetButton from "../components/ResetButton.tsx";
import { BackButton } from "../components/BackButton.tsx";
import ReportButton from "../components/ReportButton.tsx";

const localStorageName = "test";

export default function Afl({ teams, localStorageName }: { teams: Team[], localStorageName: string }) {
	let aflBracket = new AflBracket(true);

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

	nodes.forEach((node) => {
		node.data.updateFun = setAfl;
	});

	useEffect(() => {
		aflBracket.buildBracket(afl);
		const aflNodes = createAflNodes("afl", aflBracket, 0, 0, teams);
		setNodes(aflNodes);
		serializeAflBracket(aflBracket, localStorageName);
	}, [afl]);

	const resetBracket = () => {
		setAfl(new AflBracket(true).getAllMatchNodes())
		serializeAflBracket(aflBracket, localStorageName)
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

			<BackButton />
			<ResetButton resetBracket={resetBracket}></ResetButton>
			<ReportButton />
		</ReactFlow>
	);
}
