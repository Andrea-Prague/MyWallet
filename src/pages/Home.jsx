import React, { useState } from "react";
import Navigation from "../containers/Navigation";
import Detail from "../containers/Detail";
import Overview from "../containers/Overview";

const Home = () => {
	const [isActiveOverview, setIsActiveOverview] = useState(true);

	console.log("overview", isActiveOverview);

	const setActiveOverview = () => {
		setIsActiveOverview(true);
	};

	const setActiveDetail = () => {
		setIsActiveOverview(false);
	};

	return (
		<>
			<Navigation
				setActiveOverview={setActiveOverview}
				setActiveDetail={setActiveDetail}
			/>
			{!isActiveOverview && <Detail />}
			{isActiveOverview && <Overview />}
		</>
	);
};

export default Home;
