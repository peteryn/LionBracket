import { Match } from "../../BracketLion/models";
import { SwissBracketData } from "../../BracketLion/SwissBracketData";
import { getScore } from "../helper/score";
import TeamInputArea from "./TeamInputArea";
import { addColor } from "../helper/color";
import { SwissBracket } from "../../BracketLion/SwissBracket";

export default function VersusRoundComponent({
	match,
	swissBracket,
	updateSwissFun,
}: {
	match: Match;
	swissBracket: SwissBracket;
	updateSwissFun: React.Dispatch<React.SetStateAction<SwissBracketData>> | undefined;
}) {
	const upperInputId = `${match.id}upper`;
	const lowerInputId = `${match.id}lower`;

	function onChange() {
		const upperTeamWins = getScore(upperInputId);
		const lowerTeamWins = getScore(lowerInputId);
		console.log("in onchange");
		const matchRecord = swissBracket.getMatchRecordById(match.id);
		if (matchRecord) {
			matchRecord.upperTeamWins = upperTeamWins;
			matchRecord.lowerTeamWins = lowerTeamWins;
			swissBracket.setMatchRecordById(match.id, matchRecord);
			if (updateSwissFun) {
				const cloned = structuredClone(swissBracket.data);
				swissBracket.data = cloned;
				updateSwissFun(cloned);
			}
		}
	}
	const paths: string[] = [
		"g2",
		"geng",
		"og",
		"ssg",
		"luminosity",
		"m80",
		"cloud9",
		"shopify",
		"snowmen",
		"dignitas",
		"moist",
		"nrg",
		"spate",
		"zero2one",
		"gbuffo",
		"incorrect",
	];

	let upperImagePath = "";
	let lowerImagePath = "";
	if (match.matchRecord) {
		upperImagePath = `/logos/${paths[match.matchRecord.upperTeam.seed - 1]}.png`;
		lowerImagePath = `/logos/${paths[match.matchRecord.lowerTeam.seed - 1]}.png`;
	}
	let classes = "versus ";
	if (match.roundNode) {
		classes = addColor(match.roundNode.name, classes, [
			"round-winning-text",
			"round-middle-text",
			"round-losing-text",
			"round-start-text",
		]);
	}

	return (
		<div className="versus-container" key={match.id}>
			<TeamInputArea
				onChange={onChange}
				inputId={upperInputId}
				imagePath={upperImagePath}
			></TeamInputArea>
			<div className="versus-section">
				<h3 className={classes}>VS</h3>
			</div>
			<TeamInputArea
				onChange={onChange}
				inputId={lowerInputId}
				imagePath={lowerImagePath}
			></TeamInputArea>
		</div>
	);
}
