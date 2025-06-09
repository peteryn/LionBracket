import { Handle, NodeProps, Position } from "@xyflow/react";
import { TeamBox } from "./TeamBox.tsx";
import { type ExitNodeComponent } from "../types.ts";
import { getLosers, getWinners } from "../../../LionBracketEngine/src/util/util.ts";

export function ExitNodeComponent({ data }: NodeProps<ExitNodeComponent>) {
	const paths = data.teams;
	const round = data.swissBracket.getBracketNode(data.parent);
	if (!round) {
		return;
	}

	let exitTeams;
	if (data.isPromoted) {
		exitTeams = getWinners(round.matches);
	} else {
		exitTeams = getLosers(round.matches);
	}
	exitTeams = data.swissBracket.swissSort(exitTeams);


	const exitTeamsComponents: React.ReactNode[] = [];
	for (let i = 0; i < round.numSeeds / 2; i++) {
		if (i < exitTeams.length) {
			const team = exitTeams[i];

			const path = `/logos/${paths[team - 1].path}.png`;
			exitTeamsComponents.push(
				<TeamBox key={i} imagePath={path} altText={paths[team - 1].name}></TeamBox>
			);
		} else {
			exitTeamsComponents.push(<TeamBox key={i} imagePath="" altText=""></TeamBox>);
		}
	}

	const colorClass = `react-flow__node-default exit ${data.colorClass} `;

	return (
		<div className={colorClass}>
			<p className="versus-section-round-title bourgeois">{data.title}</p>
			<Handle type="target" position={Position.Left} id={data.inputHandleId} className=""/>
			<div className="qualified-area">{exitTeamsComponents}</div>
		</div>
	);
}
