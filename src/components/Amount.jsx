import React from "react";
import styled from "styled-components";

const StyledAmount = styled.div`
	color: ${props => (props.sign === "-" ? "#FF0000" : "#00ff00")};
`;

const Amount = ({ sign, number }) => (
	<StyledAmount sign={sign}>
		{sign}
		{number}
	</StyledAmount>
);

export default Amount;
