import VersusRoundComponent from "../nodes/VersusRoundComponent.tsx";
import { addColor } from "./color.ts";
import { RoundNodeType } from "../nodes/RoundNodeType.ts";

export function createMatches(data: RoundNodeType) {
	const matches = data.roundNode.matches;
	const matchesComponents = matches.map((match) => (
		<VersusRoundComponent
			key={match.id}
			match={match}
			swissBracket={data.swissBracket}
			updateSwissFun={data.updateSwissFun}
		></VersusRoundComponent>
	));
	return matchesComponents;
}

export function createRoundCSS(name: string) {
	let classes = "versus-section-round-title bourgeois ";
	classes = addColor(name, classes, [
		"round-winning",
		"round-middle",
		"round-losing",
		"round-start",
	]);
	return classes;
}
