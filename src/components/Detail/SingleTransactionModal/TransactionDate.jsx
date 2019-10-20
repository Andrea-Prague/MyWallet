import React, { useState } from "react";

// use library? Maybe https://www.npmjs.com/package/react-datepicker?
const TransactionDate = props => {
	let date = new Date();
	const [chooseDate, setChooseDate] = useState(date);
	return (
		<div>
			{/* <button>{"today"}</button> */}
			{/* <input>{chooseDate}</input> */}
		</div>
	);
};

export default TransactionDate;
