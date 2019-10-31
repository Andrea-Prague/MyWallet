import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./containers/Navigation";
import Detail from "./containers/Detail";
import Overview from "./containers/Overview";
import styled from "styled-components";

const GlobalStyles = styled.div`
	@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");
	font-family: "Roboto";
`;

const App = () => {
	const [isActiveOverview, setIsActiveOverview] = useState(true);
	const [isActiveDetail, setIsActiveDetail] = useState(false);

	const setActiveTab = () => {
		setIsActiveOverview(!isActiveOverview);
		setIsActiveDetail(!isActiveDetail);
	};

	return (
		<GlobalStyles>
			<Navigation
				isActiveOverview={isActiveOverview}
				isActiveDetail={isActiveDetail}
				setActiveTab={setActiveTab}
			/>
			{isActiveDetail && <Detail />}
			{isActiveOverview && <Overview />}
		</GlobalStyles>
	);
};

export default App;
