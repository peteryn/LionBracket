import { RoundNode } from "../../BracketLion/models";
import { levelOrderTraversal } from "../../BracketLion/SwissBracket";
import { SwissBracketData } from "../../BracketLion/SwissBracketData";

export function serializeBracket(swissBracketData: SwissBracketData) {
	levelOrderTraversal(swissBracketData.rootRound, (node) => {
		localStorage.setItem(node.name, JSON.stringify(node));
	});

	// localStorage.setItem("rootRound", JSON.stringify(swissBracketData));
	// TODO, basically, nodes with 2 parents are not being serialized correctly
	// we need to manually store each round node when serializing
	// then when deserializing, we need to manually construct the graph again
	//
	// right now, 2-0 and 0-2 are updating correctly bc they have only one parent
	// 1-1 can't update because there are actually 2 1-1 references in memory since it
	// has 2 parents.
}

export function deserializeStoredBracket() {
	const storedRootRound = localStorage.getItem("0-0");
	const storedRound2Upper = localStorage.getItem("1-0");
	const storedRound2Lower = localStorage.getItem("0-1");
	const storedRound3Upper = localStorage.getItem("2-0");
	const storedRound3Middle = localStorage.getItem("1-1");
	const storedRound3Lower = localStorage.getItem("0-2");
	const storedRound4Upper = localStorage.getItem("2-1");
	const storedRound4Lower = localStorage.getItem("1-2");
	const storedRound5 = localStorage.getItem("2-2");

	let rootRoundResult: RoundNode | undefined;
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
		const rootRound: RoundNode = JSON.parse(storedRootRound);
		const round2Upper: RoundNode = JSON.parse(storedRound2Upper);
		const round2Lower: RoundNode = JSON.parse(storedRound2Lower);
		const round3Upper: RoundNode = JSON.parse(storedRound3Upper);
		const round3Middle: RoundNode = JSON.parse(storedRound3Middle);
		const round3Lower: RoundNode = JSON.parse(storedRound3Lower);
		const round4Upper: RoundNode = JSON.parse(storedRound4Upper);
		const round4Lower: RoundNode = JSON.parse(storedRound4Lower);
		const round5: RoundNode = JSON.parse(storedRound5);

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

	return rootRoundResult;
}
