import React, { useState, useEffect } from "react";

// use library https://www.npmjs.com/package/react-datepicker?
const TransactionDate = ({date}) => {
	const [chooseDate, setChooseDate] = useState();
	
	useEffect (() => {
		setChooseDate(date) 
	}, [date])

	console.log(date)
	console.log(chooseDate)
	return (
		<div>
			{/* <button>{"today"}</button> */}
			<div>{chooseDate}</div>
		</div>
	);
};

export default TransactionDate;

