/* this will route to the different types of project preview components depending on the specific project
which is being shown */

import React from "react";

import DsJobs from "./ProjectPreviews/DsJobs.js";
import Spiderweb from "./ProjectPreviews/Spiderweb.js";
import PortfolioWebsite from "./ProjectPreviews/PortfolioWebsite.js";

export default class ProjectPreview extends React.Component {
	render() {
		if (this.props.variant === "DsJobs") {
			return <DsJobs />;
		} else if (this.props.variant === "Spiderweb") {
			return <Spiderweb />;
		} else if (this.props.variant === "PortfolioWebsite") {
			return <PortfolioWebsite />;
		}
	}
}
