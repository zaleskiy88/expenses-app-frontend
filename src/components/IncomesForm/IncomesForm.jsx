import { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  IncomesFormSyled,
  InputStyled,
  Selects,
  SubmitBtnWrapper,
} from "./IncomesForm.styled";
import { useGlobalContext } from "../../context/useGlobalContext";
import { Button } from "../Button/Button";
import { IoAdd } from "react-icons/io5";

const BASE_URL = "http://localhost:5000/api/v1/";

export const IncomesForm = () => {
  const [formState, setFormState] = useState({
    title: "",
    amount: "",
    type: "income",
    date: new Date(),
    category: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);
  const { addIncome } = useGlobalContext();

  // Destructuring formState
  const { title, amount, type, date, category, description } = formState;

  const handleFormInput = (name) => (event) => {
    setFormState({ ...formState, [name]: event.target.value });
  };

  const handleDateChange = (date) => {
    setFormState({ ...formState, date: date });
  };

  const getCategories = async () => {
    const response = await axios.get(`${BASE_URL}/get-categories`);
    setCategories(response.data);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addIncome(formState);
    setFormState({
      title: "",
      amount: "",
      type: "income",
      date: new Date(),
      category: "",
      description: "",
    });
  };

  useEffect(() => {
    try {
      getCategories();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <IncomesFormSyled onSubmit={handleFormSubmit}>
      <div className="input-control">
        <InputStyled
          type="text"
          value={title}
          name="title"
          placeholder="Income Title"
          onChange={handleFormInput("title")}
        />
      </div>

      <div className="input-control">
        <InputStyled
          type="text"
          value={amount}
          name="amount"
          placeholder="Income Amount"
          onChange={handleFormInput("amount")}
        />
      </div>

      <div className="input-control">
        <DatePicker
          id="date"
          placeholderText="Income Date"
          selected={date}
          dateFormat={"dd/MM/yyyy"}
          onChange={handleDateChange}
        />
      </div>

      <Selects>
        <select
          value={category}
          onChange={handleFormInput("category")}
          placeholder="Income Category"
          name="category"
          id="category"
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          {/* creating list of categories */}
          {categories.map(({ _id, value, title }) => (
            <option
              key={_id}
              value={value}
              onChange={handleFormInput("category")}
            >
              {title}
            </option>
          ))}
        </select>
      </Selects>

      <div className="input-control">
        <textarea
          type="text"
          value={description}
          onChange={handleFormInput("description")}
          name="description"
          placeholder="Income Description"
          rows="4"
          cols="30"
        ></textarea>
      </div>

      <SubmitBtnWrapper className="submit-btn-container">
        <Button
          type="submit"
          name={"Add Income"}
          icon={<IoAdd size={"1.6rem"} />}
          bPad={"0.8rem 1.6rem"}
          bRad={"30px"}
          bg={"var(--color-accent)"}
          color={"#FFF"}
        />
      </SubmitBtnWrapper>
    </IncomesFormSyled>
  );
};
