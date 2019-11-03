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

const SwitchSection = styled.div`
	width: 100%;
	cursor: pointer;
`;

const Divider = styled.div`
	border: 1px solid;
	height: 20px;
`;

const BalanceSwitch = ({ setSwitchAll, setSwitchIn, setSwitchOut }) => (
	<Switch>
		<SwitchSection onClick={setSwitchAll}>ALL</SwitchSection>
		<Divider />
		<SwitchSection onClick={setSwitchIn}>IN</SwitchSection>
		<Divider />
		<SwitchSection onClick={setSwitchOut}>OUT</SwitchSection>
	</Switch>
);

export default BalanceSwitch;
