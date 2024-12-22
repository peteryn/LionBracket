import { SwissBracketData } from "../../BracketLion/src/swiss_bracket/swiss_bracket_data";
import { levelOrderTraversal } from "../../BracketLion/src/swiss_bracket/swiss_bracket";
import { RoundNode } from "../../BracketLion/src/models/round_node";

type swissBracketStorage = {
	bracketId: string;
	roundNodes: [string, RoundNode][];
};

export function serializeBracket(swissBracketData: SwissBracketData) {
	const bracketId = swissBracketData.bracketId;
	const rootRoundCopy = structuredClone(swissBracketData.rootRound);
	const roundNodes: Map<string, RoundNode> = new Map();
	levelOrderTraversal(rootRoundCopy, (node) => {
		roundNodes.set(node.name, node);
	});
	const roundNodeEntries = Array.from(roundNodes.entries());
	roundNodeEntries.forEach(([, roundNode]) => {
		roundNode.winningRound = undefined;
		roundNode.losingRound = undefined;
	});
	const serializedBracket: swissBracketStorage = {
		bracketId: swissBracketData.bracketId,
		roundNodes: roundNodeEntries,
	};
	localStorage.setItem(bracketId, JSON.stringify(serializedBracket));
}

export function deserializeStoredBracket(bracketId: string) {
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

			rootRound.winningRound = round2Upper;
			rootRound.losingRound = round2Lower;

			round2Upper.winningRound = round3Upper;
			round2Upper.losingRound = round3Middle;
			round2Lower.winningRound = round3Middle;
			round2Lower.losingRound = round3Lower;

			round3Upper.winningRound = undefined;
			round3Upper.losingRound = round4Upper;
			round3Middle.winningRound = round4Upper;
			round3Middle.losingRound = round4Lower;
			round3Lower.winningRound = round4Lower;
			round3Lower.losingRound = undefined;

			round4Upper.winningRound = undefined;
			round4Upper.losingRound = round5;
			round4Lower.winningRound = round5;
			round4Lower.losingRound = undefined;

			rootRoundResult = rootRound;
		}
	}

	return rootRoundResult;
}
