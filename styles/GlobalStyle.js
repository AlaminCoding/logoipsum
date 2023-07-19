"use client";

import { createGlobalStyle } from "styled-components";

export const colors = {
  green: "#1F8E3D",
  black: "#181F1B",
  lightGray: "#E3E3E3",
  lightGreen: "#B4ECD2",
  midGreen: "#93D1B5",
  darkGreen: "#64B992",
  lightBlack: "#0A0A0AD9",
  footerGray: "#c9c9c9",
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
        width: 100%;
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
        padding-top: 30px;
        padding-bottom: 30px;
        @media ${sizes(992)}{
            padding-top: 80px;
            padding-bottom: 80px;
        }
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
    .secondary-container{
        padding-left: 20px;
        padding-right: 20px;
        @media ${sizes(1150)}{
            padding-left: 100px;
            padding-right: 100px;
        }
        @media ${sizes(1550)}{
            padding-left: 260px;
            padding-right: 260px;
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
    .shadow{
        box-shadow: -9px -9px 16px rgba(238, 238, 238, 0.6),
      10px 10px 17px rgba(193, 208, 195, 0.26);
    }
`;
