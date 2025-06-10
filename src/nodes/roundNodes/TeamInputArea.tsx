import { JSX, useState } from "react";
import { TeamInfoArea } from "./TeamInfoArea";

export default function TeamInputArea({
	updateFun,
	inputId,
	teamName,
	imagePath,
	startingScore,
	colorClass,
	teamInfo,
}: {
	updateFun: (e: React.FocusEvent<HTMLInputElement>) => void;
	inputId: string;
	teamName: string;
	imagePath: string;
	startingScore: number | undefined;
	colorClass: string;
	teamInfo: JSX.Element;
}) {
	let score = "0";
	if (startingScore) {
		score = startingScore.toString();
	}

	const classes = `score-input ${colorClass} bourgeois `;

	let image = null;
	if (imagePath !== "") {
		image = <img src={imagePath} alt={teamName} />;
	}

	const [show, setShow] = useState(false);
	function showTeamInfo() {
		setShow(!show);
	}
	return (
		<div className="team-container">
			<div className="image-container" onClick={showTeamInfo}>
				{image}
			</div>
			<TeamInfoArea teamName={teamName} isLeft={true} show={show}></TeamInfoArea>
			<label htmlFor={inputId}>
				<input
					id={inputId}
					type="number"
					className={classes}
					onKeyDown={(e) => {
						if (e.key.includes(".")) {
							e.preventDefault();
						}
					}}
					onFocus={(e) => e.target.select()}
					onChange={updateFun}
					value={score}
					style={{
						visibility: imagePath === "" ? "hidden" : "visible",
						paddingTop: "5px",
					}}
				/>
			</label>
		</div>
	);
}

