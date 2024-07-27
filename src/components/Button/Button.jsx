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
  name: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
  bg: PropTypes.string,
  bPad: PropTypes.string,
  color: PropTypes.string,
  bRad: PropTypes.string,
};
