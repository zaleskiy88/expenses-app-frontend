import { useEffect, useState } from "react";
import { Chart as ChartJS, Legend, Tooltip, ArcElement, plugins } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartStyled } from "./Chart.styled";
import moment from "moment";
import { useGlobalContext } from "../../context/useGlobalContext";

ChartJS.register(Legend, Tooltip, ArcElement, plugins);

export const Chart = () => {
  const { getIncomes, getExpenses, incomes, expenses, totalIncomes, totalExpenses } = useGlobalContext();
  const [chartLabels, setChartLabels] = useState(["Incomes", "Expenses"]);
  const [chartData, setChartData] = useState([totalIncomes(), totalExpenses()]);
  const [chartBcgColor, setChartBcgColor] = useState(["yellowGreen", "red"]);

  useEffect(() => {
    getIncomes();
    getExpenses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setChartData([totalIncomes(), totalExpenses()]);
  }, [incomes, expenses, totalIncomes, totalExpenses]);

  //labels
  const incomesByCategory = incomes.reduce((acc, income) => {
    acc[income.category] = (acc[income.category] || 0) + income.amount;
    return acc;
  }, {});
  const expensesByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});
  //

  //data
  const incomesData = [...Object.values(incomesByCategory)];
  const expensesData = [...Object.values(expensesByCategory)];
  const incomesAndExpenses = [totalIncomes(), totalExpenses()];
  //

  //bcg color
  const incomeBcgColor = Object.keys(incomesData).map((_, index) => {
    const shade = Math.floor(255 * (index / incomes.length));
    return `rgba(${0 + shade}, ${120 + shade / 3}, ${200 - shade / 3}, 1)`;
  });
  const expenseBcgColor = Object.keys(incomesData).map((_, index) => {
    const shade = Math.floor(255 * (index / incomes.length));
    return `rgba(255, ${20 + shade / 2}, ${150 - shade}, 1)`;
  });
  //

  //selector handler
  const selectorHandler = () => (e) => {
    switch (e.target.value) {
      case "incomes-vs-expenses":
        setChartLabels(["Incomes", "Expenses"]);
        setChartData(incomesAndExpenses);
        setChartBcgColor(["yellowGreen", "red"]);
        break;

      case "incomes":
        setChartLabels(Object.keys(incomesByCategory));
        setChartData(incomesData);
        setChartBcgColor(incomeBcgColor);
        break;

      case "expenses":
        setChartLabels(Object.keys(expensesByCategory));
        setChartData(expensesData);
        setChartBcgColor(expenseBcgColor);
        break;

      default:
        setChartLabels(["Incomes", "Expenses"]);
        setChartData(incomesAndExpenses);
        setChartBcgColor(["yellowGreen", "red"]);
        break;
    }
  };

  //

  const data = {
    labels: chartLabels,

    datasets: [
      {
        data: chartData,
        backgroundColor: chartBcgColor,
        tension: 0.2,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: $${value.toFixed(2)}`;
          },
        },
      },
    },
  };

  return (
    <ChartStyled>
      {/*chart selector*/}
      <select onChange={selectorHandler()}>
        <option value="incomes-vs-expenses">Incomes Vs. Expenses</option>
        <option value="incomes">Incomes</option>
        <option value="expenses">Expenses</option>
      </select>

      <Doughnut data={data} options={chartOptions} style={{ display: "inline-block" }} />
    </ChartStyled>
  );
};
