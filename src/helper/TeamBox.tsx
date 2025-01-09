export function TeamBox({ imagePath }: { imagePath: string }) {
	return (
		<div className="exit-container">
			<div className="exit-img-container">
				<img src={imagePath} alt="" className="" />
			</div>
		</div>
	);
}
