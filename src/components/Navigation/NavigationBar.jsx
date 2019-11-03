import React from "react";
import styled from "styled-components";

const Navigation = styled.div`
	background-color: #fa8072;
	color: #fff;
	text-transform: uppercase;
	display: flex;
	justify-content: space-around;
	align-items: center;
	height: 70px;
	cursor: pointer;
	font-weight: bold;
`;

const NavigationTab = styled.div`
	border: 1px solid #fff;
	width: 100%;
	height: 100%;
`;

const NavigationBar = ({ setActiveOverview, setActiveDetail }) => {
	return (
		<Navigation>
			<NavigationTab onClick={setActiveOverview}>Overview</NavigationTab>
			<NavigationTab onClick={setActiveDetail}>Detail</NavigationTab>
		</Navigation>
	);
};

export default NavigationBar;
