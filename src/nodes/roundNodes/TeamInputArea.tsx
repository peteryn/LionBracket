import { JSX, useState } from "react";
import { TeamInfoArea } from "./TeamInfoArea";
import { Team } from "../../helper/teamTranslator";

export default function TeamInputArea({
	updateFun,
	inputId,
	team,
	startingScore,
	color,
	isLeft,
}: {
	updateFun: (e: React.FocusEvent<HTMLInputElement>) => void;
	inputId: string;
	team: Team;
	startingScore: number | undefined;
	color: string;
	isLeft: boolean;
}) {
	let score = "0";
	if (startingScore) {
		score = startingScore.toString();
	}

	let image = null;
	if (team.path !== "") {
		const fullPath = `/logos/${team.path}.png`;
		image = <img src={fullPath} alt={team.name} />;
	}

	const [show, setShow] = useState(false);
	function showTeamInfo() {
		setShow(!show);
	}
	let teamInfoArea;
	if (team.type === "additional-info") {
		teamInfoArea = (
			<TeamInfoArea
				teamName={team.abbreviatedName}
				players={team.players}
				isLeft={isLeft}
				show={show}
				color={team.color}
			></TeamInfoArea>
		);
	}

	return (
		<div className="team-container">
			<div className="image-container" onClick={showTeamInfo}>
				{image}
			</div>
			{teamInfoArea}
			<label htmlFor={inputId}>
				<input
					id={inputId}
					type="number"
					className="score-input bourgeois"
					onKeyDown={(e) => {
						if (e.key.includes(".")) {
							e.preventDefault();
						}
					}}
					onFocus={(e) => e.target.select()}
					onChange={updateFun}
					value={score}
					style={{
						color: color,
						paddingTop: "5px",
					}}
				/>
			</label>
		</div>
	);
}
