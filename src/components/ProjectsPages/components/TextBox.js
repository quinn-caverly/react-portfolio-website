import "../Compositions.css";
import React, { useState } from "react";


export default class TextBox extends React.Component {
	render() {
		return (
			<div className="TextBoxHolderHolder">
				<div className="TextBoxHolder">
                    <div className="TextBox">
                        {this.props.text}
					</div>
				</div>
			</div>
		);
	}
}