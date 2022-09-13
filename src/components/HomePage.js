import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../css/HomePage.css";
import Colormash from "./HomePageComponents/Colormash";
import MainTitleStringComponent from "./HomePageComponents/MainTitleStringComponent";
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

const BottomSection = styled.section`
	height: 22.5%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	position: absolute;
	bottom: 0%;
	right: 0%;
	left: 0%;
`;

const BottomButtonSection = styled.section`
	height: 60%;
	width: 75%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;

	position: absolute;
	bottom: 20%;
`;

export default class HomePage extends React.Component {
	render() {
		return (
			<>
				<BackgroundColor></BackgroundColor>
				<BackgroundHolder>
					<Colormash></Colormash>
				</BackgroundHolder>
				<div className="MiddleLeftSection">
					<MainTitleStringComponent
						stringInput="Q"
						fontSize="90px"
						className="FirstSubLetter"
					></MainTitleStringComponent>
					<MainTitleStringComponent
						stringInput="uinn"
						fontSize="90px"
						className="NormalSubLetter"
					></MainTitleStringComponent>
					<MainTitleStringComponent
						stringInput="C"
						fontSize="90px"
						className="LastLetter"
					></MainTitleStringComponent>
					<MainTitleStringComponent
						stringInput="averly"
						fontSize="90px"
						className="NormalSubLetter"
					></MainTitleStringComponent>
				</div>
				<div className="MiddleLeftSubSection">
					<MainTitleStringComponent
						stringInput="Data Scientist || Computer Scientist"
						fontSize="40px"
						className="NormalSubLetter"
					></MainTitleStringComponent>
				</div>
				<BottomSection>
					<BottomButtonSection>
						<Link style={{ textDecoration: "none" }} to="/Projects">
							<motion.div
								className="BottomButton"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 1 },
								}}
								whileHover={{ scale: 0.95 }}
								onHoverStart={() =>
									this.setState({ scheme: "red" })
								}
							>
								Projects
							</motion.div>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/About">
							<motion.div
								className="BottomButton"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 1 },
								}}
								whileHover={{ scale: 0.95 }}
								onHoverStart={() =>
									this.setState({ scheme: "green" })
								}
							>
								Biography
							</motion.div>
						</Link>
					</BottomButtonSection>
				</BottomSection>
			</>
		);
	}
}
