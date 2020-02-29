import Axios from "axios";

export const useApi = () => {
    const axios = Axios.create({
        baseURL: "http://localhost:3001"
    });

    return {
        getTransactionList: () => axios.get("/TransactionData"),
        saveNewTransaction: body => axios.post("/TransactionData", body),
        deleteTransaction: deleteBody => axios.delete(`/TransactionData/${deleteBody}`),
        editTransaction: (editBody, editId) => axios.put(`/TransactionData/${editId}`, editBody)
    };
};
