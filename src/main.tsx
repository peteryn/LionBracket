import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Birmingham from "./birmingham/Birmingham";
import Regional from "./regional/Regional.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}></Route>
				<Route path="/birmingham" element={<Birmingham />}></Route>
				<Route path="/regional" element={<Regional />}></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
