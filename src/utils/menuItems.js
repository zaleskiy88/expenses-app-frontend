import { GoGraph } from "react-icons/go";
import {
  FaCreditCard,
  FaMoneyBillTrendUp,
  FaMoneyBillTransfer,
} from "react-icons/fa6";

export const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: GoGraph,
    link: "/dashboard",
  },
  {
    id: 2,
    title: "View Transactions",
    icon: FaCreditCard,
    link: "/transaction",
  },
  {
    id: 3,
    title: "Incomes",
    icon: FaMoneyBillTrendUp,
    link: "/incomes",
  },

  {
    id: 4,
    title: "Expenses",
    icon: FaMoneyBillTransfer,
    link: "/expenses",
  },
];
