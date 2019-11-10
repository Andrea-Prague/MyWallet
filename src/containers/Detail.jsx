import React, { useState } from "react";
import BalanceSwitch from "../components/Detail/BalanceSwich";
import TransactionList from "../components/Detail/TransactionList";
import NavButtons from "../components/Detail/NavButtons";
import NewTransactionButton from "../components/Detail/NewTransactionButton";
import SingleTransactionModal from "../components/Detail/SingleTransactionModal/SingleTransactionModal";
import { TransactionData } from "../components/Data/TransactionData";

const Detail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [balanceSwitch, setBalanceSwitch] = useState("all");
    const [headerText, setHeaderText] = useState("");
    const [transactions, setTransactions] = useState(TransactionData);
    const [transIdToEdit, setTransIdToEdit] = useState();

    const handleModalOpen = transactionId => {
        setIsModalOpen(!isModalOpen);
        transactionId && setTransIdToEdit(transactionId);
    };

    const handleAddTransaction = transaction => {
        setIsModalOpen(false);
        setTransactions([...transactions, transaction]);
    };

    return (
        <div>
            <BalanceSwitch setBalanceSwitch={setBalanceSwitch} />
            <TransactionList
                editTransaction={handleModalOpen}
                balanceSwitch={balanceSwitch}
                setHeaderText={() => setHeaderText("Edit transaction")}
                transactions={transactions}
                setTransactions={setTransactions}
            />
            <NavButtons />
            <NewTransactionButton
                handleModalOpen={handleModalOpen}
                setHeaderText={() => setHeaderText("Add new transaction")}
            />
            {isModalOpen && (
                <SingleTransactionModal
                    headerText={headerText}
                    handleModalOpen={handleModalOpen}
                    handleAddTransaction={handleAddTransaction}
                    transactions={transactions}
                    setTransactions={setTransactions}
                    transIdToEdit={transIdToEdit}
                />
            )}
        </div>
    );
};

export default Detail;
