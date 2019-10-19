import React from "react";
import TransactionRow from "./TransactionRow";

// use filter method to see only in or out or total

const TransactionList = () => {
	const TransactionData = [
		{
			name: "first transaction",
			number: 300,
			sign: "+"
		},
		{
			name: "second transaction",
			number: 200,
			sign: "-"
		}
	];
	return TransactionData.map(data => (
		<TransactionRow name={data.name} sign={data.sign} number={data.number} />
	));
};

export default TransactionList;
