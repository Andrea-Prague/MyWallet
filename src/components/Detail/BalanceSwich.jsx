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

const SwitchSection = styled.div`
    width: 100%;
    cursor: pointer;
    text-align: center;
`;

const Divider = styled.div`
    border: 1px solid;
    height: 20px;
`;

const BalanceSwitch = ({ setBalanceType }) => (
    <Switch>
        <SwitchSection onClick={() => setBalanceType("all")}>ALL</SwitchSection>
        <Divider />
        <SwitchSection onClick={() => setBalanceType("in")}>IN</SwitchSection>
        <Divider />
        <SwitchSection onClick={() => setBalanceType("out")}>OUT</SwitchSection>
    </Switch>
);

export default BalanceSwitch;
