import { useEffect } from "react";
import PropTypes from "prop-types";
import { IncomesStyled } from "./Incomes.styled";
import {
  InnerLayout,
  TotalValueHeader,
  MainContentContainer,
} from "../../styles/index";
import { Form, MovementsList } from "../index";

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
        <TotalValueHeader $type={"incomes"}>
          Total Income:<span>€{totalValue()}</span>
        </TotalValueHeader>
        <MainContentContainer>
          <Form formType={"incomes"} formHandler={addData} />
          <MovementsList data={data} deleteData={deleteData} />
        </MainContentContainer>
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
