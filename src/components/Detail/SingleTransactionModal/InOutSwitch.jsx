import React from "react";
import styled from "styled-components";

const Switch = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin: 10px auto;
	width: 80%;
	height: 20px;
	border: 1px solid;
	border-radius: 10px;
`;

const Divider = styled.div`
	border: 1px solid;
	height: 20px;
`;

const InOuTSwitch = () => {
	return (
		<Switch>
			<div>Out</div>
			<Divider />
			<div>In</div>
		</Switch>
	);
};

export default InOuTSwitch;
