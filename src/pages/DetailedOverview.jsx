import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import TransactionList from "../components/Detail/TransactionList";

const StyledPage = styled.div`
	margin: 10px;
`;

const StyledHeader = styled.div`
	text-align: center;
	text-transform: uppercase;
	font-weight: 700;
`;

const StyledButton = styled.button`
	border: solid 1px #fa8072;
	border-radius: 20px;
	box-shadow: 2px 2px 10px #fa8072;
	background-color: #fff;
	width: 100%;
	height: 40px;
	cursor: pointer;
	margin-top: 10px;
`;

const Daily = () => {
	const { push } = useHistory();
	const { name } = useParams();

	return (
		<StyledPage>
			<StyledHeader>{name}</StyledHeader>
			{/* Tady bude casem volani na backend s props filtrem, ktery nastavi, co se ma zobrazovat, 
			pripadne nejaka featura, ktera udela tuto sekci zajimavou */}
			<TransactionList />
			<StyledButton onClick={() => push("/")}>Back</StyledButton>
		</StyledPage>
	);
};

export default Daily;
