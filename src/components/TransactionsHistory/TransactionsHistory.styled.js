import styled from "styled-components";

export const HistoryStyled = styled.div`
  Button {
    margin-top: 0.5rem;
  }
`;

export const TransactionsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const TransactionsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  background: var(--background-color);
  border: 2px solid #ffffff;
  border-radius: 20px;
  box-shadow: var(--shadow);

  color: ${({ $type }) =>
    $type === "incomes" ? "var(--color-green)" : "var(--color-delete)"};
`;
