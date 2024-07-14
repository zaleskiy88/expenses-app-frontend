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
            {incomes.map((income) => {
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
                  date={date}
                  description={description}
                />
              );
            })}
          </Incomes>
        </IncomeContent>
      </InnerLayout>
    </IncomesStyled>
  );
};

// {
//     title: { type: String, required: true, trim: true, maxLength: 50 },
//     amount: { type: Number, required: true, trim: true, maxLength: 20 },
//     type: { type: String, default: "income" },
//     date: { type: Date, required: true },
//     category: { type: String, required: true },
//     description: { type: String, required: true },
//   }
{
  /* <li>
  <h3>{title}</h3>
</li>; */
}
