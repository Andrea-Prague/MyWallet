import React from "react";
import NavigationBar from "../components/Navigation/NavigationBar";

const Navigation = ({ setActiveOverview, setActiveDetail }) => {
	return (
		<NavigationBar
			sesActiveOverview={setActiveOverview}
			setActiveDetail={setActiveDetail}
		/>
	);
};

export default Navigation;
