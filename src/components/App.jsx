import { useState } from "react";
import { useGlobalContext } from "../context/useGlobalContext";
import { AppStyled, MainLayout } from "../styles/index";
import { Navigation } from "./Navigation/Navigation";
import { Dashboard, Expenses, Income, Transactions } from "./index";

function App() {
  const [active, setActive] = useState(1);
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

  const displayComponent = () => {
    const components = {
      1: <Dashboard />,
      2: <Transactions />,
      3: (
        <Income
          data={incomes}
          getData={getIncomes}
          addData={addIncome}
          deleteData={deleteIncome}
          totalValue={totalIncomes}
        />
      ),
      4: (
        <Expenses
          data={expenses}
          getData={getExpenses}
          addData={addExpenses}
          deleteData={deleteExpense}
          totalValue={totalExpenses}
        />
      ),
    };

    return components[active] || <Dashboard />;
  };

  return (
    <AppStyled>
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>{displayComponent()}</main>
      </MainLayout>
    </AppStyled>
  );
}

export default App;
