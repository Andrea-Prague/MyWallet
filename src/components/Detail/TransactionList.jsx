import React from "react";
import TransactionRow from "./TransactionRow";

const TransactionList = ({
	handleModalOpen,
	balanceSwitch,
	setHeaderEditTransaction,
	transactions,
	setTransactions,
	onChangeValue
}) => {
	const handleDelete = index => {
		setTransactions(
			transactions.filter((_, transactionIndex) => transactionIndex !== index)
		);
	};

	return balanceSwitch === "all"
		? transactions.map((data, index) => (
				<TransactionRow
					key={index}
					name={data.name}
					type={data.type}
					number={data.number}
					handleModalOpen={handleModalOpen}
					setHeaderEditTransaction={setHeaderEditTransaction}
					handleDelete={() => handleDelete(index)}
					onChangeValue={onChangeValue}
				/>
		  ))
		: balanceSwitch === "in"
		? transactions.map(
				(data, index) =>
					data.type === "+" && (
						<TransactionRow
							key={index}
							name={data.name}
							type={data.type}
							number={data.number}
							handleModalOpen={handleModalOpen}
							setHeaderEditTransaction={setHeaderEditTransaction}
							handleDelete={() => handleDelete(index)}
						/>
					)
		  )
		: transactions.map(
				(data, index) =>
					data.type === "-" && (
						<TransactionRow
							key={index}
							name={data.name}
							type={data.type}
							number={data.number}
							handleModalOpen={handleModalOpen}
							setHeaderEditTransaction={setHeaderEditTransaction}
							handleDelete={() => handleDelete(index)}
						/>
					)
		  );
};

export default TransactionList;
