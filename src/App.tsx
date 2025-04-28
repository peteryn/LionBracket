
import "@xyflow/react/dist/base.css";
import { NavLink } from "react-router";
export default function App() {
	return (
		<nav>
			{/*<NavLink to="/birmingham">Birmingham</NavLink>*/}
			<NavLink to="/regional">Regional</NavLink>
			<NavLink to="/afl">Afl</NavLink>
		</nav>
	)
}