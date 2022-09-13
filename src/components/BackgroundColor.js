import React from "react";
import styled from "styled-components";

const Background = styled.section`
	background-color: #596A63;

	position: absolute;
	top: 0%;
	bottom: 0%;
	left: 0%;
	right: 0%;
`;

export default class BackgroundColor extends React.Component {
	render() {
		return (
			<Background></Background>
		);
	}
}
