import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Regional from "./formats/Regional.tsx";
import { eu4combined, na4combined } from "./helper/teamTranslator.ts";
import Birmingham from "./birmingham/Birmingham.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}></Route>
				<Route
					path="/europe_open_4"
					element={<Regional teams={eu4combined} localStorageName="europe_open_4"/>}
				></Route>
				<Route
					path="/north_america_open_4"
					element={<Regional teams={na4combined} localStorageName={"na_open_4"}/>}
				></Route>
				<Route
					path="/birmingham"
					element={<Birmingham></Birmingham>}
				></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
