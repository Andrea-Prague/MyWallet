import React, { useState } from "react";
import BalanceSwitch from "../components/Detail/BalanceSwich";
import TransactionList from "../components/Detail/TransactionList";
import NavButtons from "../components/Detail/NavButtons";
import NewTransactionButton from "../components/Detail/NewTransactionButton";
import SingleTransactionModal from "../components/Detail/SingleTransactionModal/SingleTransactionModal";
import { TransactionData } from "../components/Data/TransactionData";

const Detail = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [balanceSwitch, setBalanceSwitch] = useState("all");
	const [headerText, setHeaderText] = useState("");
	const [transactions, setTransactions] = useState(TransactionData);
	const [number, setNumber] = useState(null);
	const [name, setName] = useState(undefined);

	const handleModalOpen = () => {
		setIsModalOpen(!isModalOpen);
	};

	const setHeaderNewTransaction = () => {
		setHeaderText("Add new transaction");
	};

	const setHeaderEditTransaction = () => {
		setHeaderText("Edit transaction");
	};

	const setSwitchIn = () => {
		setBalanceSwitch("in");
	};

	const setSwitchOut = () => {
		setBalanceSwitch("out");
	};

	const setSwitchAll = () => {
		setBalanceSwitch("all");
	};

	const addTransactionNumber = value => {
		setNumber(value);
	};

	const addTransactionName = value => {
		setName(value);
	};

	const handleAddTransaction = () => {
		setIsModalOpen(false);
		setTransactions([
			...transactions,
			{ name: name, number: number, type: "-" }
		]);
	};

	const onChangeValue = (value, index) => {
		let transactionsCopy = [...transactions];
		let concreteTransactionCopy = {
			...transactionsCopy[index],
			number: value
		};
		transactionsCopy[index] = concreteTransactionCopy;
		setTransactions(transactionsCopy);
	};
	console.log(transactions);

	return (
		<div>
			<BalanceSwitch
				setSwitchIn={setSwitchIn}
				setSwitchOut={setSwitchOut}
				setSwitchAll={setSwitchAll}
			/>
			<TransactionList
				handleModalOpen={handleModalOpen}
				balanceSwitch={balanceSwitch}
				setHeaderEditTransaction={setHeaderEditTransaction}
				transactions={transactions}
				setTransactions={setTransactions}
			/>
			<NavButtons />
			<NewTransactionButton
				handleModalOpen={handleModalOpen}
				setHeaderNewTransaction={setHeaderNewTransaction}
			/>
			{isModalOpen && (
				<SingleTransactionModal
					headerText={headerText}
					handleModalOpen={handleModalOpen}
					addTransactionNumber={e => addTransactionNumber(e.target.value)}
					addTransactionName={e => addTransactionName(e.target.value)}
					handleAddTransaction={handleAddTransaction}
					onChangeValue={(e, index) => onChangeValue(e.target.value, index)}
				/>
			)}
		</div>
	);
};

export default Detail;
