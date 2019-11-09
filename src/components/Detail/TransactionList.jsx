import React from "react";
import TransactionRow from "./TransactionRow";

const TransactionList = ({
	handleModalOpen,
	balanceSwitch,
	setHeaderEditTransaction,
	transactions,
	setTransactions
}) => {
	const onDelete = index => {
		setTransactions(
			transactions.filter((_, transactionIndex) => transactionIndex !== index)
		);
	};

	return balanceSwitch === "all"
		? transactions.map((data, index) => (
				<TransactionRow
					key={index}
					name={data.name}
					sign={data.sign}
					number={data.number}
					handleModalOpen={handleModalOpen}
					setHeaderEditTransaction={setHeaderEditTransaction}
					onDelete={() => onDelete(index)}
				/>
		  ))
		: balanceSwitch === "in"
		? transactions.map(
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
		: transactions.map(
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
