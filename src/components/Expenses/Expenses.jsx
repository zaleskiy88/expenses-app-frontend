import { useEffect } from "react";
import PropTypes from "prop-types";
import { ExpensesStyled } from "./Expenses.styled";
import {
  InnerLayout,
  TotalValueHeader,
  MainContentContainer,
} from "../../styles/index";
import { Form, MovementsList } from "../index";
export const Expenses = ({
  data,
  getData,
  addData,
  deleteData,
  totalValue,
}) => {
  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ExpensesStyled>
      <InnerLayout>
        <h1>Expenses</h1>
        <TotalValueHeader $type={"expenses"}>
          Total Expense:<span>€{totalValue()}</span>
        </TotalValueHeader>
        <MainContentContainer>
          <Form formType={"expenses"} formHandler={addData} />

          <MovementsList data={data} deleteData={deleteData} />
        </MainContentContainer>
      </InnerLayout>
    </ExpensesStyled>
  );
};

//PropTypes
Expenses.propTypes = {
  data: PropTypes.array,
  getData: PropTypes.func.isRequired,
  addData: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
  totalValue: PropTypes.func.isRequired,
};
