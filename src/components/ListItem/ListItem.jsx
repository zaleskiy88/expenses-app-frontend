import PropTypes from "prop-types";
import moment from "moment";
import {
  ListItemStyled,
  IconWrapper,
  InnerContentWrapper,
  BtnWrapper,
  ContentWrapper,
  TextWrapper,
} from "./ListItem.styled";
import { Button } from "../index";
//Icons//
import {
  MdEuro,
  MdHealthAndSafety,
  MdSubscriptions,
  MdRestaurant,
  MdOutlineTravelExplore,
} from "react-icons/md";
import { BiShieldQuarter } from "react-icons/bi";
import { FaMoneyBillTransfer, FaCartShopping } from "react-icons/fa6";
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
  FaBook,
  FaCreditCard,
} from "react-icons/fa";
import { GiClothes, GiAutoRepair } from "react-icons/gi";
/////////
export const ListItem = ({
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
      case "education":
        return <FaBook size={60} />;
      case "supermarket":
        return <FaCartShopping size={60} />;
      case "health":
        return <MdHealthAndSafety size={60} />;
      case "subscriptions":
        return <MdSubscriptions size={60} />;
      case "restaurants":
        return <MdRestaurant size={60} />;
      case "clothing":
        return <GiClothes size={60} />;
      case "travel":
        return <MdOutlineTravelExplore size={60} />;
      case "credits":
        return <FaCreditCard size={60} />;
      case "maintenance":
        return <GiAutoRepair size={60} />;
      case "insurance":
        return <BiShieldQuarter size={60} />;

      default:
        return <FaPiggyBank size={60} />;
    }
  };
  return (
    <ListItemStyled>
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
    </ListItemStyled>
  );
};

ListItem.propTypes = {
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
