import { useGlobalContext } from "../../context/useGlobalContext";
import { List } from "./List.styled";
import { ListItem } from "../index";
import PropTypes from "prop-types";

export const MovementsList = ({ data, updateItem, clickable }) => {
  const { deleteIncome, deleteExpense } = useGlobalContext();

  return (
    <List>
      {data
        ? data.map((item) => {
            const { _id: id, title, amount, type, date, category, description } = item;

            return (
              <ListItem
                key={id}
                id={id}
                title={title}
                amount={amount}
                type={type}
                date={date}
                category={category}
                description={description}
                $indicatorColor={type}
                deleteItem={type === "incomes" ? deleteIncome : deleteExpense}
                updateItem={updateItem}
                clickable={clickable}
              />
            );
          })
        : null}
    </List>
  );
};

//PropTypes
MovementsList.propTypes = {
  data: PropTypes.array,
  deleteData: PropTypes.func,
  updateItem: PropTypes.func,
};
