import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./Compositions.css";

import Colormash from "../HomePageComponents/Colormash";

import tableau from "tableau-api";
import TableauEmbed from "./components/TableauEmbed";
import HomeButton from "../HomeButton";

import { Document, Page } from "react-pdf";

const SuperContainer = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: left;

	top: 0%;
	bottom: 0%;
	left: 0%;
	right: 0%;
`;

const BackgroundHolder = styled.section`
	display: flex;
	justify-content: flex-start;
	align-items: left;

	position: absolute;

	left: 0%;
	top: 0%;

	min-height: 100%;
	min-width: 100%;

	aspect-ratio: 1.777;
`;

export default class DsJobs extends React.Component {
	render() {
		return (
			<SuperContainer>
				<BackgroundHolder>
					<Colormash></Colormash>
				</BackgroundHolder>
				<div className="ContentBoxScroller">
					<div className="TitleBox">
						<div className="ProjectTitle">
							DataScience Jobs Visualization using Tableau and
							Pandas / Python using Glassdoor Salary Estimation
							Data
						</div>
					</div>
					<div className="TableauEmbedHolder">
						<TableauEmbed></TableauEmbed>
					</div>
					<a
						className="ExternalLink"
						href="https://colab.research.google.com/drive/1Bge-PuhmiWcS1jMxzToaXDsRXlLLnndD?usp=sharing"
						target="_blank"
						rel="noreferrer"
					>
						Jupyter Notebook with Annotations and Exploratory Data
						Analysis
					</a>
					<a
						className="ExternalLink"
						href="https://colab.research.google.com/drive/1N4mcso2xOADvEdNCfHhNgzV3Flf9pfFA?usp=sharing"
						target="_blank"
						rel="noreferrer"
					>
						Jupyter Notebook with Focused Code for Tableau Dashboard
					</a>
					<a
						className="ExternalLink"
						href="https://public.tableau.com/app/profile/quinn.caverly7850/viz/DataScienceJobs_16572350760960/Sheet1"
						target="_blank"
						rel="noreferrer"
					>
						Tableau Dashboard
					</a>
				</div>
				<HomeButton></HomeButton>
			</SuperContainer>
		);
	}
}
