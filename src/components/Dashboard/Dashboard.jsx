import { useGlobalContext } from "../../context/useGlobalContext";
import {
  DashboardStyled,
  StatisticsContainer,
  ChartContainer,
  AmountsContainer,
  AmountContainer,
  TransactionsHistoryContainer,
} from "./Dashboard.styled";
import { InnerLayout } from "../../styles/index";
import { MdEuro } from "react-icons/md";
import { Chart, TransactionsHistory, MinMax } from "../index";

export const Dashboard = () => {
  const { incomes, expenses, totalIncomes, totalExpenses, totalBalance } =
    useGlobalContext();
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <StatisticsContainer>
          <ChartContainer>
            <Chart />

            <AmountsContainer>
              <AmountContainer>
                <h2>Total Income</h2>
                <p>
                  {<MdEuro />}
                  {totalIncomes()}
                </p>
              </AmountContainer>

              <AmountContainer>
                <h2>Total Expense</h2>
                <p>
                  {<MdEuro />}
                  {totalExpenses()}
                </p>
              </AmountContainer>

              <AmountContainer>
                <h2>Total Balance</h2>
                <p
                  style={{
                    color:
                      totalBalance() > 0
                        ? "var(--color-green)"
                        : "var(--color-delete)",
                  }}
                >
                  {<MdEuro />}
                  {totalBalance()}
                </p>
              </AmountContainer>
            </AmountsContainer>
          </ChartContainer>

          <TransactionsHistoryContainer>
            <TransactionsHistory />

            <MinMax data={incomes} title={"Incomes"} />

            <MinMax data={expenses} title={"Expenses"} />
          </TransactionsHistoryContainer>
        </StatisticsContainer>
      </InnerLayout>
    </DashboardStyled>
  );
};
