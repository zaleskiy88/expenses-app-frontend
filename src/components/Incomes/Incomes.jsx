import { useEffect } from "react";
import PropTypes from "prop-types";
import {
  IncomesStyled,
  IncomeContent,
  FormContainer,
  TotalIncomeHeader,
} from "./Incomes.styled";
import { InnerLayout } from "../../styles/index";
import { Form, MoventsList } from "../index";

export const Income = ({ data, getData, addData, deleteData, totalValue }) => {
  useEffect(() => {
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IncomesStyled>
      <InnerLayout>
        <h1>Incomes</h1>
        <TotalIncomeHeader>
          Total Income:<span>€{totalValue()}</span>
        </TotalIncomeHeader>
        <IncomeContent>
          <FormContainer>
            <Form formType={"incomes"} formHandler={addData} />
          </FormContainer>
          <MoventsList data={data} deleteData={deleteData} />
        </IncomeContent>
      </InnerLayout>
    </IncomesStyled>
  );
};

//PropTypes
Income.propTypes = {
  data: PropTypes.array,
  getData: PropTypes.func.isRequired,
  addData: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
  totalValue: PropTypes.func.isRequired,
};
