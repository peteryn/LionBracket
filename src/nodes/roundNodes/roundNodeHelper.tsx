import VersusRoundComponent from "./VersusRoundComponent.tsx";
import { addColor } from "../../helper/color.ts";
import { RoundNodeType } from "./RoundNodeType.ts";

export function createMatches(data: RoundNodeType) {
	const matches = data.matches;

	const matchesComponents = matches.map((match) => (
		<VersusRoundComponent
			key={match.id}
			match={match}
			bracket={data.swissBracket}
			updateSwissFun={data.updateSwissFun}
			updatePromotedBracket={data.updatePromotedBracket}
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
