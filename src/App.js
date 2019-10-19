import React from "react";
import "./App.css";
import Navigation from "./containers/Navigation";
import Detail from "./containers/Detail";
import Overview from "./containers/Overview";

const App = () => (
	<>
		<Navigation />
		<Detail />
		<Overview />
	</>
);

export default App;
