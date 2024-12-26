import { useEffect } from "react";
import { Outlet, Routes, Route, Navigate } from "react-router";
import { useGlobalContext } from "../context/useGlobalContext";
import { AppStyled, MainLayout } from "../styles/index";
import { Navigation, ProtectedRoute } from "./index";
import { Dashboard, Expenses, Income, Transactions, AuthPages } from "../pages/index";

function App() {
  const {
    isAuthenticated,
    getUser,
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

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppStyled>
      <MainLayout>
        {isAuthenticated && <Navigation />}
        <main>
          <Routes>
            {/* Public route */}
            <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <AuthPages />} />
            {/* Protected routes */}
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="transactions"
              element={
                <ProtectedRoute>
                  <Transactions />
                </ProtectedRoute>
              }
            />
            <Route
              path="incomes"
              element={
                <ProtectedRoute>
                  <Income
                    data={incomes}
                    getData={getIncomes}
                    addData={addIncome}
                    deleteData={deleteIncome}
                    totalValue={totalIncomes}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="expenses"
              element={
                <ProtectedRoute>
                  <Expenses
                    data={expenses}
                    getData={getExpenses}
                    addData={addExpenses}
                    deleteData={deleteExpense}
                    totalValue={totalExpenses}
                  />
                </ProtectedRoute>
              }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Outlet />
      </MainLayout>
    </AppStyled>
  );
}

export default App;
