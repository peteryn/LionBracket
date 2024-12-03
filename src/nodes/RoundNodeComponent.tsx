import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";
import { type RoundNodeComponent } from "./types.ts";
import { getScore } from "../helper/score.ts";
import { globalSwiss } from "../App.tsx";

export function RoundNodeComponent({ data }: NodeProps<RoundNodeComponent>) {
	const matches = globalSwiss.data.roundNodes.get(data.name)?.matches;
	if (!matches) {
		throw new Error();
	}
	const matchesComponents = matches.map((match) => {
		if (match.matchRecord) {
			const upperInputId = `${match.id}upper`;
			const lowerInputId = `${match.id}lower`;

			function onChange() {
				const upperTeamWins = getScore(upperInputId);
				const lowerTeamWins = getScore(lowerInputId);
				const matchRecord = globalSwiss.getMatchRecordById(match.id);
				if (matchRecord) {
					matchRecord.upperTeamWins = upperTeamWins;
					matchRecord.lowerTeamWins = lowerTeamWins;
					globalSwiss.setMatchRecordById(match.id, matchRecord);
					if (data.updateSwissFun) {
						const cloned = structuredClone(globalSwiss.data);
						globalSwiss.data = cloned;
						data.updateSwissFun(cloned);
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
			<Handle type="target" position={Position.Left} id={"a"} />
			{/* <p>{data.name}</p> */}
			<div>{matchesComponents}</div>
			<Handle type="source" position={Position.Right} id={"b"} />
		</div>
	);
}
