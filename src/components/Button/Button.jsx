import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";

export const Button = ({ name, icon, onClick, bg, bPad, color, bRad }) => {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {icon}
      {name}
    </ButtonStyled>
  );
};

Button.propTypes = {
  name: PropTypes.string.is,
  icon: PropTypes.element.is,
  onClick: PropTypes.func.is,
  bg: PropTypes.string.is,
  bPad: PropTypes.string.is,
  color: PropTypes.string.is,
  bRad: PropTypes.string.is,
};
