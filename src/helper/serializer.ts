import { levelOrderTraversal } from "../../LionBracketEngine/src/util/util";
import { RoundNode } from "../../LionBracketEngine/src/models/round_node";
import { AflBracket, AflMatchNode, AflNodeNames } from "../../LionBracketEngine/src/afl_bracket/afl_bracket";
import { Bracket } from "../../LionBracketEngine/src/models/bracket.ts";
import { GslLiteMatchNode } from "../../LionBracketEngine/src/gsl_bracket/gsl_lite_bracket.ts";
import { BracketNode } from "../../LionBracketEngine/src/models/bracket_node.ts";
import { RegionalTournament } from "../../LionBracketEngine/src/tournaments/regional_tournament.ts";

type SwissBracketStorage = {
	roundNodes: [string, RoundNode][];
};

export function serializeSwissBracket(rootRound: RoundNode, bracketId: string) {
	const rootRoundCopy = structuredClone(rootRound);
	const roundNodes: Map<string, RoundNode> = new Map();
	levelOrderTraversal(rootRoundCopy, (node) => {
		roundNodes.set(node.name, node);
	});
	const roundNodeEntries = Array.from(roundNodes.entries());
	roundNodeEntries.forEach(([, roundNode]) => {
		roundNode.upperRound = undefined;
		roundNode.lowerRound = undefined;
	});
	const serializedBracket: SwissBracketStorage = {
		roundNodes: roundNodeEntries,
	};
	localStorage.setItem(bracketId, JSON.stringify(serializedBracket));
}

export function deserializeStoredSwissBracket(bracketId: string) {
	const serializedBracketString = localStorage.getItem(bracketId);
	let rootRoundResult: RoundNode | undefined;
	if (serializedBracketString) {
		const swissBracket: SwissBracketStorage = JSON.parse(serializedBracketString);
		const roundNodes = new Map(swissBracket.roundNodes);

		const storedRootRound = roundNodes.get("0-0");
		const storedRound2Upper = roundNodes.get("1-0");
		const storedRound2Lower = roundNodes.get("0-1");
		const storedRound3Upper = roundNodes.get("2-0");
		const storedRound3Middle = roundNodes.get("1-1");
		const storedRound3Lower = roundNodes.get("0-2");
		const storedRound4Upper = roundNodes.get("2-1");
		const storedRound4Lower = roundNodes.get("1-2");
		const storedRound5 = roundNodes.get("2-2");

		if (
			storedRootRound &&
			storedRound2Upper &&
			storedRound2Lower &&
			storedRound3Upper &&
			storedRound3Middle &&
			storedRound3Lower &&
			storedRound4Upper &&
			storedRound4Lower &&
			storedRound5
		) {
			const rootRound: RoundNode = storedRootRound;
			const round2Upper: RoundNode = storedRound2Upper;
			const round2Lower: RoundNode = storedRound2Lower;
			const round3Upper: RoundNode = storedRound3Upper;
			const round3Middle: RoundNode = storedRound3Middle;
			const round3Lower: RoundNode = storedRound3Lower;
			const round4Upper: RoundNode = storedRound4Upper;
			const round4Lower: RoundNode = storedRound4Lower;
			const round5: RoundNode = storedRound5;

			rootRound.upperRound = round2Upper;
			rootRound.lowerRound = round2Lower;

			round2Upper.upperRound = round3Upper;
			round2Upper.lowerRound = round3Middle;
			round2Lower.upperRound = round3Middle;
			round2Lower.lowerRound = round3Lower;

			round3Upper.upperRound = undefined;
			round3Upper.lowerRound = round4Upper;
			round3Middle.upperRound = round4Upper;
			round3Middle.lowerRound = round4Lower;
			round3Lower.upperRound = round4Lower;
			round3Lower.lowerRound = undefined;

			round4Upper.upperRound = undefined;
			round4Upper.lowerRound = round5;
			round4Lower.upperRound = round5;
			round4Lower.lowerRound = undefined;

			rootRoundResult = rootRound;
		}
	}

	return rootRoundResult;
}

export function serializeAflBracket(aflBracket: AflBracket, bracketId: string) {
	const bracketNodes = aflBracket.getAllMatchNodes();
	const cloned = structuredClone(bracketNodes);
	cloned.forEach((node) => {
		node.upperRound = undefined;
		node.lowerRound = undefined;
	});

	localStorage.setItem(bracketId, JSON.stringify(cloned));
}

export function deserializeStoredAflBracket(bracketId: string) {
	const storedNodes = localStorage.getItem(bracketId);
	let resultNodes: AflMatchNode[] | undefined;
	if (storedNodes) {
		resultNodes = JSON.parse(storedNodes);
		// fix for old format that used camel-cased node names
		if (bracketId === "aflb") {
			resultNodes?.forEach((node) => {
				node.name = node.name.charAt(0).toUpperCase() + node.name.slice(1) as AflNodeNames;
			});
		}
	}
	return resultNodes;
}

export function serializeBracket<NodeNames extends string>(bracket: Bracket<NodeNames>) {
	const bracketNodes = bracket.getAllMatchNodes();
	const cloned = structuredClone(bracketNodes);
	cloned.forEach((node) => {
		node.upperRound = undefined;
		node.lowerRound = undefined;
	});
}

function clearRefs(node: BracketNode) {
	node.upperRound = undefined;
	node.lowerRound = undefined;
}

export function serializeRegionalTournament(tournament: RegionalTournament, localStorageName: string) {
	const gslA = structuredClone(tournament.gslA.getAllMatchNodes());
	gslA.forEach(clearRefs);
	const gslB = structuredClone(tournament.gslB.getAllMatchNodes());
	gslB.forEach(clearRefs);
	const afl = structuredClone(tournament.afl.getAllMatchNodes());
	afl.forEach(clearRefs);

	const nodes: [gslA: GslLiteMatchNode[], gslB: GslLiteMatchNode[], afl: AflMatchNode[]] = [
		gslA, gslB, afl
	];

	localStorage.setItem(localStorageName, JSON.stringify(nodes));
}

export function deserializeRegionalTournament(tournament: RegionalTournament, localStorageName: string) {
	const storedNodes = localStorage.getItem(localStorageName);
	let result: [gslA: GslLiteMatchNode[], gslB: GslLiteMatchNode[], afl: AflMatchNode[]] | undefined;
	if (storedNodes) {
		result = JSON.parse(storedNodes);
		tournament.gslA.buildBracket(result![0]);
		tournament.gslB.buildBracket(result![1]);
		tournament.afl.buildBracket(result![2]);
	}
}

