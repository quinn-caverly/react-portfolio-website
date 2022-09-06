import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import AppImageWithoutDesktop from "../../images/ProjectImages/Spiderweb/wholeAppPicWithoutDesktop.png";


import "./Compositions.css";

export default class Spiderweb extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link style={{ textDecoration: "none" }} to="/Projects/Spiderweb">
				<div className="ImagesHolder">
					<img src={AppImageWithoutDesktop} alt="Spiderweb image w/ desktop" />
				</div>
				<div className="BottomSection">
					<div className="Title">
						NLP Based Java Productivity App, Similarity Between
						Notes
					</div>
				</div>
			</Link>
		);
	}
}
