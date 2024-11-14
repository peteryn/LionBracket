import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";
import { type RoundNodeComponent } from "./types";
import { swiss } from ".";
import { getScore } from "../helper/score";

export function RoundNodeComponent({ data }: NodeProps<RoundNodeComponent>) {
	const matchesComponents = data.roundNode.matches.map((match) => {
		if (match.matchRecord) {
			const upperInputId = `${match.id}upper`;
			const lowerInputId = `${match.id}lower`;

			function onChange() {
				const upperTeamWins = getScore(upperInputId);
				const lowerTeamWins = getScore(lowerInputId);
				const matchRecord = swiss.getMatchRecordById(match.id);
				if (matchRecord) {
					matchRecord.upperTeamWins = upperTeamWins;
					matchRecord.lowerTeamWins = lowerTeamWins;
					swiss.setMatchRecordById(match.id, matchRecord);
					console.log(swiss.roundNodes.get("0-1")?.matches[0].matchRecord);
				}
			}

			return (
				<div key={match.id} className="matches-area">
					<table>
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
