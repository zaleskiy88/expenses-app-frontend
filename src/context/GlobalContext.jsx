import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1/";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  const getIncomes = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/get-incomes`);
      setIncomes(res.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const addIncome = async (income) => {
    try {
      const res = await axios.post(`${BASE_URL}/add-income`, income);
      setIncomes(res.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const deleteIncome = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/delete-income/${id}`);
      setIncomes(res.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const totalIncome = () => {
    let total = 0;
    incomes.forEach((income) => (total += income.amount));
    return total;
  };

  return (
    <GlobalContext.Provider
      value={{ incomes, addIncome, getIncomes, deleteIncome, totalIncome }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// PROPTYPES
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
