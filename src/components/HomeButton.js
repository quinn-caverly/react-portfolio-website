import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../css/HomeButton.css";

export default class HomeButton extends React.Component {
	render() {
		return (
			<Link style={{ textDecoration: "none" }} to="/">
				<motion.div
					className="HomeButton"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 1 },
					}}
					whileHover={{ scale: 0.95 }}
				>
					QC
				</motion.div>
			</Link>
		);
	}
}
