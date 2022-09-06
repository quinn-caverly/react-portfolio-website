import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../css/Letters.css";

export default class Letter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<motion.div
				className={this.props.className}
				initial={{ opacity: 0, x: -300 }}
				animate={{
					opacity: 1,
					x: 0,
					transition: { duration: 1 },
				}}
				whileTap={{ scale: 0.9 }}
				whileHover={{ scale: 0.95 }}
				drag={true}
				style={{ fontSize: this.props.fontSize , fontWeight: this.props.fontWeight}}
			>
				{this.props.text}
			</motion.div>
		);
	}
}
