import PropTypes from "prop-types";
import moment from "moment";
import {
  IncomeItemStyled,
  IconWrapper,
  InnerContentWrapper,
  BtnWrapper,
  ContentWrapper,
  TextWrapper,
} from "./IncomeItem.styled";
import { Button } from "../index";
import { MdEuro } from "react-icons/md";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import {
  FaCalendar,
  FaComment,
  FaTrash,
  FaMoneyBillAlt,
  FaPiggyBank,
  FaCar,
  FaBitcoin,
  FaGlobeAmericas,
  FaGift,
} from "react-icons/fa";

export const IncomeItem = ({
  id,
  title,
  amount,
  date,
  category,
  description,
  $indicatorColor,
  deleteItem,
}) => {
  const formattedDate = moment(date).format("DD/M/YY");

  const categoryIcon = (category) => {
    switch (category) {
      case "salary":
        return <FaMoneyBillAlt size={60} />;
      case "inspection":
        return <FaCar size={60} />;
      case "crypto":
        return <FaBitcoin size={60} />;
      case "freelance":
        return <FaGlobeAmericas size={60} />;
      case "gift":
        return <FaGift size={60} />;
      case "transfer":
        return <FaMoneyBillTransfer size={60} />;

      default:
        return <FaPiggyBank size={60} />;
    }
  };
  return (
    <IncomeItemStyled>
      <IconWrapper> {categoryIcon(category)}</IconWrapper>
      <ContentWrapper $indicatorColor={$indicatorColor}>
        <h5>{title}</h5>
        <InnerContentWrapper>
          <TextWrapper>
            <p>
              {<MdEuro />}
              {amount}
            </p>
            <p>
              {<FaCalendar />}
              {formattedDate}
            </p>
            <p>
              {<FaComment />}
              {description}
            </p>
          </TextWrapper>

          <BtnWrapper>
            <Button
              icon={<FaTrash />}
              color={"#ffff"}
              bPad={"1rem"}
              bRad={"50%"}
              bg={"var(--primary-text-color)"}
              onClick={() => deleteItem(id)}
            />
          </BtnWrapper>
        </InnerContentWrapper>
      </ContentWrapper>
    </IncomeItemStyled>
  );
};

IncomeItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  $indicatorColor: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
