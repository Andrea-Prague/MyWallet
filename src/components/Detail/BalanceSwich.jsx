import React from "react";
import styled from "styled-components";

const Switch = styled.div`
	display: flex;
	margin: auto;
	border: solid 1px;
	border-radius: 10px;
	width: 80%;
	justify-content: space-evenly;
	padding: 3px;
	margin-top: 5px;
`;

const Divider = styled.div`
	border: 1px solid;
	height: 20px;
`;

const BalanceSwitch = () => (
	<Switch>
		<div>ALL</div>
		<Divider />
		<div>IN</div>
		<Divider />
		<div>OUT</div>
	</Switch>
);

export default BalanceSwitch;
