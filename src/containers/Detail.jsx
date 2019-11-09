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

	const handleAddTransaction = () => {
		setTransactions([...transactions, { name: "nkl", number: 9, sign: "-" }]);
		setIsModalOpen(false);
	};

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
					handleAddTransaction={handleAddTransaction}
				/>
			)}
		</div>
	);
};

export default Detail;
