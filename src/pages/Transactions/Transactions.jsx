import { useEffect } from "react";
import { useGlobalContext } from "../../context/useGlobalContext";
import { TransactionsStyled } from "./Transaction.styled";
import { InnerLayout } from "../../styles/index";
import { MovementsList } from "../../components/index";

export const Transactions = () => {
  const { transactionsHistory, getIncomes, getExpenses } = useGlobalContext();

  useEffect(() => {
    try {
      getIncomes();
      getExpenses();
    } catch (error) {
      console.log(error);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <TransactionsStyled>
      <InnerLayout>
        Transactions
        <MovementsList data={transactionsHistory()} updateItem={null} clickable={true}></MovementsList>
      </InnerLayout>
    </TransactionsStyled>
  );
};
