"use client";
import { Col, Row } from "react-bootstrap";
import { Button } from "styles/Button";
import { BsFillPlayCircleFill } from "react-icons/bs";
import styled from "styled-components";
import Image from "next/image";
import heroImg from "public/hero-banner.png";
import { resFont, sizes } from "styles/GlobalStyle";
import { Para } from "styles/Para";

const Hero = () => {
  return (
    <section className="container-left pb">
      <Row>
        <Col lg={6}>
          <Content>
            <h2>
              Lore <span>ipsum.</span> Dolor <span>sit.</span>
            </h2>
            <Para mw="658px" align="left" className="text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde
              omnis iste natus error.
            </Para>

            <div className="btns">
              <Button $bg={false}>Viverra orci sagittis</Button>
              <Button $bg={true}>
                <BsFillPlayCircleFill /> Get a demo
              </Button>
            </div>
          </Content>
        </Col>
        <Col lg={6}>
          <HeroImg>
            <Image src={heroImg} alt="hero img" />
          </HeroImg>
        </Col>
      </Row>
    </section>
  );
};

export default Hero;

const Content = styled.div`
  padding-top: 40px;
  h2 {
    font-size: ${resFont(50, 126)};
    font-weight: 400;
    line-height: 1.1em;
    span {
      font-weight: 600;
    }
  }
  .text {
    margin-top: 40px;
  }
  .btns {
    display: flex;
    gap: 16px;
    margin-top: 40px;
    flex-wrap: wrap;
  }
  @media ${sizes(992)} {
    padding-top: 115px;
  }
`;

const HeroImg = styled.div`
  height: auto;
  width: 100%;
  margin-top: 40px;
  position: relative;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media ${sizes(992)} {
    margin-top: 0px;
    height: calc(100vh - 90px);
    img {
      height: 100%;
      object-fit: none;
    }
  }
`;
