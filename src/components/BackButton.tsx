import { Panel } from "@xyflow/react";
import { NavLink } from "react-router";

export function BackButton() {
	return (
		<Panel position="top-left">
			<NavLink className="back-button bourgeois" to="/">
				Back
			</NavLink>
		</Panel>
	);
}
