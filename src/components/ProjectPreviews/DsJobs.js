import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import TableauImage from "../../images/ProjectImages/tableau_pic.png";
import ".//Compositions.css";

export default class DsJobs extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link style={{ textDecoration: "none" }} to="/Projects/DsJobs">
				<div className="ImagesHolder">
					<img src={TableauImage} alt="Tableau Image" />
				</div>
				<div className="BottomSection">
					<div className="PreviewTitle">
						DataScience Jobs Visualization with Tableau
					</div>
				</div>
			</Link>
		);
	}
}
