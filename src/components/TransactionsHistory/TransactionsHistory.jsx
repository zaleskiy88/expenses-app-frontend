import { useState } from "react";
import {
  HistoryStyled,
  TransactionsList,
  TransactionsItem,
} from "./TransactionsHistory.styled";
import { Button } from "../index";
import { useGlobalContext } from "../../context/useGlobalContext";
export const TransactionsHistory = () => {
  const { transactionsHistory } = useGlobalContext();
  const [...transactions] = transactionsHistory();
  const [itemsLimit, setItemsLimit] = useState(3);
  const formattedTransactions = transactions.slice(0, itemsLimit);

  const showMoreHandler = () => {
    if (itemsLimit <= 3) {
      setItemsLimit(transactions.length);
    } else {
      setItemsLimit(3);
    }
  };

  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      <TransactionsList onClick={() => showMoreHandler()}>
        {transactions || transactions.length > 0 ? (
          formattedTransactions.map((item) => (
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

      <Button
        onClick={showMoreHandler}
        name={itemsLimit > 3 ? "Click to collapse ⇑" : "Click to expand ⇓"}
        bPad={"0.2rem 1rem"}
        bRad={"10px"}
        bg={"var(--main-background)"}
        color={"var(--button-text-color)"}
      />
    </HistoryStyled>
  );
};
