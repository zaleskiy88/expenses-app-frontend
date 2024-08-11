import styled from "styled-components";

export const DashboardStyled = styled.div``;

export const StatisticsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
`;

export const ChartContainer = styled.div`
  grid-column: 1/4;
`;

export const AmountsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

export const AmountContainer = styled.div`
  background: var(--background-color);
  border: 2px solid #ffffff;
  box-shadow: var(--shadow);
  padding: 1rem;
  border-radius: 20px;

  &:nth-child(-n + 2) {
    grid-column: span 2;
  }
  &:last-child {
    grid-column: 2/4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0.7;
  }

  p {
    font-size: 3rem;
    font-weight: 700;
  }
`;

export const TransactionsHistoryContainer = styled.div`
  grid-column: 4/-1;
`;
