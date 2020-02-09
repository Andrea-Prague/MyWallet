import React, { useState } from "react";
import BalanceSwitch from "../components/Detail/BalanceSwich";
import TransactionList from "../components/Detail/TransactionList";
import SingleTransactionModal from "../components/Detail/SingleTransactionModal/SingleTransactionModal";
import { TransactionData } from "../components/Data/TransactionData";

const Detail = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [balanceSwitch, setBalanceSwitch] = useState("all");
	const [headerText, setHeaderText] = useState("");
	const [transactions, setTransactions] = useState(TransactionData);
	const [transIdToEdit, setTransIdToEdit] = useState();
	const [editBalanceSwitch, setEditBalanceSwitch] = useState("out");

	const handleModalOpen = transactionId => {
		setIsModalOpen(!isModalOpen);
		transactionId && setTransIdToEdit(transactionId);
	};

	const handleAddTransaction = transaction => {
		setIsModalOpen(false);
		setTransactions([...transactions, transaction]);
	};

	return (
		<div>
			<BalanceSwitch setBalanceSwitch={setBalanceSwitch} />
			<TransactionList
				editTransaction={handleModalOpen}
				balanceSwitch={balanceSwitch}
				setHeaderText={() => setHeaderText("Edit transaction")}
				transactions={transactions}
				setTransactions={setTransactions}
			/>
			{isModalOpen && (
				<SingleTransactionModal
					headerText={headerText}
					handleModalOpen={handleModalOpen}
					handleAddTransaction={handleAddTransaction}
					transactions={transactions}
					setTransactions={setTransactions}
					transIdToEdit={transIdToEdit}
					editBalanceSwitch={editBalanceSwitch}
					setEditBalanceSwitch={setEditBalanceSwitch}
				/>
			)}
		</div>
	);
};

export default Detail;
