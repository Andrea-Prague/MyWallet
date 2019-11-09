import React from "react";
import Amount from "../Amount";
import styled from "styled-components";

const Row = styled.div`
	display: flex;
	margin: 10px;
	border-bottom: 1px solid #fa8072;
	justify-content: space-between;
`;

const StyledClickableRow = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const Name = styled.div`
	width: 100%;
`;

const Currency = styled.div`
	padding: 0 5px;
`;

const StyledDeleteButton = styled.div`
	background-color: #fa8072;
	color: #fff;
	border-radius: 5px;
	height: 20px;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 5px;
`;

// props into amount for type and number
const TransactionRow = ({
	name,
	type,
	number,
	handleModalOpen,
	setHeaderEditTransaction,
	handleDelete
}) => {
	const handleOpenModalWithHeader = () => {
		handleModalOpen();
		setHeaderEditTransaction();
	};

	return (
		<Row>
			<StyledClickableRow onClick={handleOpenModalWithHeader}>
				<Name>{name}</Name>
				<Amount type={type} number={number} />
				<Currency>Kč</Currency>
			</StyledClickableRow>
			<StyledDeleteButton onClick={handleDelete}>x</StyledDeleteButton>
		</Row>
	);
};

export default TransactionRow;
