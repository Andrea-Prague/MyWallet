import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
	background-color: #fa8072;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	width: 50px;
	color: #fff;
	border-radius: 50px;
	position: fixed;
	right: 20px;
	bottom: 20px;
	font-size: 28px;
	cursor: pointer;
`;

// add props for image and color, fixed position and onClick for opening modal
const NewTransactionButton = ({ handleModalOpen, setHeaderNewTransaction }) => {
	const handleOpenModalWithHeader = () => {
		handleModalOpen();
		setHeaderNewTransaction();
	};

	return <StyledButton onClick={handleOpenModalWithHeader}>+</StyledButton>;
};

export default NewTransactionButton;
