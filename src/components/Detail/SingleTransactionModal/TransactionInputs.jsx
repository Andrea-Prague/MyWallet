// put enabled and disabled accroding to if it is a new transaction or an existing one, if existing
// enable onClick on edit button
import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
	appearance: none;
`;

const TransactionInputs = ({ number, name, changeValues }) => {
	return (
		<>
			<StyledInput type="number" value={number} onChange={changeValues} />
			<StyledInput type="text" value={name} onChange={changeValues} />
		</>
	);
};

export default TransactionInputs;
