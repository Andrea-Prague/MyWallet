import React, { useState, useEffect } from "react";
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
	transactions,
	setTransactions,
	transIdToEdit,
	editBalanceSwitch,
	setEditBalanceSwitch
}) => {
	const [values, setValues] = useState({ number: 0, name: "" });
	const [transactionType, setTransactionType] = useState("-");

	useEffect(() => {
		headerText === "Edit transaction" &&
			setValues(
				transactions.find(transaction => transaction.id === transIdToEdit)
			);
	}, []);

	const onEditTransactions = () => {
		let transactionsCopy = [...transactions];
		transactionsCopy[transIdToEdit - 1] = values;
		setTransactions(transactionsCopy);
		handleModalOpen();
	};

	return (
		<Modal>
			<Header>{headerText}</Header>
			<Close onClick={handleModalOpen}>X</Close>
			{/* here is gonna be a x image to close */}
			{headerText === "Edit transaction" && (
				<InOuTSwitch setTransactionType={setTransactionType} />
			)}
			<TransactionDate />
			<div>
				<StyledInput
					type="number"
					value={values.number} // add number from transaction if it is edit
					onChange={event =>
						setValues({ ...values, number: event.target.value })
					}
				/>
				<StyledInput
					type="text"
					value={values.name}
					onChange={event => setValues({ ...values, name: event.target.value })}
				/>
			</div>
			<button
				onClick={
					headerText === "Edit transaction"
						? onEditTransactions
						: () =>
								handleAddTransaction({
									...values,
									type: transactionType,
									id: transactions.length + 1
								})
				}
			>
				Save
			</button>
		</Modal>
	);
};

export default SingleTransactionModal;
