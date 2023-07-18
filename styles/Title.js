import styled from "styled-components";
import { resFont } from "./GlobalStyle";

export const Title = styled.h2`
  text-align: ${(props) => props.align};
  font-size: ${resFont(22, 51)};
  max-width: ${(props) => props.mw};
  margin: ${(props) => (props.mw ? "0 auto" : 0)};
  font-weight: 500;
`;
