import React from "react";
import InOuTSwitch from "./InOutSwitch";
import TransactionDate from "./TransactionDate";
import TransactionInput from "./TransactionInput";
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";

// conditional rendering on if it is a new or an existing transaction
const SingleTransactionModal = props => (
	<div>
		<div>{props.headerText}</div>
		<div>Close</div> {/* here is gonna be a x image to close */}
		<InOuTSwitch />
		<TransactionDate />
		<TransactionInput />
		<EditButton />
		<DeleteButton />
		<button>Save</button>
	</div>
);

export default SingleTransactionModal;
