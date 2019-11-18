import React from "react";
import TransactionRow from "./TransactionRow";

const TransactionList = ({
    balanceType,
    openEditTransaction,
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
            if (balanceType === "all") return data;
            const transactionType = data.type === "+" ? "in" : "out";

            return transactionType === balanceType;
        });
    };

    return getFilteredTransactions().map(data => (
        <TransactionRow
            transaction={data}
            openEditTransaction={() => openEditTransaction(data.id)}
            handleDelete={() => handleDelete(data.id - 1)}
        />
    ));
};

export default TransactionList;
