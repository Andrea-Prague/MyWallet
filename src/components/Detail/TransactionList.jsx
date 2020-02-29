import React from "react";
import TransactionRow from "./TransactionRow";
import { useApi } from "../../lib/useApi";

const TransactionList = ({
    balanceType,
    openEditTransaction,
    transactions,
    setTransactions
}) => {
    const { deleteTransaction } = useApi()

    const handleDelete = index => {
        
        setTransactions(
            transactions.filter(
                (transactionObject) => transactionObject.id !== index
            )
        );
        deleteTransaction(index)

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
            handleDelete={() => handleDelete(data.id)} // transactions start indexing from 1
        />
    ));
};

export default TransactionList;
