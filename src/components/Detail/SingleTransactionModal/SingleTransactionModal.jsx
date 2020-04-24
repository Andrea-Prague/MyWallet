import React, { useState, useEffect } from "react";
import InOuTSwitch from "./InOutSwitch";
import TransactionDate from "./TransactionDate";
import styled from "styled-components";
import { useApi } from "../../../lib/useApi";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fa8072;
  color: #fff;
  height: 70px;
  font-weight: bold;
  font-size: 20px;
`;

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  height: 10px;
  width: 10px;
`;

const StyledInput = styled.input`
  appearance: none;
  margin: 5px;
  box-shadow: none;
  border: 1px solid;
  border-radius: 15px;
  height: 30px;
  width: 80%;
  padding: 5px;
  font-weight: 600;
  font-size: 20px;
  background-color: "#fa8072";
  color: "#000";
`;

const StyledButton = styled.button`
  appearance: none;
`;

const StyledEntries = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SingleTransactionModal = ({
  headerText,
  handleModalClose,
  handleAddTransaction,
  transactions,
  setTransactions,
  transIdToEdit,
}) => {
  const { saveNewTransaction, editTransaction } = useApi();

  const [values, setValues] = useState({ amount: 0, name: "" });
  const [transactionType, setTransactionType] = useState();
  const [chooseDate, setChooseDate] = useState();

  useEffect(() => {
    headerText === "Edit transaction" &&
      setValues(
        transactions.find((transaction) => transaction.id === transIdToEdit) // return whole object from dtb with type and id keys
      );
  }, []);

  useEffect(() => {
    values.type && setTransactionType(values.type);
  }, [values]);

  const onEditTransactions = () => {
    let transactionsCopy = [...transactions];
    values.type = transactionType;
    values.date = chooseDate;

    transactionsCopy.map((transactionCopy, i) => {
      if (transactionCopy.id === values.id) {
        // telling the specific object I am editing (transactionCopy[i]) to take the right and edited values
        transactionsCopy[i] = values;
      }
      return transactionsCopy; // return updated transations
    });
    setTransactions(transactionsCopy);
    editTransaction(values, values.id);
    handleModalClose();
  };

  const addNewTransaction = () => {
    const transaction = {
      ...values,
      type: transactionType ? transactionType : "+",
      id: Date.now(),
      date: chooseDate,
    };

    handleAddTransaction(transaction);
    saveNewTransaction(transaction);
  };

  return (
    <Modal>
      <Header>{headerText}</Header>
      <Close onClick={handleModalClose}>X</Close>

      <InOuTSwitch
        transactionType={transactionType}
        setTransactionType={setTransactionType}
      />
      <StyledEntries>
        <TransactionDate
          date={
            headerText === "Edit transaction"
              ? values.date
              : new Date().toLocaleDateString()
          }
          chooseDate={chooseDate}
          setChooseDate={setChooseDate}
        />
        <StyledInput
          type="number"
          value={values.amount}
          onChange={(event) =>
            setValues({ ...values, amount: event.target.value })
          }
        />
        <StyledInput
          type="text"
          value={values.name}
          onChange={(event) =>
            setValues({ ...values, name: event.target.value })
          }
        />
        <StyledButton
          onClick={
            headerText === "Edit transaction"
              ? onEditTransactions
              : addNewTransaction
          }
        >
          Save
        </StyledButton>
      </StyledEntries>
    </Modal>
  );
};

export default SingleTransactionModal;
