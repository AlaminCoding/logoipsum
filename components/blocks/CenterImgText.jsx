"use client";

import styled from "styled-components";
import { Para } from "styles/Para";
import { Title } from "styles/Title";
import CenterImg from "public/center.png";
import Image from "next/image";
import { sizes } from "styles/GlobalStyle";

const CenterImgText = () => {
  return (
    <Section className="secondary-container common-padding">
      <Title mw="1113px" align="center">
        Ullamcorper morbi tincidunt ornare massa eget. Quam viverra orci
        sagittis eu volutpat odio
      </Title>
      <Para mw="815px" align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore{" "}
      </Para>
      <div className="img-box">
        <Image src={CenterImg} alt="center social img" />
      </div>
    </Section>
  );
};

export default CenterImgText;

const Section = styled.section`
  h2 {
    margin: 0 auto;
  }
  p {
    margin: 0 auto;
    margin-top: 20px;
  }
  .img-box {
    margin: 0 auto;
    max-width: 415px;
    margin-top: 40px;
    img {
      width: 100%;
      height: auto;
    }
    @media ${sizes(576)} {
      margin-top: 60px;
    }
  }
`;
