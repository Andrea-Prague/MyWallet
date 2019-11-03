import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Daily from "../pages/Daily";
import App from "../App";

const Pages = () => {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route component={App} path="/" exact />
					<Route component={Daily} path="/daily" />
				</Switch>
			</BrowserRouter>
		</>
	);
};

export default Pages;
