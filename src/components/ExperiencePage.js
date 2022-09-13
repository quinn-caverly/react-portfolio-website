import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../css/HomePage.css";
import Colormash from "./HomePageComponents/Colormash";
import BackgroundColor from "./BackgroundColor";

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

export default class ExperiencePage extends React.Component {
	render() {
		return (
			<>
				<BackgroundColor></BackgroundColor>
				<BackgroundHolder>
					<Colormash></Colormash>
				</BackgroundHolder>
			</>
		);
	}
}
