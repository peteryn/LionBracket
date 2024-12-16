export default function TeamInputArea({
	updateFun,
	inputId,
	imagePath,
	startingScore,
}: {
	updateFun: (e: React.FocusEvent<HTMLInputElement>) => void;
	inputId: string;
	imagePath: string;
	startingScore: number | undefined;
}) {
	let score = "0";
	if (startingScore) {
		score = startingScore.toString();
	}

	return (
		<div className="team-container">
			<div className="image-container">
				<img src={imagePath} alt="" className="" />
			</div>
			<input
				id={inputId}
				type="text"
				className="nodrag score-input"
				onFocus={(e) => e.target.select()}
				onChange={updateFun}
				value={score}
				style={{ visibility: imagePath === "" ? "hidden" : "visible" }}
			/>
		</div>
	);
}
