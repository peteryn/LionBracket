export default function TeamInputArea({
	onChange,
	inputId,
	imagePath,
}: {
	onChange: () => void;
	inputId: string;
	imagePath: string;
}) {
	return (
		<div className="team-container">
			<div className="image-container">
				<img src={imagePath} alt="" className="" />
			</div>
			<input id={inputId} type="text" className="nodrag score-input" onChange={onChange} />
		</div>
	);
}
