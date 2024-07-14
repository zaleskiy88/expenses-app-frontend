import {} from "react";
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
