export function TeamBox({ imagePath, altText }: { imagePath: string, altText: string }) {
	let image = null;
	if (imagePath !== "") {
		image = <img src={imagePath} alt={altText}/>
	}
	return (
		<div className="exit-container">
			<div className="exit-img-container">
				{image}
			</div>
		</div>
	);
}
