import { Team } from "../teams/Team";

export class Match {
	[key: string]: unknown;
	team1: Team | undefined;
	team2: Team | undefined;
	isStarting?: boolean;
	isEnding?: boolean;
	update?: any;
	remove?: any;
	bracketId: string;
	roundId: string;
	matchId: string;
	target?: Match;
	targetPos?: string;

	constructor(
		bracketId: string,
		roundId: string,
		matchId: string,
		team1: Team | undefined,
		team2: Team | undefined,
		isStarting = false,
		isEnding = false
	) {
		this.bracketId = bracketId;
		this.roundId = roundId;
		this.matchId = matchId;
		this.team1 = team1;
		this.team2 = team2;
		this.isStarting = isStarting;
		this.isEnding = isEnding;
	}

	getNodeId() {
		return this.bracketId.concat(this.roundId.concat(this.matchId));
	}

	getTeam1InputId() {
		return this.getNodeId().concat("u");
	}

	getTeam2InputId() {
		return this.getNodeId().concat("l");
	}

	getOutputHandle1Id() {
		return this.getNodeId().concat("o1");
	}

	getOutputHandle2Id() {
		return this.getNodeId().concat("o2");
	}

	getInputHandle1Id() {
		return this.getNodeId().concat("i1");
	}

	getInputHandle2Id() {
		return this.getNodeId().concat("i2");
	}
}
