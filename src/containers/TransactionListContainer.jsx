import React, { useState, useEffect } from "react";
import { useApi } from "../lib/useApi";
import styled from "styled-components";

import BalanceSwitch from "../components/Detail/BalanceSwitch";
import TransactionList from "../components/Detail/TransactionList";
import SingleTransactionModal from "../components/Detail/SingleTransactionModal/SingleTransactionModal";

const NewTransactionButton = styled.div`
    background-color: #fa8072;
    height: 50px;
    width: 50px;
    color: #fff;
    border-radius: 50px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    font-size: 28px;
    cursor: pointer;
`;

const StyledPlusSign = styled.div`
    position: relative;
    top: 3px;
    left: 15px;
`

const Detail = () => {
    const { getTransactionList } = useApi();

    const [transactions, setTransactions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [balanceType, setBalanceType] = useState("all");
    const [headerText, setHeaderText] = useState("");
    const [transIdToEdit, setTransIdToEdit] = useState();

    const handleModalOpen = transactionId => {
        setIsModalOpen(!isModalOpen);
        setTransIdToEdit(transactionId);
    };

    const handleAddTransaction = transaction => {
        setIsModalOpen(false);
        setTransactions([...transactions, transaction]);
    };

    const createNewTransaction = () => {
        handleModalOpen();
        setHeaderText("Add new transaction");
    };

    const openEditTransaction = id => {
        handleModalOpen(id);
        setHeaderText("Edit transaction");
    };

    useEffect(() => {
        getTransactionList()
            .then(resp => setTransactions(resp.data))
            .catch(err => console.log({ err }));
    }, []);

    return (
        <div>
            {transactions && (
                <>
                    <BalanceSwitch balanceType={balanceType} setBalanceType={setBalanceType} />

                    <TransactionList
                        balanceType={balanceType}
                        transactions={transactions}
                        openEditTransaction={openEditTransaction}
                        setTransactions={setTransactions}
                    />

                    <NewTransactionButton onClick={() => createNewTransaction()}>
                        <StyledPlusSign>
                        +
                        </StyledPlusSign>
                    </NewTransactionButton>

                    {isModalOpen && (
                        <SingleTransactionModal
                            headerText={headerText}
                            handleModalClose={handleModalOpen}
                            handleAddTransaction={handleAddTransaction}
                            transactions={transactions}
                            setTransactions={setTransactions}
                            transIdToEdit={transIdToEdit}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default Detail;
