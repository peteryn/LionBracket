import { Match } from "../../../LionBracketEngine/src/models/match";

import { getScore } from "../../helper/score";
import TeamInputArea from "./TeamInputArea";
import { getColor } from "./color";
import { serializeSwissBracket } from "../../helper/serializer";
import { BracketNode } from "../../../LionBracketEngine/src/models/bracket_node";
import { Seed } from "../../../LionBracketEngine/src/models/match_record";
import { SwissBracketFlow } from "../../../LionBracketEngine/src/swiss_bracket/swiss_backet_flow";
import { useRef } from "react";
import { Team } from "../../helper/teamTranslator";

export default function VersusRoundComponent({
	match,
	bracket,
	updateSwissFun,
	updatePromotedBracket,
	swissBracketStorageName,
	paths,
}: {
	match: Match;
	bracket: SwissBracketFlow;
	updateSwissFun:
		| React.Dispatch<React.SetStateAction<BracketNode>>
		| undefined;
	updatePromotedBracket: ((seed: Seed[]) => void) | undefined;
	swissBracketStorageName: string;
	paths: Team[];
}) {
	const roundNodeName = match.id.split(".")[0];


	if (match.matchRecord?.type === "FullRecord") {
		const upperInputId = `${match.id}upper`;
		const lowerInputId = `${match.id}lower`;

		const upperInputRef = useRef<string>("0");
		const lowerInputRef = useRef<string>("0");

		function onChange(e: React.FocusEvent<HTMLInputElement>) {
			if (e.target.id === upperInputId) {
				upperInputRef.current = e.target.value;
			}
			if (e.target.id === lowerInputId) {
				lowerInputRef.current = e.target.value;
			}

			const upperTeamWins = getScore(upperInputRef);
			const lowerTeamWins = getScore(lowerInputRef);
			const matchRecord = bracket.getMatchRecord(match.id);
			if (matchRecord) {
				matchRecord.upperSeedWins = upperTeamWins;
				matchRecord.lowerSeedWins = lowerTeamWins;
				bracket.setMatchRecord(match.id, matchRecord);
				if (updateSwissFun) {
					bracket.updateFlow(bracket.getBracketNode(roundNodeName));
					const cloned = structuredClone(bracket.rootRound);
					bracket.rootRound = cloned;
					updateSwissFun(cloned);
					serializeSwissBracket(
						bracket.rootRound,
						swissBracketStorageName
					);
					if (updatePromotedBracket) {
						updatePromotedBracket(bracket.getPromotedSeeds());
					}
				} else {
					console.log("updateSwissFun doesn't exist when it should");
				}
			} else {
				console.log("match record doesnt exist bad error");
			}
		}

		const upperScore = match.matchRecord.upperSeedWins;
		const lowerScore = match.matchRecord.lowerSeedWins;

		const upperTeam: Team = paths[match.matchRecord.upperSeed - 1];
		const lowerTeam: Team = paths[match.matchRecord.lowerSeed - 1];

		const colorClass = getColor(roundNodeName);
		const upperClass = upperScore > lowerScore ? colorClass : "#FFF";
		const lowerClass = lowerScore > upperScore ? colorClass : "#FFF";

		return (
			<div className="versus-container" key={match.id}>
				<TeamInputArea
					updateFun={onChange}
					team={upperTeam}
					inputId={upperInputId}
					startingScore={upperScore}
					color={upperClass}
					isLeft={true}
				></TeamInputArea>
				<div className="versus-section">
					<h3 className="versus" style={{ color: getColor(roundNodeName)}}>VS</h3>
				</div>
				<TeamInputArea
					updateFun={onChange}
					inputId={lowerInputId}
					team={lowerTeam}
					startingScore={lowerScore}
					color={lowerClass}
					isLeft={false}
				></TeamInputArea>
			</div>
		);
	} else {
		return (
			<div className="versus-container" key={match.id}>
				<div className="team-container"></div>
				<div className="versus-section">
					<h3 className="versus" style={{ color: getColor(roundNodeName)}}>VS</h3>
				</div>
				<div className="team-container"></div>
			</div>
		);
	}
}
