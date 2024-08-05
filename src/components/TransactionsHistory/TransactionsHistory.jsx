import { HistoryStyled } from "./TransactionsHistory.styled";
import { useGlobalContext } from "../../context/useGlobalContext";
export const TransactionsHistory = () => {
  const { transactionsHistory } = useGlobalContext();

  console.log(transactionsHistory());
  return (
    <HistoryStyled>
      <h2>Recent History</h2>
    </HistoryStyled>
  );
};
