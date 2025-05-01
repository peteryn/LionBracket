
import "@xyflow/react/dist/base.css";
import { NavLink } from "react-router";
import RegionCard from "./helper/RegionCard.tsx";
export default function App() {
	return (
		<div className="home-area">
			<div className="home-header">
				<h1 className="bebas-neue-regular">Lion Bracket</h1>
			</div>
			<div className="home-grid">
				<RegionCard regionName="North America" color="round-losing-text" data={[]}/>
				<RegionCard regionName="Europe" color="round-start-text" data={["/europe_open_4"]}/>
			</div>
		</div>
	)
}