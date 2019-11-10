import React from "react";
import styled from "styled-components";

const StyledAmount = styled.div`
	color: ${props => (props.type === "-" ? "#FF0000" : "#00ff00")};
`;

const Amount = ({ type, number }) => (
	<StyledAmount type={type}>
		{type}
		{number}
	</StyledAmount>
);

export default Amount;
