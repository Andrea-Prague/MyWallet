import React, { useState } from "react";
import BalanceSwitch from "../components/Detail/BalanceSwich";
import TransactionList from "../components/Detail/TransactionList";
import NavButtons from "../components/Detail/NavButtons";
import NewTransactionButton from "../components/Detail/NewTransactionButton";
import SingleTransactionModal from "../components/Detail/SingleTransactionModal/SingleTransactionModal";

const Detail = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [balanceSwitch, setBalanceSwitch] = useState("all");

	const handleModalOpen = () => {
		setIsModalOpen(!isModalOpen);
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
			/>
			<NavButtons />
			<NewTransactionButton handleModalOpen={handleModalOpen} />
			{isModalOpen && (
				<SingleTransactionModal handleModalOpen={handleModalOpen} />
			)}
		</div>
	);
};

export default Detail;
