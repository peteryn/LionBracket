export class SwissBracketController {
	players: gamePlayer[] = [];
	round1: matchPair[] = [];

	constructor() {
		for (let i = 0; i < 16; i++) {
			this.players.push({ initialSeed: i + 1, matchHistory: [] });
		}
	}

	createRound1() {
		this.round1 = standardSeeding(this.players);
	}
}

function standardSeeding(players: gamePlayer[]): matchPair[] {
	let i = 0,
		j = players.length - 1;
	const round: matchPair[] = [];
	while (i < j) {
		const player1 = players[i];
		const player2 = players[j];
		player1.matchHistory.push({ gamesWon: 0, gamesLost: 0, seedPlayed: player2.initialSeed });
		player2.matchHistory.push({ gamesWon: 0, gamesLost: 0, seedPlayed: player1.initialSeed });

		round.push({ upperSeed: player1.initialSeed, lowerSeed: player2.initialSeed });
		i++;
		j--;
	}

	return round
}

interface matchPair {
	upperSeed: number;
	lowerSeed: number;
}

interface gamePlayer {
	initialSeed: number;
	matchHistory: matchInternal[];
}

interface matchInternal {
	gamesWon: number;
	gamesLost: number;
	seedPlayed: number;
}
