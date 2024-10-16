export function getScore(id: string): number {
	const stringValue = (document.getElementById(id) as HTMLInputElement).value;
	if (stringValue === "") {
		return 0;
	} else {
		return Number(stringValue);
	}
}
