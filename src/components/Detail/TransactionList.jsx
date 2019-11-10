import React from "react";
import TransactionRow from "./TransactionRow";

const TransactionList = ({
    editTransaction,
    balanceSwitch,
    setHeaderText,
    transactions,
    setTransactions
}) => {
    const handleDelete = index => {
        setTransactions(
            transactions.filter(
                (_, transactionIndex) => transactionIndex !== index
            )
        );
    };

    const getFilteredTransactions = () => {
        return transactions.filter(data => {
            if (balanceSwitch === "all") return data;
            const transactionType = data.type === "+" ? "in" : "out";

            return transactionType === balanceSwitch;
        });
    };

    return getFilteredTransactions().map(data => (
        <TransactionRow
            key={data.id}
            name={data.name}
            type={data.type}
            number={data.number}
            editTransaction={() => editTransaction(data.id)}
            setHeaderText={setHeaderText}
            handleDelete={() => handleDelete(data.id - 1)}
        />
    ));
};

export default TransactionList;
