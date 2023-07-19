"use client";

import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { sizes } from "styles/GlobalStyle";
import { Para } from "styles/Para";
import { Title } from "styles/Title";

const Touch = () => {
  const bar = [1, 2, 3, 4];
  return (
    <Section className="secondary-container common-padding">
      <Row>
        <Col lg={5}>
          <div className="text-box">
            <Title mw="471px">Consectetur adipiscing elit</Title>
            <Para mw="520px">
              Convallis a cras semper auctor neque. Fringilla est ullamcorper
              eget nulla facilisi etiam dignissim viverra
            </Para>
          </div>
        </Col>
        <Col lg="4" md="6">
          <div className="touch-bar">
            <div className="first-bar">
              <div className="bar-box shadow">
                {bar.map((e, idx) => (
                  <Bar
                    key={"first-" + idx}
                    height={idx + 1 * 50 + idx * 15}
                    color="#58BF73"
                    className="bar"
                  ></Bar>
                ))}
              </div>
              <h2 className="shadow" style={{ color: "#58BF73" }}>
                First Touch
              </h2>
            </div>
            <div className="last-bar">
              <div className="bar-box shadow">
                {bar.map((e, idx) => (
                  <Bar
                    key={"last-" + idx}
                    height={idx + 1 * 50 + idx * 15}
                    color="#FFC646"
                    className="bar"
                  ></Bar>
                ))}
              </div>
              <h2 className="shadow" style={{ color: "#FFC646" }}>
                Last Touch
              </h2>
            </div>
          </div>
        </Col>
        <Col lg="3" md="6">
          <div className="circle shadow">
            <h2>3</h2>
            <p>+Custom ones</p>
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Touch;

const Section = styled.section`
  .text-box {
    p {
      margin-top: 20px;
    }
  }
  .bar-box {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 15px;
    border-radius: 20px;
    padding: 35px 30px;
  }
  .first-bar {
    .bar-box {
      flex-direction: row-reverse;
    }
  }
  .touch-bar {
    display: flex;
    gap: 30px;
    margin-top: 40px;
    @media ${sizes(992)} {
      margin-top: 0;
    }
    h2 {
      border-radius: 10px;
      font-size: 20px;
      text-align: center;
      padding: 10px 0px;
      margin-top: 15px;
    }
  }
  .circle {
    height: 200px;
    width: 190px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 40px;
    margin-top: 40px;
    @media ${sizes(992)} {
      margin-top: 0;
    }
    h2 {
      font-size: 100px;
      font-weight: 400;
      margin-bottom: 0;
      display: inline-block;
      line-height: 100%;
    }
    p {
      font-size: 20px;
      text-align: center;
      line-height: 100%;
    }
  }
`;

const Bar = styled.div`
  border-radius: 5px;
  height: ${(props) => props.height + "px"};
  width: 8px;
  background-color: ${(props) => props.color};
`;
