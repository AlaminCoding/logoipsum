import styled from "styled-components";
import { colors } from "./GlobalStyle";

export const Button = styled.button`
  height: 53px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid ${(props) => (props.$bg ? colors.green : colors.black)};
  background-color: ${(props) => (props.$bg ? colors.green : "white")};
  color: ${(props) => (props.$bg ? "white" : colors.black)};
  font-family: var(--font-ibm);
  font-weight: 600;
  padding: 14px 30px;
  font-size: 18px;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    color: ${(props) => (props.$bg ? colors.green : "white")};
    background-color: ${(props) => (props.$bg ? "white" : colors.black)};
  }
  svg {
    font-size: 26px;
  }
`;
