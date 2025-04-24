export class PromotedNodeType {
	[key: string]: unknown;

	teamName: string;
	imagePath: string;

	constructor(teamName: string, imagePath: string) {
		this.teamName = teamName;
		this.imagePath = imagePath;
	}
}