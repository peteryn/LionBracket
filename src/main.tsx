import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Regional from "./formats/Regional.tsx";
import {
	apac4Combined, apac5Combined, apac6Combined,
	eu4Combined, eu5Combined, eu6Combined,
	euLcq,
	major1Teams,
	major2Teams,
	mena1v1,
	mena4Combined,
	mena5Combined, mena6Combined,
	na1v1,
	na4Combined,
	na5Combined, na6Combined, naLcq, oce1v1, oce4Combined, oce5Combined, oce6Combined,
	sam4Combined, sam5Combined, sam6Combined, ssa1v1, ssa4Combined, ssa5Combined, ssa6Combined
} from "./helper/teamTranslator.ts";
import Major from "./formats/Major.tsx";

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
					path="/europe_open_6"
					element={<Regional teams={eu6Combined} localStorageName="europe_open_6"/>}
				></Route>
				<Route
					path="/europe_lcq"
					element={<Regional teams={euLcq} localStorageName="europe_lcq"/>}
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
					path="/north_america_lcq"
					element={<Regional teams={naLcq} localStorageName={"na_lcq"}/>}
				></Route>
				<Route
					path="/north_america_open_1v1"
					element={<Regional teams={na1v1} localStorageName={"na_1v1"}/>}
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
					path="/south_america_open_6"
					element={<Regional teams={sam6Combined} localStorageName={"sam_open_6"}/>}
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
					path="/middle_east_north_africa_open_6"
					element={<Regional teams={mena6Combined} localStorageName={"mena_open_6"}/>}
				></Route>
				<Route
					path="/middle_east_north_africa_open_1v1"
					element={<Regional teams={mena1v1} localStorageName={"mena_1v1"}/>}
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
					path="/oceania_open_6"
					element={<Regional teams={oce6Combined} localStorageName={"oce_open_6"}/>}
				></Route>
				<Route
					path="/oceania_1v1"
					element={<Regional teams={oce1v1} localStorageName={"oce_1v1"}/>}
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
					path="/asia_pacific_open_6"
					element={<Regional teams={apac6Combined} localStorageName={"apac_open_6"}/>}
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
					path="/sub_saharan_africa_open_6"
					element={<Regional teams={ssa6Combined} localStorageName={"ssa_open_6"}/>}
				></Route>
				<Route
					path="/sub_saharan_africa_1v1"
					element={<Regional teams={ssa1v1} localStorageName={"ssa_1v1"}/>}
				></Route>
				<Route
					path="/birmingham"
					element={<Major teams={major1Teams} localSwissName="sb" localAflName="aflb"></Major>}
				></Route>
				<Route
					path="/raleigh"
					element={<Major teams={major2Teams} localSwissName="raleigh-sb" localAflName="raleigh-afl"></Major>}
				></Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
