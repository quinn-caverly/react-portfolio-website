import "../Compositions.css";
import React, { useState } from "react";


import picNoBorders from "../../../images/ProjectImages/Spiderweb/picNoBorders.png";
import complexDiagram from "../../../images/ProjectImages/Spiderweb/complexDiagram.png";
import classifierExample from "../../../images/ProjectImages/Spiderweb/classifierExample.png";
import someStandardNote from "../../../images/ProjectImages/Spiderweb/someStandardNote.png";
import someDailyNote from "../../../images/ProjectImages/Spiderweb/someDailyNote.png";
import someReadingNote from "../../../images/ProjectImages/Spiderweb/someReadingNote.png";

export default class ImageHolder extends React.Component {
	render() {
		return (
			<div className="ImagesHolderHolderHolder">
				<div className="ImagesHolderHolder">
					<div className="ImageHolder">
						<img
							className="Image"
							src={this.props.src}
							alt={this.props.alt}
						/>
					</div>
				</div>
			</div>
		);
	}
}
