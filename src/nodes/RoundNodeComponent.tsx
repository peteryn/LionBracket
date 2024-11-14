import { Handle, Position, type NodeProps, type Edge } from "@xyflow/react";
import { type RoundNodeComponent } from "./types";

export function RoundNodeComponent({data}: NodeProps<RoundNodeComponent>) {
	const matches = data.roundNode.matches.map(match => {
		if (match.matchRecord) {
			return (
				<div key={match.id} className="matches-area">
					<table>
						<tr>
							<td>{match.matchRecord.upperTeam.seed}</td>
							<td><input type="text" style={{ width: 10}} className="nodrag"/></td>
							<td>vs</td>
							<td><input type="text" style={{ width: 10}} className="nodrag"/></td>
							<td>{match.matchRecord.lowerTeam.seed}</td>
						</tr>
					</table>
				</div>
			);
		} else {
			return <div key={match.id}>
				TBD vs TBD
			</div>;
		}
	});
	return (
		// We add this class to use the same styles as React Flow's default nodes.
		<div className="react-flow__node-default">
			<Handle
				type="target"
				position={Position.Left}
				id={"a"}
			/>
			<p>{data.name}</p>
			<div>
				{matches}
			</div>
			<Handle
				type="source"
				position={Position.Right}
				id={"b"}
			/>
		</div>
	);
}