export default function TeamInputArea({
										  updateFun,
										  inputId,
										  teamName,
										  imagePath,
										  startingScore,
										  colorClass,
										  inputRef
									  }: {
	updateFun: (e: React.FocusEvent<HTMLInputElement>) => void;
	inputId: string;
	teamName: string;
	imagePath: string;
	startingScore: number | undefined;
	colorClass: string;
	inputRef: React.RefObject<string>
}) {
	let score = "0";
	if (startingScore) {
		score = startingScore.toString();
	}

	const classes = `score-input ${colorClass} bourgeois `;

	return (
		<label className="team-container" htmlFor={inputId}>
			<div className="image-container">
				<img src={imagePath} alt={teamName} className=""/>
			</div>
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
				style={{ visibility: imagePath === "" ? "hidden" : "visible", paddingTop: "5px" }}
			/>
		</label>
	);
}
