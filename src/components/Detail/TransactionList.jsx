import React from "react";
import TransactionRow from "./TransactionRow";
// import { useApi } from "../../lib/useApi";
import axios from "axios";

const TransactionList = ({
    balanceType,
    openEditTransaction,
    transactions,
    setTransactions
}) => {
    // const { deleteTransaction } = useApi

    const handleDelete = index => {
        console.log(index)
        console.log(transactions)
        const deleteTransaction = (transactions.find(
            (transactionObject) => transactionObject.id === index
        ))
        console.log(deleteTransaction)
        // deleteTransaction(deletedOject)
        axios.delete(`http://localhost:3001/TransactionData/${deleteTransaction.id}`,)
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
        setTransactions(
            transactions.filter(
                (transactionObject) => transactionObject.id !== index
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
            handleDelete={() => handleDelete(data.id)} // transactions start indexing from 1
        />
    ));
};

export default TransactionList;
