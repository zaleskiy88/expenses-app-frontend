import { useState } from "react";
import { AppStyled, MainLayout } from "../styles/index";
import { Navigation } from "./Navigation/Navigation";
import { Dashboard, Expenses, Incomes, Transactions } from "./index";

function App() {
  const [active, setActive] = useState(1);

  const displayComponent = () => {
    const components = {
      1: <Dashboard />,
      2: <Transactions />,
      3: <Incomes />,
      4: <Expenses />,
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
