export class SwissBracketController {
	players: gamePlayer[] = [];

	constructor() {
		for (let i = 0; i < 16; i++) {
			this.players.push({ initialSeed: i + 1, matchHistory: [] });
		}
	}
}

interface gamePlayer {
	initialSeed: number;
	matchHistory: matchInternal[];
}

interface matchInternal {
	matchWon: boolean;
	gameDifferential: number;
	teamPlayed: string;
}
