import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "../css/HomePage.css";
import Colormash from "./HomePageComponents/Colormash";
import FancyLetter from "./FancyLetter";
import MainTitleStringComponent from "./HomePageComponents/MainTitleStringComponent";

const MainSection = styled.section`
	height: 85%;
	display: flex;
	flex-direction: column;
`;

/* 	aspect-ratio: 1.777; */

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

const Button = styled(motion.button)`
	padding: 1rem 3rem;
	font-size: 1rem;
	border: 2px solid #fff;
	border-radius: 4px;
	outline: none;
	cursor: pointer;
	background: transparent;
	color: #fff;
`;

const ButtonBuffer = styled(motion.button)`
	width: 30%;
	background: transparent;
	border: 2px solid transparent;
`;

export default class HomePage extends React.Component {
	render() {
		return (
			<>
				<MainSection>
					<BackgroundHolder>
						<Colormash></Colormash>
					</BackgroundHolder>
				</MainSection>
				<div className="MiddleLeftSection">
					<MainTitleStringComponent stringInput="Q" fontSize="90px" className="FirstSubLetter"></MainTitleStringComponent>
					<MainTitleStringComponent stringInput="uinn" fontSize="90px" className="NormalSubLetter"></MainTitleStringComponent>
					<MainTitleStringComponent stringInput="C" fontSize="90px" className="LastLetter"></MainTitleStringComponent>
					<MainTitleStringComponent stringInput="averly" fontSize="90px" className="NormalSubLetter"></MainTitleStringComponent>
				</div>
				<div className="MiddleLeftSubSection">
					<MainTitleStringComponent stringInput="Data Scientist || Computer Scientist" fontSize="40px" className="NormalSubLetter"></MainTitleStringComponent>
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
								About
							</motion.div>
						</Link>
					</BottomButtonSection>
				</BottomSection>
			</>
		);
	}
}
