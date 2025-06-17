export default function MatchTeamInputArea({
											   updateFun,
											   showScore,
											   inputId,
											   teamName,
											   imagePath,
											   startingScore,
											   colorClass,
											   inputRef
										   }: {
	updateFun: (e: React.FocusEvent<HTMLInputElement>) => void;
	showScore: boolean;
	inputId: string;
	teamName: string;
	imagePath: string;
	startingScore: number | undefined;
	colorClass: string;
	inputRef: React.RefObject<string>
}) {
	const classes = `score-input bourgeois ${colorClass}`;
	return (
		<label className="match-team-area" htmlFor={inputId}>
			<div className="match-team-area-image-container">
				<img src={imagePath} alt=""/>
			</div>
			<div className="match-team-area-name bebas-neue-regular">{teamName}</div>
			<div className="match-team-area-score">
				<input
					id={inputId}
					onChange={updateFun}
					type="number"
					onKeyDown={(e) => {
						if (e.key.includes(".")) {
							e.preventDefault();
						}
					}}
					onFocus={(e) => e.target.select()}
					className={classes}
					value={startingScore}
					style={{ visibility: showScore ? "visible" : "hidden" }}
				/>
			</div>
		</label>
	);
}
