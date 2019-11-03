import React, { useState } from "react";
import BalanceSwitch from "../components/Detail/BalanceSwich";
import TransactionList from "../components/Detail/TransactionList";
import NavButtons from "../components/Detail/NavButtons";
import NewTransactionButton from "../components/Detail/NewTransactionButton";
import SingleTransactionModal from "../components/Detail/SingleTransactionModal/SingleTransactionModal";

const Detail = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div>
			<BalanceSwitch />
			<TransactionList handleModalOpen={handleModalOpen} />
			<NavButtons />
			<NewTransactionButton handleModalOpen={handleModalOpen} />
			{isModalOpen && (
				<SingleTransactionModal handleModalOpen={handleModalOpen} />
			)}
		</div>
	);
};

export default Detail;
