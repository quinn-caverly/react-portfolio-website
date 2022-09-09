import React from "react";
import "../css/ProjectsPage.css";

export default class Skill extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		if (this.props.type == "Subskill") {
			if (this.props.hoveredSkills.includes(this.props.name)) {
				return <div className="SubskillHighlighted">{this.props.name}</div>;
			} else {
				return <div className="Subskill">{this.props.name}</div>;
			}
        }
        else if (this.props.type == "Skill") {
			if (this.props.hoveredSkills.includes(this.props.name)) {
				return <div className="SkillHighlighted">{this.props.name}</div>;
			} else {
				return <div className="Skill">{this.props.name}</div>;
			}
        }
	}
}
