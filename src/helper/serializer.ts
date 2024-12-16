import { SwissBracketData } from "../../BracketLion/SwissBracketData";

export function serializeBracket(swissBracketData: SwissBracketData) {
	localStorage.setItem("rootRound", JSON.stringify(swissBracketData));
}

export function deserializeStoredBracket() {
	const storedRootRound = localStorage.getItem("rootRound");
    let swissBracketData: SwissBracketData | undefined;

	if (storedRootRound) {
		swissBracketData = JSON.parse(storedRootRound);
	}

    return swissBracketData
}
