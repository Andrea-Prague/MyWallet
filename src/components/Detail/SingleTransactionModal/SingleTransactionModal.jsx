import React from "react";
import InOuTSwitch from "./InOutSwitch";
import TransactionDate from "./TransactionDate";
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

const Close = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	color: #fff;
	height: 10px;
	width: 10px;
`;

const StyledInput = styled.input`
	appearance: none;
`;

const SingleTransactionModal = ({
	headerText,
	handleModalOpen,
	handleAddTransaction,
	addTransactionNumber,
	addTransactionName,
	number,
	name,
	transactions,
	setTransactions
}) => {
	const onChangeValue = (e, index) => {
		let transactionsCopy = [...transactions];
		let concreteTransactionCopy = {
			...transactionsCopy[index],
			number: e.target.value
		};
		transactionsCopy[index] = concreteTransactionCopy;
		setTransactions(transactionsCopy);
		console.log(transactions);
	};

	return (
		<Modal>
			<Header>{headerText}</Header>
			<Close onClick={handleModalOpen}>X</Close>
			{/* here is gonna be a x image to close */}
			{headerText === "Edit transaction" && <InOuTSwitch />}
			<TransactionDate />
			<div>
				<StyledInput
					type="number"
					value={number} // add number from transaction if it is edit
					onChange={
						headerText === "Edit transaction"
							? onChangeValue
							: addTransactionNumber
					}
				/>
				<StyledInput
					type="text"
					value={name}
					onChange={
						headerText === "Edit transaction"
							? onChangeValue
							: addTransactionName
					}
				/>
			</div>
			<button onClick={handleAddTransaction}>Save</button>
		</Modal>
	);
};

export default SingleTransactionModal;
