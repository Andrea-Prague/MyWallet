import React from "react";
import BalanceSwitch from "../components/Detail/BalanceSwich";
import TransactionList from "../components/Detail/TransactionList";
import NavButtons from "../components/Detail/NavButtons";
import NewTransactionButton from "../components/Detail/NewTransactionButton";

const Detail = () => (
	<div>
		<BalanceSwitch />
		<TransactionList />
		<NavButtons />
		<NewTransactionButton />
	</div>
);

export default Detail;
