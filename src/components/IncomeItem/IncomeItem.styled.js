import styled from "styled-components";

export const IncomeItemStyled = styled.li`
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
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.2rem;

  h5 {
    font-size: 1.3rem;
    padding-left: 2rem;
    position: relative;
  }

  &::before {
    content: "";
    position: absolute;
    transform: translateY(-50%);
    width: 0.8rem;
    height: 0.8rem;
    background-color: yellow;
  }
`;

export const InnerContentWrapper = styled.div``;

export const TextWrapper = styled.div``;

export const BtnWrapper = styled.div``;
