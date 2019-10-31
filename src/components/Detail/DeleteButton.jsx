import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
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

const DeleteButton = ({ handleEditAction }) => {
	return <StyledButton onClick={handleEditAction}>x</StyledButton>;
};

export default DeleteButton;
