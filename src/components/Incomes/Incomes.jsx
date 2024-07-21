import { useEffect } from "react";
import {
  IncomesStyled,
  IncomeContent,
  FormContainer,
  Incomes,
} from "./Incomes.styled";
import { InnerLayout } from "../../styles/index";
import { useGlobalContext } from "../../context/useGlobalContext";
import { IncomesForm, IncomeItem } from "../index";

export const Income = () => {
  const { incomes, getIncomes, addIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IncomesStyled>
      <InnerLayout>
        <h2>Incomes</h2>
        <IncomeContent>
          <FormContainer>
            <IncomesForm addIncome={addIncome} />
          </FormContainer>
          <Incomes>
            {incomes
              ? incomes.map((income) => {
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
                      title={title}
                      amount={amount}
                      type={type}
                      date={date}
                      category={category}
                      description={description}
                      $indicatorColor={"var(--color-green)"}
                    />
                  );
                })
              : null}
          </Incomes>
        </IncomeContent>
      </InnerLayout>
    </IncomesStyled>
  );
};
