import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import DatePicker from "react-datepicker";
import { capitalizeFirstLetter } from "../../utils/CapitalizeFirstLet";
import "react-datepicker/dist/react-datepicker.css";
import {
  FormStyled,
  InputStyled,
  Selects,
  SubmitBtnWrapper,
  FormContainer,
} from "./Form.styled";
import { Button } from "../Button/Button";
import { IoAdd } from "react-icons/io5";

const BASE_URL = "http://localhost:5000/api/v1/";

export const Form = ({ formType, formHandler }) => {
  const [formState, setFormState] = useState({
    title: "",
    amount: "",
    type: formType,
    date: new Date(),
    category: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);
  // Destructuring formState
  const { title, amount, date, category, description } = formState;

  const inputPlaceholder = capitalizeFirstLetter(formType).slice(0, -1);

  // Form handlers
  const handleFormInput = (name) => (event) => {
    setFormState({ ...formState, [name]: event.target.value });
  };

  const handleDateChange = (date) => {
    setFormState({ ...formState, date: date });
  };

  const getCategories = async () => {
    const response = await axios.get(`${BASE_URL}/get-categories`);
    const filterredCategories = await response.data.filter(
      (income) => income.type === formType
    );

    setCategories(filterredCategories);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    formHandler(formState);
    setFormState({
      title: "",
      amount: "",
      type: formType,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FormContainer>
      <FormStyled onSubmit={handleFormSubmit}>
        <div className="input-control">
          <InputStyled
            type="text"
            value={title}
            name="title"
            placeholder={`${inputPlaceholder} Title`}
            onChange={handleFormInput("title")}
          />
        </div>

        <div className="input-control">
          <InputStyled
            type="text"
            value={amount}
            name="amount"
            placeholder={`${inputPlaceholder} Amount`}
            onChange={handleFormInput("amount")}
          />
        </div>

        <div className="input-control">
          <DatePicker
            id="date"
            placeholderText={`${inputPlaceholder} Date`}
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
            placeholder={`${inputPlaceholder} Description`}
            rows="4"
            cols="30"
          ></textarea>
        </div>

        <SubmitBtnWrapper className="submit-btn-container">
          <Button
            type="submit"
            name={`Add ${inputPlaceholder} `}
            icon={<IoAdd size={"1.6rem"} />}
            bPad={"0.8rem 1.6rem"}
            bRad={"30px"}
            bg={"var(--color-accent)"}
            color={"#FFF"}
          />
        </SubmitBtnWrapper>
      </FormStyled>
    </FormContainer>
  );
};

Form.propTypes = {
  formType: PropTypes.string.isRequired,
  formHandler: PropTypes.func.isRequired,
};
