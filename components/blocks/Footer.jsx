"use client";

import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { colors, sizes } from "styles/GlobalStyle";
import Link from "next/link";
import Image from "next/image";
import Logo from "public/footer-logo.png";

const Footer = () => {
  return (
    <FooterBlock>
      <div className="footer-box">
        <Row>
          <Col lg={6} className="footer-col">
            <Row>
              <Col md="4" xs="6">
                <div className="footer-menu">
                  <h2>Products</h2>
                  <ul>
                    <li>
                      <Link href="/"> Features</Link>
                    </li>
                    <li>
                      <Link href="/">Enterprice</Link>
                    </li>
                    <li>
                      <Link href="/">Innovation</Link>
                    </li>
                    <li>
                      <Link href="/">Offline</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="4" xs="6">
                <div className="footer-menu">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <Link href="/">About</Link>
                    </li>
                    <li>
                      <Link href="/">Our Story</Link>
                    </li>
                    <li>
                      <Link href="/">Careers</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md="4" xs="6">
                <div className="footer-menu">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <Link href="/">Documentation</Link>
                    </li>
                    <li>
                      <Link href="/">Community</Link>
                    </li>
                    <li>
                      <Link href="/">Contact</Link>
                    </li>
                    <li>
                      <Link href="/">FAQ</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <div className="footer-text">
              <Link href="/">
                <Image src={Logo} alt="Logo footer" />
              </Link>
              <h2>Tristique senectus et netus et malesuada fames</h2>
              <p>©2023 Logoipsum. All rights reserved</p>
            </div>
          </Col>
        </Row>
      </div>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.footer`
  padding: 30px 20px 60px 20px;
  background-color: ${colors.footerGray};
  @media ${sizes(768)} {
    padding: 100px 30px;
  }
  .footer-box {
    max-width: 985px;
    margin: 0 auto;
    .footer-col {
      @media ${sizes(992)} {
        border-right: 2px solid rgba(1, 12, 35, 0.15);
      }
    }

    .footer-menu {
      margin-top: 30px;
      @media ${sizes(768)} {
        margin-top: 0px;
      }
      h2 {
        color: black;
        font-size: 18px;
        letter-spacing: 1.6px;
      }
      ul {
        margin-top: 20px;
        li {
          margin-top: 10px;
          opacity: 0.7;
        }
      }
    }
    .footer-text {
      margin-top: 40px;
      @media ${sizes(992)} {
        padding-left: 100px;
        margin-top: 0px;
      }
      h2 {
        font-size: 24px;
        max-width: 293px;
        line-height: 35px;
        margin-top: 20px;
      }
      p {
        font-size: 15px;
        opacity: 0.7;
        margin-top: 30px;
      }
    }
  }
`;
