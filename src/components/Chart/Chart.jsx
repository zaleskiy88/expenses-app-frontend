import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ChartStyled } from "./Chart.styled";
import moment from "moment";
import { useGlobalContext } from "../../context/useGlobalContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Legend,
  Tooltip,
  ArcElement
);

export const Chart = () => {
  const { incomes, expenses } = useGlobalContext();
  const data = {
    labels: incomes.map((income) => {
      const { date } = income;
      return moment(date).format("DD/M/YYYY");
    }),

    datasets: [
      {
        label: "Incomes",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "#42AD00",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: [
          ...expenses.map((expense) => {
            const { amount } = expense;
            return amount;
          }),
        ],
        backgroundColor: "#FF0000",
        tension: 0.2,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: true,
    responsive: true,
  };

  return (
    <ChartStyled>
      <Line
        data={data}
        options={chartOptions}
        style={{ display: "inline-block" }}
      />
    </ChartStyled>
  );
};
