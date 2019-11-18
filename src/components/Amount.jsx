import React from "react";
import styled from "styled-components";

const StyledAmount = styled.div`
    color: ${({ type }) => (type === "-" ? "#FF0000" : "#00ff00")};
`;

const Amount = ({ type, amount }) => (
    <StyledAmount type={type}>
        {type}
        {amount}
    </StyledAmount>
);

export default Amount;
