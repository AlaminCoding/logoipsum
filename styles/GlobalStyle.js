import { createGlobalStyle } from "styled-components";

export const colors = {
  green: "#1F8E3D",
  black: "#181F1B",
  lightGray: "#E3E3E3",
  lightGreen: "#B4ECD2",
  midGreen: "#93D1B5",
  darkGreen: "#64B992",
};

export const sizes = (size) => {
  return `screen and (min-width: ${size}px)`;
};

export const resFont = (min, max) => {
  return `calc(${min}px + (${max} - ${min}) * ((100vw - 360px) / (1920 - 360)))`;
};

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    html,
    body {
        font-family: var(--font-roboto);
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    p{
        margin: 0;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    a{
        text-decoration: none;
        color: ${colors.black};
    }
    .pb{
        padding-bottom: 50px;
    }
    .common-padding{
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .primary-container{
        padding-left: 20px;
        padding-right: 20px;
        @media ${sizes(1150)}{
            padding-left: 50px;
            padding-right: 50px;
        }
        @media ${sizes(1250)}{
            padding-left: 120.45px;
            padding-right: 120.45px;
        }
    }
    .container-left{
        padding-left: 20px;
        padding-right: 20px;
        @media ${sizes(992)}{
            padding-left: 50px;
            padding-right: 0px;
        }
        @media ${sizes(1250)}{
            padding-left: 120.45px;
            padding-right: 0px;
        }
    }
`;
