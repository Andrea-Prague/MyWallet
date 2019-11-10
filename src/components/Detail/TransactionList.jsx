import React from "react";
import TransactionRow from "./TransactionRow";

const TransactionList = ({
	handleModalOpen,
	balanceSwitch,
	setHeaderEditTransaction,
	transactions,
	setTransactions
}) => {
	const handleDelete = index => {
		setTransactions(
			transactions.filter((_, transactionIndex) => transactionIndex !== index)
		);
	};

	return balanceSwitch === "all"
		? transactions.map(data => (
				<TransactionRow
					key={data.id}
					name={data.name}
					type={data.type}
					number={data.number}
					handleModalOpen={handleModalOpen}
					setHeaderEditTransaction={setHeaderEditTransaction}
					handleDelete={() => handleDelete(data.id - 1)}
				/>
		  ))
		: balanceSwitch === "in"
		? transactions.map(
				data =>
					data.type === "+" && (
						<TransactionRow
							key={data.id}
							name={data.name}
							type={data.type}
							number={data.number}
							handleModalOpen={handleModalOpen}
							setHeaderEditTransaction={setHeaderEditTransaction}
							handleDelete={() => handleDelete(data.id - 1)}
						/>
					)
		  )
		: transactions.map(
				data =>
					data.type === "-" && (
						<TransactionRow
							key={data.id}
							name={data.name}
							type={data.type}
							number={data.number}
							handleModalOpen={handleModalOpen}
							setHeaderEditTransaction={setHeaderEditTransaction}
							handleDelete={() => handleDelete(data.id - 1)}
						/>
					)
		  );
};

export default TransactionList;
