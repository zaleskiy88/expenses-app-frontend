import PropTypes from "prop-types";
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
import { FaCalendar, FaComment, FaTrash } from "react-icons/fa";

export const IncomeItem = ({
  id,
  title,
  amount,
  type,
  date,
  category,
  description,
  $indicatorColor,
  deleteItem,
}) => {
  return (
    <IncomeItemStyled>
      <IconWrapper> </IconWrapper>
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
              {date}
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
