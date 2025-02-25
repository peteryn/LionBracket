export class GhostNodeType {
	[key: string]: unknown;
	name: string;
	outputHandleId: string;

	constructor(name: string) {
		this.name = name;
		this.outputHandleId = `${name}:Output`;
	}
}
