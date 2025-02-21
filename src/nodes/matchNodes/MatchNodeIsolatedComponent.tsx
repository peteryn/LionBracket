import { NodeProps } from "@xyflow/react";
import { type MatchNodeIsolatedComponent } from "../types.ts";
import MatchTeamInputArea from "./MatchTeamInputArea.tsx";

export function MatchNodeIsolatedComponent({ data }: NodeProps<MatchNodeIsolatedComponent>) {
	return (
		<div className="match-node">
			<div className="match-node-area">
				<MatchTeamInputArea
					updateFun={() => {}}
					inputId="test"
                    teamName="G2 Esports"
					imagePath="/logos/g2.png"
                    startingScore={0}
                    colorClass=""
				></MatchTeamInputArea>

				<MatchTeamInputArea
					updateFun={() => {}}
					inputId="test"
                    teamName="Vitality"
					imagePath="/logos/vitality.png"
                    startingScore={0}
                    colorClass=""
				></MatchTeamInputArea>
			</div>
		</div>
	);
}
