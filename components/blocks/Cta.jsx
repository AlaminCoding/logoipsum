"use client";

import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "styles/Button";
import { sizes } from "styles/GlobalStyle";
import { Para } from "styles/Para";
import { Title } from "styles/Title";

const Cta = () => {
  return (
    <Section className="secondary-container common-padding">
      <Row>
        <Col lg={6}>
          <div className="content">
            <Title mw="706px">
              Ullamcorper morbi tincidunt ornare massa eget
            </Title>
            <Para>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore{" "}
            </Para>
          </div>
        </Col>
        <Col lg={6}>
          <div className="cta-btn">
            <Button $bg={true}>Apply</Button>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Cta;

const Section = styled.section`
  p {
    margin-top: 20px;
  }
  .cta-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: auto;
    margin-top: 30px;
    @media ${sizes(992)} {
      margin-top: 0;
      justify-content: center;
      height: 100%;
    }
  }
`;
