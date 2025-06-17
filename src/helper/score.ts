export function getScore(ref: React.RefObject<string>): number {
	let input = ref.current;
	if (!input || input === "") {
		return 0;
	}

	if (input.length > 1) {
		if (input[input.length - 1] === ".") {
			return 0;
		}
		input = input[input.length - 1];
	}

	const numberValue = Number(input);
	if (numberValue < 0) {
		return 0;
	}
	return Number(input);
}
