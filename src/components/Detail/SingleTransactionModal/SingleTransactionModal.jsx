import React, { useState, useEffect } from "react";
import InOuTSwitch from "./InOutSwitch";
import TransactionDate from "./TransactionDate";
import styled from "styled-components";
import { useApi } from "../../../lib/useApi";

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
	handleModalClose,
	handleAddTransaction,
	transactions,
	setTransactions,
	transIdToEdit
}) => {
	const { saveNewTransaction } = useApi();

	const [values, setValues] = useState({ amount: 0, name: "" });
	const [transactionType, setTransactionType] = useState()

	useEffect(() => {
		headerText === "Edit transaction" &&
			setValues(
				transactions.find(transaction => transaction.id === transIdToEdit) // return whole object from dtb with type and id keys
			);
			
	}, []);
	
	useEffect (() => {
		values.type && 
			setTransactionType(values.type);
	},[values]);


	const onEditTransactions = () => {
		let transactionsCopy = [...transactions];
		values.type = transactionType
		transactionsCopy[transIdToEdit - 1] = values;
		setTransactions(transactionsCopy);
		handleModalClose();
	};

	const addNewTransaction = () => {
		const transaction = {
			...values,
			type: transactionType ? transactionType : "+",
			id: transactions.length + 1
		};

		handleAddTransaction(transaction);
		saveNewTransaction(transaction);
	};

	return (
		
		<Modal>
			{console.log(values, transactionType)}
			<Header>{headerText}</Header>
			<Close onClick={handleModalClose}>X</Close>

			<InOuTSwitch transactionType={transactionType} setTransactionType={setTransactionType}/>

			<TransactionDate />
			<div>
				<StyledInput
					type="number"
					value={values.amount}
					onChange={event =>
						setValues({ ...values, amount: event.target.value })
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
						: addNewTransaction
				}
			>
				Save
			</button>
		</Modal>
	);
};

export default SingleTransactionModal;
