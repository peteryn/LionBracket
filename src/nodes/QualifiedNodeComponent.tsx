import { Handle, NodeProps, Position } from "@xyflow/react";
import { TeamBox } from "../helper/TeamBox";
import { type QualifiedNodeComponent } from "./types.ts";

export function QualifiedNodeComponent({ data }: NodeProps<QualifiedNodeComponent>) {
	const round = data.swissBracket.data.roundNodes.get(data.parent);
	if (!round) {
		return;
	}

	const exitTeams: JSX.Element[] = [];
	for (let i = 0; i < round.numTeams / 2; i++) {
		if (i < round.promotionTeams.length) {
			const team = round.promotionTeams[i];

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
			const path = `/logos/${paths[team.seed - 1]}.png`;
			exitTeams.push(<TeamBox key={i} imagePath={path}></TeamBox>);
		}
        else {
			exitTeams.push(<TeamBox key={i} imagePath=""></TeamBox>);
        }
	}

	return (
		<div className="react-flow__node-default qualified">
			<p className="versus-section-round-title bourgeois">QUALIFIED</p>
			<Handle type="target" position={Position.Left} id={"q1"} />
			<div className="qualified-area">
                {exitTeams}
            </div>
		</div>
	);
}
