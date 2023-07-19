"use client";

import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "styles/Button";
import { Para } from "styles/Para";
import { Title } from "styles/Title";
import Social from "public/social.png";
import { sizes } from "styles/GlobalStyle";

const ImageTextCta = () => {
  return (
    <Section className="primary-container common-padding">
      <Row>
        <Col lg={6}>
          <div className="text">
            <Title mw="791px">
              Sed ut perspiciatis unde omnis iste natus error.
              <span>Try out!</span>
            </Title>
            <Para mw="757px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore ullamco esse cillium
            </Para>
            <Button $bg={true}>Try Out Now!</Button>
          </div>
        </Col>
        <Col lg={6}>
          <div className="img-box">
            <Image src={Social} alt="Social Img" />
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default ImageTextCta;

const Section = styled.section`
  .text {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
    h2 {
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 40px;
    }
  }
  .img-box {
    padding-right: 0;
    margin-top: 30px;
    @media ${sizes(992)} {
      margin-top: 0px;
    }
    @media ${sizes(576)} {
      padding-right: 20%;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;
