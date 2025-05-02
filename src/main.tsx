import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Regional from "./formats/Regional.tsx";
import { eu4combined } from "./helper/teamTranslator.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}></Route>
				<Route
					path="/europe_open_4"
					element={<Regional teams={eu4combined} localStorageName="europe_open_4"/>}
				></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
