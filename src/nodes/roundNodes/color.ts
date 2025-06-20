export function addColor(
	discriminator: string,
	classes: string,
	colorClasses: string[]
) {
	switch (discriminator) {
		case "1-0":
		case "2-0":
			classes += colorClasses[0];
			break;
		case "0-1":
		case "1-1":
		case "2-1":
			classes += colorClasses[1];
			break;
		case "0-2":
		case "1-2":
		case "2-2":
			classes += colorClasses[2];
			break;
		default:
			classes += colorClasses[3];
	}
	return classes;
}

export function getColor(roundNodeName: string) {
	switch (roundNodeName) {
		case "1-0":
		case "2-0":
			return "var(--green)";
		case "0-1":
		case "1-1":
		case "2-1":
			return "var(--yellow)";
		case "0-2":
		case "1-2":
		case "2-2":
			return "var(--red)";
		default:
			return "var(--blue)";
	}
}
