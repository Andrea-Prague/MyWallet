import React, { useState, useEffect } from "react";
import InOuTSwitch from "./InOutSwitch";
import TransactionDate from "./TransactionDate";
import TransactionInput from "./TransactionInput";
import styled from "styled-components";

const Modal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #fff;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fa8072;
	color: #fff;
	height: 70px;
	font-weight: bold;
	font-size: 20px;
`;

const styledButtonGroup = styled.div`
	display: flex;
`;

const Close = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	color: #fff;
	height: 10px;
	width: 10px;
`;

const SingleTransactionModal = ({
	headerText,
	handleModalOpen,
	handleAddTransaction
}) => {
	return (
		<Modal>
			<Header>{headerText}</Header>
			<Close onClick={handleModalOpen}>X</Close>

			{/* here is gonna be a x image to close */}
			<InOuTSwitch />
			<TransactionDate />
			<div>
				<TransactionInput />
			</div>
			<styledButtonGroup>
				<button onClick={handleAddTransaction}>Save</button>
			</styledButtonGroup>
		</Modal>
	);
};

export default SingleTransactionModal;
