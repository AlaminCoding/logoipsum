import styled from "styled-components";
import { resFont } from "./GlobalStyle";

export const Title = styled.h2`
  text-align: ${(props) => props.align};
  font-size: ${resFont(22, 51)};
  max-width: ${(props) => props.mw};
  font-weight: 500;
  span {
    font-weight: 900;
  }
`;
