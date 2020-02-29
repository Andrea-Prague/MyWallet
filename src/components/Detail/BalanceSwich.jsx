import React from "react";
import styled from "styled-components";

const Switch = styled.div`
    display: flex;
    margin: auto;
    border: solid 1px;
    border-radius: 10px;
    width: 80%;
    padding: 3px;
    margin-top: 5px;
`;

const SwitchSectionAll = styled.div`
    width: 100%;
    cursor: pointer;
    text-align: center;
    background-color: ${props =>
        props.balanceType === 'all' ? "#fa8072" : "#fff"};
    color: ${props => props.balanceType === "all" && "#fff"};
`;
const SwitchSectionIn = styled.div`
    width: 100%;
    cursor: pointer;
    text-align: center;
    background-color: ${props =>
        props.balanceType === 'in' ? "#fa8072" : "#fff"};
    color: ${props => props.balanceType === "in" && "#fff"};
`;
const SwitchSectionOut = styled.div`
    width: 100%;
    cursor: pointer;
    text-align: center;
    background-color: ${props =>
        props.balanceType === 'out' ? "#fa8072" : "#fff"};
    color: ${props => props.balanceType === "out" && "#fff"};
`;

const Divider = styled.div`
    border: 1px solid;
    height: 20px;
`;

const BalanceSwitch = ({ balanceType, setBalanceType }) => (
    <Switch>
        <SwitchSectionAll onClick={() => setBalanceType("all")}>ALL</SwitchSectionAll>
        <Divider />
        <SwitchSectionIn onClick={() => setBalanceType("in")}>IN</SwitchSectionIn>
        <Divider />
        <SwitchSectionOut onClick={() => setBalanceType("out")}>OUT</SwitchSectionOut>
    </Switch>
);

export default BalanceSwitch;
