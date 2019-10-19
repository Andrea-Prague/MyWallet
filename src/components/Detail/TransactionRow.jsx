import React, { useState } from "react";
import Amount from "../Amount";
import SingleTransactionModal from "./SingleTransactionModal/SingleTransactionModal";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

// props into amount for sign and number
const TransactionRow = props => {
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => setOpenModal(true);

	return (
		<div onClick={handleOpenModal}>
			<div>{props.name}</div>
			<Amount sign={props.sign} number={props.number} />
			<div>Kč</div>
			<EditButton />
			<DeleteButton />
			{openModal && <SingleTransactionModal />}
		</div>
	);
};

export default TransactionRow;
