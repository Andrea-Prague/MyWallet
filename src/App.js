import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailedOverview from "./pages/DetailedOverview";

const GlobalStyles = styled.div`
	@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap");
	font-family: "Roboto";
`;

const App = () => {
	return (
		<>
			<GlobalStyles>
				<BrowserRouter>
					<Switch>
						{/* <Route component={() => <Home upravState={upravState} />} path="/" exact /> */}
						<Route component={Home} path="/" exact />
						<Route component={DetailedOverview} path="/:name" />
						{/* udelej si custom stranku na not found a pridej jako komponentu */}
						<Route component={() => <p>404 Not Found</p>} />
					</Switch>
				</BrowserRouter>
			</GlobalStyles>
		</>
	);
};

export default App;
