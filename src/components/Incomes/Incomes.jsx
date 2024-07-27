import { useEffect } from "react";
import {
  IncomesStyled,
  IncomeContent,
  FormContainer,
  Incomes,
  TotalIncomeHeader,
} from "./Incomes.styled";
import { InnerLayout } from "../../styles/index";
import { useGlobalContext } from "../../context/useGlobalContext";
import { IncomesForm, IncomeItem } from "../index";

export const Income = () => {
  const { incomes, getIncomes, addIncome, deleteIncome, totalIncome } =
    useGlobalContext();

  useEffect(() => {
    getIncomes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <TotalIncomeHeader>
          Total Income:<span>€{totalIncome()}</span>
        </TotalIncomeHeader>
        <IncomeContent>
          <FormContainer>
            <IncomesForm addIncome={addIncome} />
          </FormContainer>
          <Incomes>
            {incomes ? (
              incomes.map((income) => {
                const {
                  _id: id,
                  title,
                  amount,
                  type,
                  date,
                  category,
                  description,
                } = income;

                return (
                  <IncomeItem
                    key={id}
                    id={id}
                    title={title}
                    amount={amount}
                    type={type}
                    date={date}
                    category={category}
                    description={description}
                    $indicatorColor={"var(--color-green)"}
                    deleteItem={deleteIncome}
                  />
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </Incomes>
        </IncomeContent>
      </InnerLayout>
    </IncomesStyled>
  );
};
