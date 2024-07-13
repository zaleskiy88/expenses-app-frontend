import styled from "styled-components";
import bg from "../img/bg.png";

export const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${bg});
  position: relative;

  main {
    flex: 1;
    background: var(--main-background);
    border: 3px solid #ffffff;
    border-radius: 32px;
    backdrop-filter: blur(4.5px);
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;
