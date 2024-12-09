export function TeamBox({ imagePath }: { imagePath: string }) {
	return (
		<div className="team-container">
			<div className="image-container">
				<img src={imagePath} alt="" className="" />
			</div>
		</div>
	);
}
