import { Match } from "../../BracketLion/models";
import { SwissBracketData } from "../../BracketLion/SwissBracketData";
import { getScore } from "../helper/score";
import { globalSwiss } from "../App";

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

	return (
		<div className="versus-container" key={match.id}>
			<div className="team-container">
				<div className="image-container">
					<img src="/logos/100.png" alt="" className="" />
				</div>
				<input
					id={upperInputId}
					type="text"
					className="nodrag score-input"
					onChange={onChange}
				/>
			</div>
			<div className="versus-section">
				<h3>VS</h3>
			</div>
			<div className="team-container">
				<div className="image-container">
					<img src="/logos/vitality.png" alt="" />
				</div>
				<input
					id={lowerInputId}
					type="text"
					className="nodrag score-input"
					onChange={onChange}
				/>
			</div>
		</div>
	);
}
