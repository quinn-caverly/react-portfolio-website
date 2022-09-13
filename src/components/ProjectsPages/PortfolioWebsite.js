import React from "react";
import styled from "styled-components";

import "./Compositions.css";

import Colormash from "../HomePageComponents/Colormash";

import HomeButton from "../HomeButton";
import TextBox from "./components/TextBox";
import BackgroundColor from "../BackgroundColor";

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

export default class PortfolioWebsite extends React.Component {
	render() {
		return (
			<SuperContainer>
				<BackgroundColor></BackgroundColor>
				<BackgroundHolder>
					<Colormash></Colormash>
				</BackgroundHolder>
				<div className="ContentBoxScroller">
					<div className="TitleBox">
						<div className="ProjectTitle">
							Portfolio Website Created in ReactJS
						</div>
					</div>
					<TextBox
						text="This website was created using React JS with original components."
					></TextBox>
					<a
						className="ExternalLink"
						href="https://github.com/quinn-caverly/react-portfolio-website"
						target="_blank"
						rel="noreferrer"
					>
						Source via Github Repository
					</a>
					</div>
				<HomeButton></HomeButton>
			</SuperContainer>
		);
	}
}
