export class PromotedNodeType {
	[key: string]: unknown;

	inputId: string;
	teamName: string;
	imagePath: string;

	constructor(inputId: string, teamName: string, imagePath: string) {
		this.inputId = inputId;
		this.teamName = teamName;
		this.imagePath = imagePath;
	}
}