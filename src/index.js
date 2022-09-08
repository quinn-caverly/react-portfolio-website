import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import DsJobs from "./components/ProjectsPages/DsJobs";
import HomePage from "./components/HomePage";
import ExperiencePage from "./components/ExperiencePage";

import "./index.css";
import Spiderweb from "./components/ProjectsPages/Spiderweb";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<Routes>
			<Route path="/" element={<HomePage />}></Route>
			<Route path="/About" element={<AboutPage />}></Route>
			<Route path="/Projects" element={<ProjectsPage />}></Route>
			<Route path="/Projects/DsJobs" element={<DsJobs />}></Route>
			<Route path="/Projects/Spiderweb" element={<Spiderweb />}></Route>
			<Route path="/Experience" element={<ExperiencePage />}></Route>
		</Routes>
	</BrowserRouter>
);
