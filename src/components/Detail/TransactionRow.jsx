import React from "react";
import Amount from "../Amount";
import DeleteButton from "./DeleteButton";
import styled from "styled-components";

const Row = styled.div`
	display: flex;
	margin: 10px;
	border-bottom: 1px solid #fa8072;
`;

const AmountWithButtons = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const Name = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
`;

const Currency = styled.div`
	padding: 0 5px;
`;

// props into amount for sign and number
const TransactionRow = ({
	name,
	sign,
	number,
	handleModalOpen,
	setHeaderEditTransaction
}) => {
	const handleOpenModalWithHeader = () => {
		handleModalOpen();
		setHeaderEditTransaction();
	};

	return (
		<Row onClick={handleOpenModalWithHeader}>
			<Name>{name}</Name>
			<AmountWithButtons>
				<Amount sign={sign} number={number} />
				<Currency>Kč</Currency>
				<DeleteButton />
			</AmountWithButtons>
		</Row>
	);
};

export default TransactionRow;
