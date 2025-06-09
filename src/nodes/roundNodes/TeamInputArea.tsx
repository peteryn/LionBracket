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

	let image = null;
	if (imagePath !== "") {
		image = <img src={imagePath} alt={teamName}/>
	}

	const imageContainerId = `${inputId}-image-container`;
	const imageContainer = useRef<HTMLDivElement>(null);
	const popover = useRef<HTMLDivElement>(null);

	function showPopover() {
		if (popover.current) {
			popover.current.togglePopover();
		}
	}
	
	return (
		<div className="team-container">
			<div
				id={imageContainerId}
				className="image-container"
				ref={imageContainer}
				onClick={showPopover}
			>
				{image}
			</div>
			{/* <div id={inputId + "popover"} popover="manual" ref={popover} className="team-info">
				<h1>Hello</h1>
			</div> */}
			{/* <div className="team-info">
				{teamName}
			</div> */}
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
