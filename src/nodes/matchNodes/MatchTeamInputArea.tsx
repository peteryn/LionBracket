export default function MatchTeamInputArea({
	updateFun,
	showScore,
	inputId,
	teamName,
	imagePath,
	startingScore,
	colorClass,
}: {
	updateFun: ((e: React.FocusEvent<HTMLInputElement>) => void);
	showScore: boolean;
	inputId: string;
	teamName: string;
	imagePath: string;
	startingScore: number | undefined;
	colorClass: string;
}) {
	const classes = `score-input bourgeois ${colorClass}`
	return (
		<div className="match-team-area">
			<div className="match-team-area-image-container">
				<img src={imagePath} alt="" />
			</div>
			<div className="match-team-area-name bebas-neue-regular">{teamName}</div>
			<div className="match-team-area-score">
				<input
					id={inputId}
					onChange={updateFun}
					type="number"
					onFocus={(e) => e.target.select()}
					className={classes}
					value={startingScore}
					style={{ visibility: showScore ? "visible" : "hidden"}}
				/>
			</div>
		</div>
	);
}
