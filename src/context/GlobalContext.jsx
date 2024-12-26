import { createContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const BASE_URL = "https://expenses-app-backend.onrender.com/api/v1/"; //"http://localhost:5000/api/v1/";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (localStorage.getItem("token")) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
      return true;
    }
    return false;
  });
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  /////////////////////// Auth //////////////////////////////////////////
  const register = async (credentials) => {
    try {
      const res = await axios.post(`${BASE_URL}auth/register`, credentials);
      setUser(res.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const login = async (credentials) => {
    try {
      const res = await axios.post(`${BASE_URL}auth/login`, credentials);
      axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
      localStorage.setItem("token", res.data.token);
      setIsAuthenticated(true);
      const user = await axios.get(`${BASE_URL}auth/current`);
      setUser(user.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${BASE_URL}auth/logout`);
      localStorage.removeItem("token");
      setUser({});
      setIsAuthenticated(false);
      setExpenses([]);
      setIncomes([]);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const getUser = async () => {
    try {
      const user = await axios.get(`${BASE_URL}auth/current`);
      setUser(user.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  //////////// Incomes ////////////////
  const getIncomes = async () => {
    try {
      const res = await axios.get(`${BASE_URL}incomes/get-incomes`);
      setIncomes(res.data);
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };

  const addIncome = async (income) => {
    try {
      const res = await axios.post(`${BASE_URL}incomes/add-income`, income);
      setIncomes(res.data);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  const deleteIncome = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}incomes/delete-income/${id}`);
      setIncomes(res.data);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  const totalIncomes = () => {
    let total = 0;
    incomes.forEach((income) => (total += income.amount));
    return total;
  };

  /////////////////////// Expenses //////////////////////////////////////////
  const getExpenses = async () => {
    try {
      const res = await axios.get(`${BASE_URL}expenses/get-expenses`);
      setExpenses(res.data);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };

  const addExpenses = async (expense) => {
    try {
      const res = await axios.post(`${BASE_URL}expenses/add-expense`, expense);
      setExpenses(res.data);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };

  const deleteExpense = async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}expenses/delete-expense/${id}`);
      setExpenses(res.data);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };

  const totalExpenses = () => {
    let total = 0;
    expenses.forEach((expense) => (total += expense.amount));
    return total;
  };

  /////////////////////// Transactions //////////////////////////////////////////
  const transactionsHistory = () => {
    /**
     * Returns a sorted array of all transactions in the application,
     * combining incomes and expenses.
     * @return {Array} An array of objects representing transactions,
     * sorted in descending order by creation date.
     */
    const history = [...incomes, ...expenses];
    return history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  };

  /////////////////////// Other //////////////////////////////////////////
  const totalBalance = () => {
    return totalIncomes() - totalExpenses();
  };

  return (
    <GlobalContext.Provider
      value={{
        register,
        login,
        logout,
        user,
        getUser,
        isAuthenticated,
        incomes,
        addIncome,
        getIncomes,
        deleteIncome,
        totalIncomes,
        expenses,
        getExpenses,
        addExpenses,
        deleteExpense,
        totalExpenses,
        totalBalance,
        transactionsHistory,
        error,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// PROPTYPES
GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
