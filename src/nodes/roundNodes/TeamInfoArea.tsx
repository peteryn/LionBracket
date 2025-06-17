import { useState } from "react";

export function TeamInfoArea({
	teamName,
	players,
	isLeft,
    show,
	color,
}: {
	teamName: string;
	players: string[];
	isLeft: boolean;
    show: boolean;
	color: string;
}) {
	const style: React.CSSProperties = {
		visibility: show ? "visible" : "hidden",
		...(isLeft ? { right: "115%" } : { left: "115%" }),
	};

	const playerElements = players.map((player, index) => <li key={index}>{player}</li>)

	return (
		<>
			<div
				className="team-info"
				style={style}
			>
				<h3 className="bebas-neue-regular" style={{color: color}}>{teamName}</h3>
				<ul className="players-list bebas-neue-regular">
					{playerElements}
				</ul>
			</div>
		</>
	);
}
