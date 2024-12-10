import { useState } from "react";
import { Outlet, Routes, Route } from "react-router";
import { useGlobalContext } from "../context/useGlobalContext";
import { AppStyled, MainLayout } from "../styles/index";
import { Navigation } from "./Navigation/Navigation";
import { Dashboard, Expenses, Income, Transactions } from "../pages/index";

function App() {
  const {
    incomes,
    getIncomes,
    addIncome,
    deleteIncome,
    totalIncomes,
    expenses,
    getExpenses,
    addExpenses,
    deleteExpense,
    totalExpenses,
  } = useGlobalContext();

  return (
    <AppStyled>
      <MainLayout>
        <Navigation />
        <main>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="transactions" element={<Transactions />} />
            <Route
              path="incomes"
              element={
                <Income
                  data={incomes}
                  getData={getIncomes}
                  addData={addIncome}
                  deleteData={deleteIncome}
                  totalValue={totalIncomes}
                />
              }
            />
            <Route
              path="expenses"
              element={
                <Expenses
                  data={expenses}
                  getData={getExpenses}
                  addData={addExpenses}
                  deleteData={deleteExpense}
                  totalValue={totalExpenses}
                />
              }
            />
          </Routes>
        </main>
        <Outlet />
      </MainLayout>
    </AppStyled>
  );
}

export default App;

{
  /* <BrowserRouter>
  

  <Routes>
    <Route path="dashboard" element={<Dashboard />} />
    <Route path="transactions" element={<Transactions />} />
    <Route
      path="incomes"
      element={
        <Income
          data={incomes}
          getData={getIncomes}
          addData={addIncome}
          deleteData={deleteIncome}
          totalValue={totalIncomes}
        />
      }
    />
    <Route
      path="expenses"
      element={
        <Expenses
          data={expenses}
          getData={getExpenses}
          addData={addExpenses}
          deleteData={deleteExpense}
          totalValue={totalExpenses}
        />
      }
    />
  </Routes>
</BrowserRouter>; */
}
