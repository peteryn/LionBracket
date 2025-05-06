import "@xyflow/react/dist/base.css";
import RegionCard from "./components/RegionCard.tsx";

export default function App() {
	return (
		<div className="home-area">
			<div className="home-header">
				<h1 className="bebas-neue-regular">Lion Bracket</h1>
			</div>
			<div className="home-grid">
				<RegionCard regionName="Europe" color="round-start-text" data={["/europe_open_4"]}/>
				<RegionCard regionName="North America" color="round-losing-text"
							data={["/north_america_open_4", "/north_america_open_5"]}/>
				<RegionCard regionName="South America" color="round-middle-text" data={["/south_america_open_4"]}/>
				<RegionCard regionName="Middle East & North Africa" color="round-winning-text"
							data={["/middle_east_north_africa_open_4", "/middle_east_north_africa_open_5"]}/>
				<RegionCard regionName="Oceania" color="purple-text"
							data={["/oceania_open_4", "/oceania_open_5"]}/>
			</div>
		</div>
	);
}