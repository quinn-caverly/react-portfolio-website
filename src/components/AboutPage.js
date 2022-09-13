import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import profilePic from "../images/profile_pic.jpeg";

import "../css/AboutPage.css";
import Colormash from "./HomePageComponents/Colormash";
import HomeButton from "./HomeButton";
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

export default class AboutPage extends React.Component {
	render() {
		return (
			<>
				<BackgroundColor></BackgroundColor>
				<BackgroundHolder>
					<Colormash></Colormash>
				</BackgroundHolder>

				<div className="MiddleSection">
					<div className="ProfilePicOutLine">
						<img
							className="ProfilePic"
							src={profilePic}
							alt="profilePic"
							draggable={false}
						/>
					</div>
					<div className="MiddleBottomSection">
						<div className="Bio">
							Quinn Caverly is currently an undergraduate student
							at the Pennsylvania State University. He is majoring
							in Computational Data Science in the School of
							Engineering and intends to graduate in 2025.
						</div>
						<div className="Info">quinncaverly@gmail.com</div>
						<div className="Info">443-835-0810</div>
					</div>
				</div>
				<div className="RightSection"></div>
				<div className="RightSection"></div>
				<HomeButton></HomeButton>
			</>
		);
	}
}
