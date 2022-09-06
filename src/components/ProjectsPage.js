import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../css/ProjectsPage.css";
import ProjectPreview from "./ProjectPreview";

import Colormash from "./HomePageComponents/Colormash";
import HomeButton from "./HomeButton";
import FancyLetter from "./FancyLetter";

const MainSection = styled.section`
	display: flex;

    top: 0%;
    bottom: 25%;
    left: 0%;
    right:; 0%;
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

const LeftTitleSection = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	color: #f6e5c3;

	min-width: 20%;
	min-height: 20%;

	position: absolute;
	top: 0%;
	bottom: 70%;
	left: 0%;
	right: 0%;
`;

const LeftSkillsSection = styled.section`
	display: flex;
	flex-direction: column;

	align-items: left;
	justify-content: center;

	min-width: 20%;

	position: absolute;
	top: 0%;
	bottom: 0%;
	left: 35%;
	right: 0%;
`;

export default class ProjectsPage extends React.Component {
	/* The state will include the on or off booleans for each
    of the skills or subskills so that these can be referenced from other
    components and highlight them depending on the project being presented */

	constructor(props) {
		super(props);
	}

	/* The LeftTitleSection will be placed after the LeftSkillsSection,
    This allows for the skills section to have elements
    centered across the screen, titlesection must overlap this skillssection */
	render() {
		return (
			<>
				<BackgroundHolder>
					<Colormash></Colormash>
				</BackgroundHolder>
				<motion.div
					className="LeftBox"
					initial={{ opacity: 0, x: -300 }}
					animate={{
						opacity: 1,
						x: 0,
						transition: { duration: 1 },
					}}
				>
					<LeftSkillsSection>
						<div className="Skill">
							Java
							<div className="Subskill">FX</div>
							<div className="Subskill">Swing</div>
						</div>
						<div className="Skill">
							Python
							<div className="Subskill">Pandas</div>
							<div className="Subskill">Matplotlib</div>
						</div>
						<div className="Skill">
							React JS
							<div className="Subskill">CSS</div>
							<div className="Subskill">JavaScript</div>
							<div className="Subskill">HTML</div>
						</div>
					</LeftSkillsSection>
					<LeftTitleSection>
						<FancyLetter
							text="S"
							className="FirstLetter"
							fontSize="40px"
						></FancyLetter>
						<FancyLetter
							text="k"
							className="NormalLetter"
							fontSize="40px"
						></FancyLetter>
						<FancyLetter
							text="i"
							className="NormalLetter"
							fontSize="40px"
						></FancyLetter>
						<FancyLetter
							text="l"
							className="NormalLetter"
							fontSize="40px"
						></FancyLetter>
						<FancyLetter
							text="l"
							className="NormalLetter"
							fontSize="40px"
						></FancyLetter>
						<FancyLetter
							text="s"
							className="LastLetter"
							fontSize="40px"
						></FancyLetter>
					</LeftTitleSection>
				</motion.div>
				<div className="RightBoxScroller">
					<div className="RightBox">
						<motion.div
							className="ProjectBox"
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: { duration: 1 },
							}}
							whileHover={{ borderWidth: "5px" }}
						>
							<ProjectPreview variant="Spiderweb"></ProjectPreview>
						</motion.div>
						<motion.div
							className="ProjectBox"
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: { duration: 1 },
							}}
							whileHover={{ borderWidth: "5px" }}
						>
							<ProjectPreview variant="DsJobs"></ProjectPreview>
						</motion.div>
					</div>
				</div>
				<HomeButton></HomeButton>
			</>
		);
	}
}

/*
			<>
				<div className="LeftBox">
					<LeftSkillsSection>
						<div className="Skill">
							Java
							<div className="Subskill">FX</div>
							<div className="Subskill">Swing</div>
						</div>
						<div className="Skill">
							Python
							<div className="Subskill">Pandas</div>
							<div className="Subskill">Matplotlib</div>
						</div>
						<div className="Skill">
							React JS
							<div className="Subskill">CSS</div>
							<div className="Subskill">JavaScript</div>
							<div className="Subskill">HTML</div>
						</div>
					</LeftSkillsSection>
					<LeftTitleSection>
						<div className="Title">Skills</div>
					</LeftTitleSection>
				</div>
				<div className="RightBox">
					<motion.div
						className="ProjectBox"
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { duration: 1 },
						}}
						whileHover={{ borderWidth: "5px" }}
					>
						<ProjectPreview variant="DsJobs"></ProjectPreview>
					</motion.div>
					<motion.div
						className="ProjectBox"
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: { duration: 1 },
						}}
						whileHover={{ borderWidth: "5px" }}
					>
						<ProjectPreview variant="Spiderweb"></ProjectPreview>
					</motion.div>
				</div>
			</>

			*/
