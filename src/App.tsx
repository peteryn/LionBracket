import "@xyflow/react/dist/base.css";
import RegionCard from "./components/RegionCard.tsx";
import { NavLink } from "react-router";

export default function App() {
	return (
		<div className="home-area">
			<div className="home-header">
				<h1 className="bebas-neue-regular">Lion Bracket</h1>
			</div>
			<div className="major-area">
				<div>
					<h2 className="bebas-neue-regular">
						<NavLink to="/birmingham">Birmingham Major</NavLink>
					</h2>
				</div>
				<div>
					<h2 className="bebas-neue-regular">
						<NavLink to="/raleigh">Raleigh Major</NavLink>
					</h2>
				</div>
			</div>

			<div className="home-grid">
				<RegionCard
					regionName="Europe"
					color="round-start-text"
					data={[
						"/europe_open_4",
						"/europe_open_5",
						"/europe_open_6",
					]}
					data1v1={undefined}
				/>
				<RegionCard
					regionName="North America"
					color="round-losing-text"
					data={[
						"/north_america_open_4",
						"/north_america_open_5",
						"/north_america_open_6",
					]}
					data1v1={"/north_america_open_1v1"}
				/>
				<RegionCard
					regionName="South America"
					color="round-middle-text"
					data={[
						"/south_america_open_4",
						"/south_america_open_5",
						"/south_america_open_6",
					]}
					data1v1={undefined}
				/>
				<RegionCard
					regionName="Middle East & North Africa"
					color="round-winning-text"
					data={[
						"/middle_east_north_africa_open_4",
						"/middle_east_north_africa_open_5",
						"/middle_east_north_africa_open_6",
					]}
					data1v1={"/middle_east_north_africa_open_1v1"}
				/>
				<RegionCard
					regionName="Oceania"
					color="purple-text"
					data={[
						"/oceania_open_4",
						"/oceania_open_5",
						"/oceania_open_6",
					]}
					data1v1={"/oceania_1v1"}
				/>
				<RegionCard
					regionName="Asia-Pacific"
					color="pink-text"
					data={[
						"/asia_pacific_open_4",
						"/asia_pacific_open_5",
						"/asia_pacific_open_6",
					]}
					data1v1={undefined}
				/>
				<RegionCard
					regionName="Sub-Saharan Africa"
					color="orange-text"
					data={[
						"/sub_saharan_africa_open_4",
						"/sub_saharan_africa_open_5",
						"/sub_saharan_africa_open_6",
					]}
					data1v1={undefined}
				/>
			</div>
		</div>
	);
}
