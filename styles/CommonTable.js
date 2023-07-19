import styled from "styled-components";
import { colors } from "./GlobalStyle";

export const MainTable = styled.table`
  width: 100%;
  font-size: 18px;
  text-align: center;
  margin-bottom: 0;
  th {
    background-color: ${(props) =>
      props.thColor ? props.thColor : colors.lightGray};
    &:nth-child(1) {
      border-radius: 6px 0px 0px 6px;
    }
    &:nth-last-child(1) {
      border-radius: 0px 6px 6px 0px;
    }
  }
  td,
  th {
    padding: 24px 10px;
  }
  td {
    border-radius: 6px;
    border: 2px solid white;
  }
`;
