import styled from "styled-components";

export const ListItemStyled = styled.li`
  background: #fcf6f9;
  border: 2px solid #ffffff;
  box-shadow: var(--shadow);
  border-radius: 20px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  color: var(--primary-text-color);
`;

export const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgb(249 242 247);
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 0.5rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.2rem;

  h5 {
    font-size: 1rem;
    padding-left: 2rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      left: 0;
      width: 0.8rem;
      height: 0.8rem;
      background-color: ${({ $indicatorColor }) =>
        $indicatorColor === "incomes"
          ? "var(--color-green)"
          : "var(--color-delete)"};
      border-radius: 50px;
    }
  }
`;

export const InnerContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const BtnWrapper = styled.div``;
