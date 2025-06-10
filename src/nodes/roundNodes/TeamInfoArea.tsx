import { useState } from "react";

export function TeamInfoArea({
	teamName,
	isLeft,
    show,
}: {
	teamName: string;
	isLeft: boolean;
    show: boolean;
}) {
	const style: React.CSSProperties = {
		visibility: show ? "visible" : "hidden",
		...(isLeft ? { right: "115%" } : { left: "115%" }),
	};

	return (
		<>
			<div
				className="team-info"
				style={style}
			>
				<h3 className="bebas-neue-regular">{teamName}</h3>
				<ul className="players-list bebas-neue-regular">
					<li>Vatira</li>
					<li>Atow</li>
					<li>Drali</li>
				</ul>
			</div>
		</>
	);
}
