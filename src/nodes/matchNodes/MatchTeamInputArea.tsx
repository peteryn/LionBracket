export default function MatchTeamInputArea({
	updateFun,
	inputId,
	teamName,
	imagePath,
	startingScore,
	colorClass,
}: {
	updateFun: ((e: React.FocusEvent<HTMLInputElement>) => void) | undefined;
	inputId: string;
	teamName: string;
	imagePath: string;
	startingScore: number | undefined;
	colorClass: string;
}) {
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
					type="text"
					onFocus={(e) => e.target.select()}
					className="score-input bourgeois"
					value={startingScore}
					style={{ visibility: updateFun ? "visible" : "hidden"}}
				/>
			</div>
		</div>
	);
}
