import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Regional from "./regional/Regional.tsx";
import Afl from "./regional/Afl.tsx";
import { eu4combined, major1, major1Teams } from "./helper/TeamsTranslator.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}></Route>
				{/*<Route path="/birmingham" element={<Birmingham />}></Route>*/}
				<Route path="/regional" element={<Regional teams={eu4combined}/>}></Route>
				<Route path="/afl" element={<Afl teams={major1Teams}/>}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
