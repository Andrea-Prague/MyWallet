import React, { useState, useEffect } from "react";
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
`;

const NavigationBar = ({ setActiveTab }) => {
	return (
		<Navigation>
			<NavigationTab onClick={setActiveTab}>Overview</NavigationTab>
			<NavigationTab onClick={setActiveTab}>Detail</NavigationTab>
		</Navigation>
	);
};

export default NavigationBar;
