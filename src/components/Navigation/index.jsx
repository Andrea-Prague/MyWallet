import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledNavigation = styled.div`
    background-color: #fa8072;
    color: #fff;
    text-transform: uppercase;
    height: 70px;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
`;

const NavigationTab = styled.div`
    border: 1px solid #fff;
    width: 100%;
    height: 100%;
    text-align: center;

    &:hover {
        border-top: 3px #fff solid;
    }
`;

const Navigation = () => {
    const { push } = useHistory();

    return (
        <StyledNavigation>
            <NavigationTab onClick={() => push("/")}>Overview</NavigationTab>
            <NavigationTab onClick={() => push("/transactions")}>
                Detail
            </NavigationTab>
        </StyledNavigation>
    );
};

export default Navigation;
