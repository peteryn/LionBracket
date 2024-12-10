import { Handle, NodeProps, Position } from "@xyflow/react";
import { TeamBox } from "../helper/TeamBox";
import { type ExitNodeComponent } from "./types.ts";

export function ExitNodeComponent({ data }: NodeProps<ExitNodeComponent>) {
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

	const colorClass = `react-flow__node-default qualified ${data.colorClass}`;

	return (
		<div className={colorClass}>
			<p className="versus-section-round-title bourgeois">{data.title}</p>
			<Handle type="target" position={Position.Left} id={data.inputHandleId} />
			<div className="qualified-area">
                {exitTeams}
            </div>
		</div>
	);
}
