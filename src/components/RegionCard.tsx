import { NavLink } from "react-router";

export default function({ regionName, data, color }: {regionName: string, data: string[], color: string}) {
	let items;
	if (data.length === 0) {
		items = <li>Coming Soon</li>
	} else {
		items = data.map((item, index) => <li key={index}><NavLink to={item}>Open #{index + 4}</NavLink></li>)
	}
	return (
		<div className="bebas-neue-regular">
			<h2 className={color}>{regionName}</h2>
			<ul className="regional-list">
				{items}
			</ul>
		</div>
	)
}