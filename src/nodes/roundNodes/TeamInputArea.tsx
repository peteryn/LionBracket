import { useRef } from "react";

export default function TeamInputArea({
	updateFun,
	inputId,
	teamName,
	imagePath,
	startingScore,
	colorClass,
	inputRef,
}: {
	updateFun: (e: React.FocusEvent<HTMLInputElement>) => void;
	inputId: string;
	teamName: string;
	imagePath: string;
	startingScore: number | undefined;
	colorClass: string;
	inputRef: React.RefObject<string>;
}) {
	let score = "0";
	if (startingScore) {
		score = startingScore.toString();
	}

	const classes = `score-input ${colorClass} bourgeois `;

	const imageContainerId = `${inputId}-image-container`;
	const imageContainer = useRef(null);
	const popover = useRef(null);

	function showPopover() {
		console.log("clicked");
	}
	console.log(imagePath);
	

	return (
		<div className="team-container">
			<div
				id={imageContainerId}
				className="image-container"
				ref={imageContainer}
				onClick={showPopover}
			>
				<img src={imagePath} alt={teamName} />
			</div>
			<div id={inputId + "popover"} popover="manual" ref={popover}>
				<h1>Hello</h1>
			</div>
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
						paddingTop: "5px"}}
				/>
			</label>
		</div>
	);
}
