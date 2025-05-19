import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Regional from "./formats/Regional.tsx";
import {
	apac4Combined, apac5Combined,
	eu4Combined, eu5Combined,
	mena4Combined,
	mena5Combined,
	na4Combined,
	na5Combined, na6Combined, oce4Combined, oce5Combined,
	sam4Combined, sam5Combined, ssa4Combined, ssa5Combined
} from "./helper/teamTranslator.ts";
import Birmingham from "./birmingham/Birmingham.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App/>}></Route>
				<Route
					path="/europe_open_4"
					element={<Regional teams={eu4Combined} localStorageName="europe_open_4"/>}
				></Route>
				<Route
					path="/europe_open_5"
					element={<Regional teams={eu5Combined} localStorageName="europe_open_5"/>}
				></Route>
				<Route
					path="/north_america_open_4"
					element={<Regional teams={na4Combined} localStorageName={"na_open_4"}/>}
				></Route>
				<Route
					path="/north_america_open_5"
					element={<Regional teams={na5Combined} localStorageName={"na_open_5"}/>}
				></Route>
				<Route
					path="/north_america_open_6"
					element={<Regional teams={na6Combined} localStorageName={"na_open_6"}/>}
				></Route>
				<Route
					path="/south_america_open_4"
					element={<Regional teams={sam4Combined} localStorageName={"sam_open_4"}/>}
				></Route>
				<Route
					path="/south_america_open_5"
					element={<Regional teams={sam5Combined} localStorageName={"sam_open_5"}/>}
				></Route>
				<Route
					path="/middle_east_north_africa_open_4"
					element={<Regional teams={mena4Combined} localStorageName={"mena_open_4"}/>}
				></Route>
				<Route
					path="/middle_east_north_africa_open_5"
					element={<Regional teams={mena5Combined} localStorageName={"mena_open_5"}/>}
				></Route>
				<Route
					path="/oceania_open_4"
					element={<Regional teams={oce4Combined} localStorageName={"oce_open_4"}/>}
				></Route>
				<Route
					path="/oceania_open_5"
					element={<Regional teams={oce5Combined} localStorageName={"oce_open_5"}/>}
				></Route>
				<Route
					path="/asia_pacific_open_4"
					element={<Regional teams={apac4Combined} localStorageName={"apac_open_5"}/>}
				></Route>
				<Route
					path="/asia_pacific_open_5"
					element={<Regional teams={apac5Combined} localStorageName={"apac_open_4"}/>}
				></Route>
				<Route
					path="/sub_saharan_africa_open_4"
					element={<Regional teams={ssa4Combined} localStorageName={"ssa_open_4"}/>}
				></Route>
				<Route
					path="/sub_saharan_africa_open_5"
					element={<Regional teams={ssa5Combined} localStorageName={"ssa_open_5"}/>}
				></Route>
				<Route
					path="/birmingham"
					element={<Birmingham></Birmingham>}
				></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
