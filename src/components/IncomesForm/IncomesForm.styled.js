import styled from "styled-components";

export const IncomesFormSyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: 2px solid #ffff;
    background: transparent;
    resize: none;
    box-shadow: var(--shadow);
    color: var(--primary-text-color);
  }
`;

export const InputWrapper = styled.div``;

export const InputStyled = styled.input`
  width: 100%;
`;

export const Selects = styled.div`
  display: flex;
  justify-content: flex-end;

  select {
    color: var(--primary-text-color2);
    &:focus,
    &:active {
      color: var(--primary-text-color);
    }
  }
`;

export const SubmitBtnWrapper = styled.div`
  button {
    box-shadow: var(--shadow);

    &:hover {
      background: var(--color-green) !important;
    }
  }
`;
