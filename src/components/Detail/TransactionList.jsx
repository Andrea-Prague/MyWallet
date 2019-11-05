import React from "react";
import TransactionRow from "./TransactionRow";

const TransactionList = ({
	handleModalOpen,
	balanceSwitch,
	setHeaderEditTransaction
}) => {
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

	return balanceSwitch === "all"
		? TransactionData.map((data, index) => (
				<TransactionRow
					key={index}
					name={data.name}
					sign={data.sign}
					number={data.number}
					handleModalOpen={handleModalOpen}
					setHeaderEditTransaction={setHeaderEditTransaction}
				/>
		  ))
		: balanceSwitch === "in"
		? TransactionData.map(
				data =>
					data.sign === "+" && (
						<TransactionRow
							name={data.name}
							sign={data.sign}
							number={data.number}
							handleModalOpen={handleModalOpen}
						/>
					)
		  )
		: TransactionData.map(
				data =>
					data.sign === "-" && (
						<TransactionRow
							name={data.name}
							sign={data.sign}
							number={data.number}
							handleModalOpen={handleModalOpen}
						/>
					)
		  );
};

export default TransactionList;
