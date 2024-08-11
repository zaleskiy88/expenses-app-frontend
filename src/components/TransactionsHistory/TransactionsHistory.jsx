import {
  HistoryStyled,
  TransactionsList,
  TransactionsItem,
} from "./TransactionsHistory.styled";
import { useGlobalContext } from "../../context/useGlobalContext";
export const TransactionsHistory = () => {
  const { transactionsHistory } = useGlobalContext();
  const [...transactions] = transactionsHistory();

  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      <TransactionsList>
        {transactions ? (
          transactions.map((item) => (
            <TransactionsItem key={item._id} $type={item.type}>
              <p>{item.title}</p>
              <span>
                {item.type === "incomes" ? "+" : "-"}€{item.amount}
              </span>
            </TransactionsItem>
          ))
        ) : (
          <p>No transactions</p>
        )}
      </TransactionsList>
    </HistoryStyled>
  );
};
