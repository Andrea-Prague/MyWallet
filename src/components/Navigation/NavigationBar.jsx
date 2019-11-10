import React from "react";
import styled from "styled-components";

const StyledNavigation = styled.div`
	background-color: #fa8072;
	color: #fff;
	text-transform: uppercase;
	height: 70px;
	cursor: pointer;
	font-weight: bold;
	display: flex;
	align-items: center;
`;

const NavigationTab = styled.div`
	border: 1px solid #fff;
	width: 100%;
	height: 100%;
	text-align: center;

	&:hover {
		border-top: 3px #fff solid;
	}
`;

const NavigationBar = ({ setActiveOverview, setActiveDetail }) => {
	return (
		<StyledNavigation>
			<NavigationTab onClick={setActiveOverview}>Overview</NavigationTab>
			<NavigationTab onClick={setActiveDetail}>Detail</NavigationTab>
		</StyledNavigation>
	);
};

export default NavigationBar;
