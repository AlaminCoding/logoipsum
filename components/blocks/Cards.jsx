"use client";

import styled from "styled-components";
import { cardData } from "utils/CardData";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { colors, resFont, sizes } from "styles/GlobalStyle";

const Cards = () => {
  return (
    <CardSec className="secondary-container common-padding">
      <Row>
        {cardData.map((e, idx) => (
          <Col lg={4} key={"card-" + idx}>
            <div className="card-box">
              <Image src={e.img} alt="card-img" />
              <h2>{e.title}</h2>
              <p>{e.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </CardSec>
  );
};

export default Cards;

const CardSec = styled.section`
  .card-box {
    height: auto;
    padding: 30px;
    margin-top: 30px;
    border-radius: 20px;
    box-shadow: -9px -9px 16px rgba(238, 238, 238, 0.6),
      10px 10px 17px rgba(193, 208, 195, 0.26);
    transition: 300ms;
    h2 {
      font-size: ${resFont(18, 22)};
      margin-top: 30px;
    }
    p {
      font-size: 18px;
      margin-top: 16px;
      color: ${colors.lightBlack};
      opacity: 0.7;
    }
    &:hover {
      box-shadow: -9px -9px 16px rgba(238, 238, 238, 0.6),
        10px 10px 17px rgba(164, 198, 163, 0.5);
    }
    @media ${sizes(1550)} {
      padding: 60px;
    }
    @media ${sizes(992)} {
      height: 100%;
      margin-top: 0px;
      h2 {
        margin-top: 60px;
      }
    }
  }
`;
