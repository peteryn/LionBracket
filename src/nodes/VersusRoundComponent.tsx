import { Match } from "../../BracketLion/models";
import { SwissBracketData } from "../../BracketLion/SwissBracketData";
import { getScore } from "../helper/score";
import { globalSwiss } from "../App";
import TeamBox from "./TeamBox";

export default function VersusRoundComponent({
	match,
	updateSwissFun,
}: {
	match: Match;
	updateSwissFun: React.Dispatch<React.SetStateAction<SwissBracketData>> | undefined;
}) {
	const upperInputId = `${match.id}upper`;
	const lowerInputId = `${match.id}lower`;

	function onChange() {
		const upperTeamWins = getScore(upperInputId);
		const lowerTeamWins = getScore(lowerInputId);
		console.log("in onchange");
		const matchRecord = globalSwiss.getMatchRecordById(match.id);
		if (matchRecord) {
			matchRecord.upperTeamWins = upperTeamWins;
			matchRecord.lowerTeamWins = lowerTeamWins;
			globalSwiss.setMatchRecordById(match.id, matchRecord);
			if (updateSwissFun) {
				const cloned = structuredClone(globalSwiss.data);
				globalSwiss.data = cloned;
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

	return (
		<div className="versus-container" key={match.id}>
			<TeamBox
				onChange={onChange}
				inputId={upperInputId}
				imagePath={upperImagePath}
			></TeamBox>
			<div className="versus-section">
				<h3>VS</h3>
			</div>
			<TeamBox
				onChange={onChange}
				inputId={lowerInputId}
				imagePath={lowerImagePath}
			></TeamBox>
		</div>
	);
}
