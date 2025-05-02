export class ChampionNodeType {
	[key: string]: unknown;
    teamName: string;
    imagePath: string;

    constructor(teamName: string, imagePath: string) {
        this.teamName = teamName;
        this.imagePath = imagePath;
    }
}