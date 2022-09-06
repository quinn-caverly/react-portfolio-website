import React, { useRef, useEffect } from "react";

const { tableau } = window;

function TableauEmbed() {
	const ref = useRef(null);
	const url =
		"https://public.tableau.com/views/DataScienceJobs_16572350760960/Sheet1";

	const initViz = () => {
        new tableau.Viz(ref.current, url, {
            width: "100%",
            height: "70vh",
		});
	};

	useEffect(initViz, []);

	return <div ref={ref} />;
}

export default TableauEmbed;
