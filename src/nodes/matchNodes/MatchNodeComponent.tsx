import { createMatches } from "./matchNodeHelper.tsx";
import { Handle, NodeProps, Position } from "@xyflow/react";
import { type MatchNodeComponent } from "../types.ts";
import { Bracket } from "../../../LionBracketEngine/src/models/bracket.ts";

export function MatchNodeComponent<NodeNames extends string, B extends Bracket<NodeNames>>({data}: NodeProps<MatchNodeComponent<NodeNames, B>>) {
	const teamAreas = createMatches(data);

	return (
		<div className="match-node">
			<h1>HEY</h1>
			<div className="match-node-area">
				{teamAreas}
				<Handle
					type="target"
					position={Position.Left}
					id={`${data.upperInputHandleId}Ghost`}
					style={{ top: "30px" }}
				></Handle>
				<Handle
					type="target"
					position={Position.Left}
					id={data.upperInputHandleId}
					style={{ top: "70px" }}
				></Handle>
				<Handle type="source" position={Position.Right} id={data.outputHandleId}></Handle>
			</div>
		</div>
	);
}