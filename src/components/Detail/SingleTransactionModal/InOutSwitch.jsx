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

const SwitchOut = styled.div`
	background-color: ${props =>
		props.transactionType === "-" ? "#fa8072" : "#fff"};
	color: ${props => props.transactionType === "-" && "#fff"};
	width: 50%;
	border-radius: 10px 0 0 10px;
	text-align: center;
`;

const SwitchIn = styled.div`
	background-color: ${props =>
		props.transactionType === "+" ? "#fa8072" : "#fff"};
	color: ${props => props.transactionType === "+" && "#fff"};
	width: 50%;
	border-radius: 0 10px 10px 0;
	text-align: center;
`;

const InOuTSwitch = ({ setTransactionType, transactionType }) => {
	return (
		<Switch>
			<SwitchOut
				onClick={() => setTransactionType("-")}
				transactionType={transactionType}
			>
				Out
			</SwitchOut>
			<Divider />
			<SwitchIn
				onClick={() => setTransactionType("+")}
				transactionType={transactionType}
			>
				In
			</SwitchIn>
		</Switch>
	);
};

export default InOuTSwitch;
