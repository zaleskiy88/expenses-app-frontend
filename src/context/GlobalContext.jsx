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
      console.log(res);
      setIncomes(res.data);
    } catch (error) {
      //setError(error.response.data.message);
      console.log(error);
    }
  };

  const addIncome = async (income) => {
    try {
      const response = await axios.post(`${BASE_URL}/add-income`, income);
      setIncomes([...incomes, response.data]);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <GlobalContext.Provider value={{ incomes, addIncome, getIncomes }}>
      {children}
    </GlobalContext.Provider>
  );
};

// PROPTYPES
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
