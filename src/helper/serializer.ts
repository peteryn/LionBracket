import { levelOrderTraversal } from "../../LionBracketEngine/src/util/util";
import { RoundNode } from "../../LionBracketEngine/src/models/round_node";

type swissBracketStorage = {
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
	const serializedBracket: swissBracketStorage = {
		roundNodes: roundNodeEntries,
	};
	localStorage.setItem(bracketId, JSON.stringify(serializedBracket));
}

export function deserializeStoredSwissBracket(bracketId: string) {
	const serializedBracketString = localStorage.getItem(bracketId);
	let rootRoundResult: RoundNode | undefined;
	if (serializedBracketString) {
		const swissBracket: swissBracketStorage = JSON.parse(serializedBracketString);
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
