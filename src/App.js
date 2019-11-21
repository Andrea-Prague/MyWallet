import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import BalanceDetail from "./containers/BalanceDetail";
import BalanceOverview from "./containers/BalanceOverview";
import TransactionListContainer from "./containers/TransactionListContainer";
import Navigation from "./components/Navigation";

const GlobalStyles = styled.div`
    @import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");
    font-family: "Roboto";
`;

const App = () => {
    return (
        <>
            <GlobalStyles />

            <BrowserRouter>
                <Navigation />

                <Switch>
                    <Route
                        component={TransactionListContainer}
                        path="/transactions"
                    />
                    <Route component={BalanceOverview} path="/" exact />
                    <Route component={BalanceDetail} path="/:name" />
                    <Route component={() => <p>404 Not Found</p>} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
