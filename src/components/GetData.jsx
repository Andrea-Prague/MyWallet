import React, { useEffect, useState } from "react";
import Axios from "axios";

export const GetData = () => {
	const [transactionsData, setTransactionsData] = useState(null);

	const fetchData = async () => {
		try {
			const response = await Axios.get("http://localhost:3001/TransactionData");
			console.log(response);

			const data = response.data;
			console.log(data);

			setTransactionsData(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <></>;
};
