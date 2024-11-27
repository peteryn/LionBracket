import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";
import { type RoundNodeComponent } from "./types";
import { getScore } from "../helper/score";
import { globalSwiss } from "../App";

export function RoundNodeComponent({ data }: NodeProps<RoundNodeComponent>) {
	const matches = globalSwiss.roundNodes.get(data.name)?.matches;
	if (!matches) {
		throw new Error();
	}
	const matchesComponents = matches.map((match) => {
		if (match.matchRecord) {
			const upperInputId = `${match.id}upper`;
			const lowerInputId = `${match.id}lower`;

			function onChange() {
				console.log("in onchange");
				const upperTeamWins = getScore(upperInputId);
				const lowerTeamWins = getScore(lowerInputId);
				const matchRecord = globalSwiss.getMatchRecordById(match.id);
				if (matchRecord) {
					matchRecord.upperTeamWins = upperTeamWins;
					matchRecord.lowerTeamWins = lowerTeamWins;
					globalSwiss.setMatchRecordById(match.id, matchRecord);
					if (data.updateSwissFun) {
						console.log("should have called setSwissB");
						const cloned = structuredClone(globalSwiss)
						cloned.evaluationSort = globalSwiss.evaluationSort
						cloned.getEliminatedTeams = globalSwiss.getEliminatedTeams
						cloned.getMatch = globalSwiss.getMatch
						cloned.getMatchHistory = globalSwiss.getMatchHistory
						cloned.getMatchRecord = globalSwiss.getMatchRecord
						cloned.getMatchRecordById = globalSwiss.getMatchRecordById
						cloned.getPromotedTeams = globalSwiss.getPromotedTeams;
						cloned.levelOrderTraversal = globalSwiss.levelOrderTraversal
						cloned.playedAlready = globalSwiss.playedAlready
						cloned.printLevels = globalSwiss.printLevels
						cloned.seedBasedMatchups = globalSwiss.seedBasedMatchups
						cloned.setMatchRecord = globalSwiss.setMatchRecord
						cloned.setMatchRecordById = globalSwiss.setMatchRecordById
						cloned.swissSort = globalSwiss.swissSort
						cloned.updateRounds = globalSwiss.updateRounds
						data.updateSwissFun(cloned);

						console.log(
							globalSwiss.roundNodes.get("1-0")?.matches[0].matchRecord
						);
					}
					if (data.setMyString) {
						console.log("changed string");
						data.setMyString("hi");
					}
				}
			}

			return (
				<div key={match.id} className="matches-area">
					<table>
						<tbody>
							<tr>
								<td>{match.matchRecord.upperTeam.seed}</td>
								<td>
									<input
										id={upperInputId}
										type="text"
										style={{ width: 10 }}
										className="nodrag"
										onChange={onChange}
									/>
								</td>
								<td>vs</td>
								<td>
									<input
										id={lowerInputId}
										type="text"
										style={{ width: 10 }}
										className="nodrag"
										onChange={onChange}
									/>
								</td>
								<td>{match.matchRecord.lowerTeam.seed}</td>
							</tr>
						</tbody>
					</table>
				</div>
			);
		} else {
			return <div key={match.id}>TBD vs TBD</div>;
		}
	});
	return (
		// We add this class to use the same styles as React Flow's default nodes.
		<div className="react-flow__node-default">
			<h1>{data.message}</h1>
			<Handle type="target" position={Position.Left} id={"a"} />
			{/* <p>{data.name}</p> */}
			<div>{matchesComponents}</div>
			<Handle type="source" position={Position.Right} id={"b"} />
		</div>
	);
}
