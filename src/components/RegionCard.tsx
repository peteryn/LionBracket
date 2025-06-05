import { NavLink } from "react-router";

export default function ({
	regionName,
	data,
	color,
	data1v1,
}: {
	regionName: string;
	data: string[];
	color: string;
	data1v1: string | undefined;
}) {
	const items = data.map((item, index) => (
		<li key={index}>
			<NavLink to={item}>Open #{index + 4}</NavLink>
		</li>
	));
	if (data1v1) {
		items.push(
			<li key={data.length}>
				<NavLink to={data1v1}>1v1</NavLink>
			</li>
		);
	}
	return (
		<div className="bebas-neue-regular">
			<h2 className={color}>{regionName}</h2>
			<ul className="regional-list">{items}</ul>
		</div>
	);
}
