export function getScore(id: string): number {
	let stringValue = (document.getElementById(id) as HTMLInputElement).value;
	if (stringValue === "") {
		return 0;
	} 

	if (stringValue.length > 1) {
		if (stringValue[stringValue.length - 1] === ".") {
			return 0
		}
		stringValue = stringValue[stringValue.length - 1];
	}

	const numberValue = Number(stringValue);
	if (numberValue < 0) {
		return 0;
	}
	return Number(stringValue);
}
