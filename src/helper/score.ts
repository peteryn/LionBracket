export function getScore(ref: React.RefObject<HTMLInputElement>): number {
	const input = ref.current;
	if (!input) {
		return 0;
	}
	let stringValue = input.value;

	if (stringValue === "") {
		return 0;
	}

	if (stringValue.length > 1) {
		if (stringValue[stringValue.length - 1] === ".") {
			return 0;
		}
		stringValue = stringValue[stringValue.length - 1];
	}

	const numberValue = Number(stringValue);
	if (numberValue < 0) {
		return 0;
	}
	return Number(stringValue);
}
