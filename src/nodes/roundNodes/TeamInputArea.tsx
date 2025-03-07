export default function TeamInputArea({
	updateFun,
	inputId,
	teamName,
	imagePath,
	startingScore,
	colorClass,
}: {
	updateFun: (e: React.FocusEvent<HTMLInputElement>) => void;
	inputId: string;
	teamName: string;
	imagePath: string;
	startingScore: number | undefined;
	colorClass: string;
}) {
	let score = "0";
	if (startingScore) {
		score = startingScore.toString();
	}

	const classes = `score-input ${colorClass} bourgeois `;

	return (
		<div className="team-container">
			<div className="image-container">
				<img src={imagePath} alt={teamName} className="" />
			</div>
			<input
				id={inputId}
				type="text"
				className={classes}
				onFocus={(e) => e.target.select()}
				onChange={updateFun}
				value={score}
				style={{ visibility: imagePath === "" ? "hidden" : "visible" }}
			/>
		</div>
	);
}
