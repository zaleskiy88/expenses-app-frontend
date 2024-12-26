import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  padding: 1rem;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  padding: 2rem;
`;

export const CardHeader = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid ${(props) => (props.error ? "#ef4444" : "#d1d5db")};
  border-radius: 6px;
  font-size: 0.875rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }
`;

export const Footer = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  color: #6b7280;
  font-size: 0.875rem;
`;

export const LinkButton = styled.button`
  background: none;
  border: none;
  color: #2563eb;
  font-size: 0.875rem;
  cursor: pointer;
  padding: 0;
  margin-left: 0.25rem;

  &:hover {
    text-decoration: underline;
  }
`;
