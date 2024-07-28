import styled from "styled-components";

export const IncomesStyled = styled.div`
  display: flex;
  overflow: auto;
`;

export const TotalIncomeHeader = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcf6f9;
  border: 2px solid #ffffff;
  border-radius: 10px;
  box-shadow: var(--shadow);

  margin: 2rem 0 3rem 0;
  padding: 1.5rem 0;
  gap: 0.5rem;
  font-size: 1.7rem;

  span {
    color: var(--color-green);
    font-size: 2rem;
  }
`;

export const IncomeContent = styled.div`
  display: flex;
  gap: 2rem;
`;

export const FormContainer = styled.div``;
