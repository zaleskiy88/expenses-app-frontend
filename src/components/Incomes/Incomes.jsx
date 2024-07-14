/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { IncomesStyled, IncomeContent, FormContainer, Incomes } from "./Incomes.styled";
import { InnerLayout } from "../../styles/index";
import { useGlobalContext } from "../../context/useGlobalContext";
import { IncomesForm } from "../index";

export const Income = () => {
  const { incomes, getIncomes, addIncome } = useGlobalContext();

  useEffect(() => {
    console.log(incomes);
  }, []);

  return (
    <IncomesStyled>
      <InnerLayout>
        <h2>Incomes</h2>
        <IncomeContent>
          <FormContainer>
            <IncomesForm addIncome={addIncome} />
          </FormContainer>
          <Incomes></Incomes>
        </IncomeContent>
      </InnerLayout>
    </IncomesStyled>
  );
};
