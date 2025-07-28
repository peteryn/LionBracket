import { NavLink } from "react-router";

export default function ({
	regionName,
	data,
	color,
}: {
	regionName: string;
	data: string[][];
	color: string;
}) {
	const items = data.map((item, index) => (
		<li key={index}>
			<NavLink to={item[0]}>{item[1]}</NavLink>
		</li>
	));
	return (
		<div className="bebas-neue-regular">
			<h2 className={color}>{regionName}</h2>
			<ul className="regional-list">{items}</ul>
		</div>
	);
}
