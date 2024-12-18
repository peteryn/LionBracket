import { Handle, NodeProps, Position } from "@xyflow/react";
import { TeamBox } from "../helper/TeamBox";
import { type ExitNodeComponent } from "./types.ts";

export function ExitNodeComponent({ data }: NodeProps<ExitNodeComponent>) {
	const round = data.swissBracket.getRoundNode(data.parent);
	if (!round) {
		return;
	}

	let exitTeams;
	if (data.isPromoted) {
		exitTeams = round.promotionTeams;
	} else {
		exitTeams = round.eliminatedTeams
	}

	const exitTeamsComponents: JSX.Element[] = [];
	for (let i = 0; i < round.numTeams / 2; i++) {
		if (i < exitTeams.length) {
			const team = exitTeams[i];

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
			const path = `/logos/${paths[team- 1]}.png`;
			exitTeamsComponents.push(<TeamBox key={i} imagePath={path}></TeamBox>);
		}
        else {
			exitTeamsComponents.push(<TeamBox key={i} imagePath=""></TeamBox>);
        }
	}

	const colorClass = `react-flow__node-default exit ${data.colorClass}`;

	return (
		<div className={colorClass}>
			<p className="versus-section-round-title bourgeois">{data.title}</p>
			<Handle type="target" position={Position.Left} id={data.inputHandleId} />
			<div className="qualified-area">
                {exitTeamsComponents}
            </div>
		</div>
	);
}
