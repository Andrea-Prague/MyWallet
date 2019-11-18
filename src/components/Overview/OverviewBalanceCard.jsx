import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Amount from "../Amount";

const BalanceCard = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 20;
    display: flex;
    justify-content: center;
    margin: 10px auto;
    border: 1px solid #fa8072;
    border-radius: 20px;
    box-shadow: 5px 5px 5px #fa8072;
    display: flex;
    flex-direction: column;
    align-content: space-around;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 10px;
    color: #404052;
`;

const Balance = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
`;

const Divider = styled.div`
    border: solid 1px #fa8072;
    width: 80%;
    margin: 5px 0;
`;

const Header = styled.div`
    text-transform: uppercase;
`;

const OverviewBalanceCard = ({ header }) => {
    return (
        <BalanceCard>
            <StyledLink to={`/${header}`}>
                <Header>{header}</Header>
                <Balance>
                    IN
                    <Amount type={"+"} number={10} />
                </Balance>
                <Balance>
                    OUT
                    <Amount type={"-"} number={20} />
                </Balance>
                <Divider></Divider>
                <Balance>
                    TOTAL
                    <Amount type={"-"} number={10} />
                </Balance>
            </StyledLink>
        </BalanceCard>
    );
};

export default OverviewBalanceCard;
