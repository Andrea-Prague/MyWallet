import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Switch = styled.div`
    display: flex;
    margin: auto;
    border: solid 1px;
    border-radius: 10px;
    width: 85%;
    margin-top: 5px;
    color: "#000";
`;

const SwitchSection = styled(Link)`
    width: 100%;
    border-radius: ${props => props.balanceType === "in" ? "0" : props.balanceType === "all" ? "10px 0 0 10px" : "0 10px 10px 0"};
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: #000
    &:focus {
        background-color: #fa8072;
        color: #fff;
    }
`;

const Divider = styled.div`
    border: 1px solid;
    height: 20px;
`;

const BalanceSwitch = ({ balanceType, setBalanceType }) => (
    <Switch>
        <SwitchSection onClick={() => setBalanceType("all")} balanceType={balanceType}>ALL</SwitchSection>
        <Divider />
        <SwitchSection onClick={() => setBalanceType("in")} balanceType={balanceType}>IN</SwitchSection>
        <Divider />
        <SwitchSection onClick={() => setBalanceType("out")} balanceType={balanceType}>OUT</SwitchSection>
    </Switch>
);


export default BalanceSwitch;
