// put enabled and disabled accroding to if it is a new transaction or an existing one, if existing
// enable onClick on edit button
import React from "react";

const TransactionInput = ({ number }) => {
	return <input type="number">{number}</input>;
};

export default TransactionInput;