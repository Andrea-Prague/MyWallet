import React from "react";
import NavigationBar from "../components/Navigation/NavigationBar";

const Navigation = ({ setActiveOverview, setActiveDetail }) => {
	return (
		<NavigationBar
			setActiveOverview={setActiveOverview}
			setActiveDetail={setActiveDetail}
		/>
	);
};

export default Navigation;
