import { NodeProps } from "@xyflow/react";
import { type MatchNodeIsolatedComponent } from "../types.ts";
import { createMatches } from "./matchNodeHelper.tsx";

export function MatchNodeIsolatedComponent({ data }: NodeProps<MatchNodeIsolatedComponent>) {
	
	const teamAreas = createMatches(data);
	return (
		<div className="match-node nodrag">
			<div className="match-node-area">
				{teamAreas}
			</div>
		</div>
	);
}
