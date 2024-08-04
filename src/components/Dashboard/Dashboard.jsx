import {
  DashboardStyled,
  StatisticsContainer,
  ChartContainer,
} from "./Dashboard.styled";
import { InnerLayout } from "../../styles/index";
import { Chart } from "../index";

export const Dashboard = () => {
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <StatisticsContainer>
          <ChartContainer>
            <Chart />
          </ChartContainer>
        </StatisticsContainer>
      </InnerLayout>
    </DashboardStyled>
  );
};
