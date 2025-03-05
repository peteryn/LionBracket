export function TeamBox({ imagePath, altText }: { imagePath: string, altText: string }) {
	return (
		<div className="exit-container">
			<div className="exit-img-container">
				<img src={imagePath} alt={altText} className="" />
			</div>
		</div>
	);
}
