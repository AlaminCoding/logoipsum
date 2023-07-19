import styled from "styled-components";
import { colors, resFont } from "styles/GlobalStyle";

export const Para = styled.p`
  color: ${colors.black};
  font-weight: 400;
  max-width: ${(props) => props.mw};
  font-size: ${resFont(16, 24)};
  text-align: ${(props) => props.align};
  opacity: 0.7;
`;
