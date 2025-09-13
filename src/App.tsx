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
				<div>
					<h2 className="bebas-neue-regular">
						<NavLink to="/2025worlds">
							World Championship Top 8
						</NavLink>
					</h2>
				</div>
			</div>

			<div className="home-grid">
				<RegionCard
					regionName="Europe"
					color="round-start-text"
					data={[
						["/europe_open_4", "Open #4"],
						["/europe_open_5", "Open #5"],
						["/europe_open_6", "Open #6"],
						["/europe_lcq", "LCQ"],
					]}
				/>
				<RegionCard
					regionName="North America"
					color="round-losing-text"
					data={[
						["/north_america_open_4", "Open #4"],
						["/north_america_open_5", "Open #5"],
						["/north_america_open_6", "Open #6"],
						["/north_america_open_1v1", "1v1"],
						["/north_america_lcq", "LCQ"],
					]}
				/>
				<RegionCard
					regionName="South America"
					color="round-middle-text"
					data={[
						["/south_america_open_4", "Open #4"],
						["/south_america_open_5", "Open #5"],
						["/south_america_open_6", "Open #6"],
					]}
				/>
				<RegionCard
					regionName="Middle East & North Africa"
					color="round-winning-text"
					data={[
						["/middle_east_north_africa_open_4", "Open #4"],
						["/middle_east_north_africa_open_5", "Open #5"],
						["/middle_east_north_africa_open_6", "Open #6"],
						["/middle_east_north_africa_open_1v1", "1v1"],
					]}
				/>
				<RegionCard
					regionName="Oceania"
					color="purple-text"
					data={[
						["/oceania_open_4", "Open #4"],
						["/oceania_open_5", "Open #5"],
						["/oceania_open_6", "Open #6"],
						["/oceania_1v1", "1v1"],
					]}
				/>
				<RegionCard
					regionName="Asia-Pacific"
					color="pink-text"
					data={[
						["/asia_pacific_open_4", "Open #4"],
						["/asia_pacific_open_5", "Open #5"],
						["/asia_pacific_open_6", "Open #6"],
					]}
				/>
				<RegionCard
					regionName="Sub-Saharan Africa"
					color="orange-text"
					data={[
						["/sub_saharan_africa_open_4", "Open #4"],
						["/sub_saharan_africa_open_5", "Open #5"],
						["/sub_saharan_africa_open_6", "Open #6"],
						["/sub_saharan_africa_1v1", "1v1"],
					]}
				/>
			</div>
		</div>
	);
}
