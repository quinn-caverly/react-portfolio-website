import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import WebsiteHomePage from "../../images/ProjectImages/WebsiteHomePage.png";
import "./Compositions.css";

export default class PortfolioWebsite extends React.Component {
	render() {
		return (
			<Link style={{ textDecoration: "none" }} to="/Projects/PortfolioWebsite">
				<div className="ImagesHolder">
					<img src={WebsiteHomePage} alt="Website HomePage" />
				</div>
				<div className="BottomSection">
					<div className="PreviewTitle">
						This Website Created with ReactJS
					</div>
				</div>
			</Link>
		);
	}
}
