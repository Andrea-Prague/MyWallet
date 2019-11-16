import { useEffect, useState } from "react";
import Axios from "axios";

// udelej z toho hook - proste prejmenuju na useApiDAta
// metodu na add a get transactions
// axiosInstance pres axios.create - getTransaction: () => axiosTransation.get("http...")
// addTransaction: new Transaction => axiosTransation.post("http...", new Transaction)

// v komponente const {getTransaction} = useApi
export const useApi = () => {
    const [transactionsData, setTransactionsData] = useState();

    const fetchData = async () => {
        try {
            const response = await Axios.get(
                "http://localhost:3001/TransactionData"
            );

            console.log(response.data);
            setTransactionsData(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return transactionsData;
};

export default useApi;
