"use client";

import styled from "styled-components";
import { Para } from "styles/Para";
import { Title } from "styles/Title";
import ChartImg from "public/chartImg.png";
import Image from "next/image";
import { MainTable } from "styles/CommonTable";
import { fbData, logoData } from "utils/MainTableData";
import { Row, Col } from "react-bootstrap";
import { colors, sizes } from "styles/GlobalStyle";

const ChartTable = () => {
  return (
    <Section className="common-padding">
      <div className="primary-container">
        <Title mw="870px" align="center" className="title">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </Title>
        <Para mw="815px" align="center" className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </Para>
        <div className="img-box">
          <Image src={ChartImg} alt="chart_img" />
        </div>
      </div>
      <div className="secondary-container">
        <Row>
          <Col md={6}>
            <div className="table-box">
              <MainTable>
                <caption>Facebook Data</caption>
                <thead>
                  <tr>
                    <th>Ad name</th>
                    <th>Orders</th>
                    <th>ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {fbData.map((e, idx) => (
                    <tr key={"fb-table-" + idx}>
                      <td>{e.ad}</td>
                      <td>{e.order}</td>
                      <td>{e.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </MainTable>
            </div>
          </Col>
          <Col md={6}>
            <div className="table-box">
              <MainTable>
                <caption>LogoIpsum Data</caption>
                <thead>
                  <tr>
                    <th>Ad name</th>
                    <th>Orders</th>
                    <th>ROAS</th>
                  </tr>
                </thead>
                <tbody>
                  {logoData.map((e, idx) => (
                    <tr key={"logo-table-" + idx}>
                      <td>{e.ad}</td>
                      <td>{e.order}</td>
                      <td>{e.roas}</td>
                    </tr>
                  ))}
                </tbody>
              </MainTable>
            </div>
          </Col>
        </Row>
      </div>
    </Section>
  );
};

export default ChartTable;

const Section = styled.section`
  .title {
    margin: 0 auto;
  }
  .subtitle {
    margin: 0 auto;
    margin-top: 20px;
  }
  .img-box {
    margin-top: 60px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .table-box {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      @media ${sizes(992)} {
        display: none;
      }
    }
    margin-top: 40px;
    caption {
      caption-side: top;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      color: ${colors.black};
    }
    td {
      background-color: ${colors.lightGreen};
    }
  }
`;
