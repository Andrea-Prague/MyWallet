import React, { useState, useEffect } from "react";
import styled from "styled-components";

// use library https://www.npmjs.com/package/react-datepicker?

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
  //   background-color: "#fa8072";
  //   color: "#fff";
`;

const TransactionDate = ({ date, chooseDate, setChooseDate }) => {
  useEffect(() => {
    setChooseDate(date);
  }, [date]);

  return (
    <StyledInput
      value={chooseDate}
      onChange={(event) => setChooseDate(event.target.value)}
    />
  );
};

export default TransactionDate;
