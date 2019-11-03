import React from "react";
import TransactionRow from "./TransactionRow";

// needs fix

const TransactionList = ({ handleModalOpen, balanceSwitch }) => {
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

	return (
		balanceSwitch === "all" &&
			TransactionData.map(data => (
				<TransactionRow
					name={data.name}
					sign={data.sign}
					number={data.number}
					handleModalOpen={handleModalOpen}
				/>
			)),
		balanceSwitch === "in" &&
			TransactionData.map(
				data =>
					data.sign === "+" && (
						<TransactionRow
							name={data.name}
							sign={data.sign}
							number={data.number}
							handleModalOpen={handleModalOpen}
						/>
					)
			),
		balanceSwitch === "out" &&
			TransactionData.map(
				data =>
					data.sign === "-" && (
						<TransactionRow
							name={data.name}
							sign={data.sign}
							number={data.number}
							handleModalOpen={handleModalOpen}
						/>
					)
			)
	);
};

export default TransactionList;
