import { SwissBracketData } from "../../BracketLion/SwissBracketData";

export function serializeBracket(swissBracketData: SwissBracketData) {
	localStorage.setItem("rootRound", JSON.stringify(swissBracketData));
    // TODO, basically, nodes with 2 parents are not being serialized correctly
    // we need to manually store each round node when serializing
    // then when deserializing, we need to manually construct the graph again
    // 
    // right now, 2-0 and 0-2 are updating correctly bc they have only one parent
    // 1-1 can't update because there are actually 2 1-1 references in memory since it 
    // has 2 parents. 
}

export function deserializeStoredBracket() {
	const storedRootRound = localStorage.getItem("rootRound");
	let swissBracketData: SwissBracketData | undefined;

	if (storedRootRound) {
		swissBracketData = JSON.parse(storedRootRound);
	}

	return swissBracketData;
}

