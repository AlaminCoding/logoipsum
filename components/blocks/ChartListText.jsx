"use client";

import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { Para } from "styles/Para";
import { Title } from "styles/Title";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { colors, sizes } from "styles/GlobalStyle";
import Chart from "public/chart.png";
import Image from "next/image";

const ChartListText = () => {
  return (
    <Section className="primary-container common-padding">
      <Row>
        <Col lg={6}>
          <div className="text">
            <Title>Nemo enim ipsam quia </Title>
            <Para>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed qu nemo enim
            </Para>
            <ul>
              <li>
                <AiOutlineCheckCircle /> Sed ut perspiciatis unde
              </li>
              <li>
                <AiOutlineCheckCircle /> Omnis iste natus
              </li>
              <li>
                <AiOutlineCheckCircle /> Error sit voluptatem
              </li>
              <li>
                <AiOutlineCheckCircle /> Accusantium doloremque
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={6}>
          <div className="img-box">
            <Image src={Chart} alt="chart-img" />
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default ChartListText;

const Section = styled.section`
  .text {
    p {
      margin-top: 20px;
    }
    ul {
      max-width: 510px;
      margin-top: 30px;
      li {
        margin-top: 20px;
        display: flex;
        gap: 14px;
        align-items: center;
        padding: 20px;
        border-radius: 20px;
        font-size: 22px;
        font-weight: 500;
        box-shadow: -9px -9px 16px rgba(238, 238, 238, 0.6),
          10px 10px 17px rgba(193, 208, 195, 0.26);
        svg {
          color: ${colors.lightGreen};
          font-size: 30px;
        }
      }
      @media ${sizes(992)} {
        margin-top: 60px;
      }
    }
  }
  .img-box {
    height: 100%;
    display: flex;
    align-items: center;
    margin-top: 40px;
    img {
      width: 100%;
      height: auto;
    }
    @media ${sizes(992)} {
      margin-top: 0px;
    }
  }
`;
