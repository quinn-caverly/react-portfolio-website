import React from "react";
import styled from "styled-components";

import ColorMash from "../images/colormash.png";

const Background = styled.section`
	background-color: #596a63;

	position: absolute;
	top: 0%;
	bottom: 0%;
	left: 0%;
	right: 0%;

	background: url(${ColorMash});
	height: 100vh;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export default class BackgroundColor extends React.Component {
	render() {
		return <Background></Background>;
	}
}
