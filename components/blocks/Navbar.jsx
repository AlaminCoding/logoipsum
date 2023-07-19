"use client";

import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/Logo.png";
import { colors, sizes } from "styles/GlobalStyle";
import { BiSolidChevronDown } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Button } from "styles/Button";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleMenu = () => {
    if (navOpen) {
      setNavOpen(false);
      document.body.style.position = "static";
    } else {
      setNavOpen(true);
      document.body.style.position = "fixed";
    }
  };
  return (
    <NavHeader className="primary-container" open={navOpen}>
      <Link href="/" className="logo">
        <Image src={Logo} alt="Logo" />
      </Link>
      <nav>
        <ul>
          <li className="dropdown">
            <Link href="#">
              Product <BiSolidChevronDown />
            </Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="#">Contacts</Link>
          </li>
        </ul>

        <div className="nav-btns">
          <Button $bg={true}>Get Started</Button>
          <Button $bg={false}>Login</Button>
        </div>
      </nav>
      <div className="toggle" onClick={() => handleMenu()}>
        {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </NavHeader>
  );
};

export default Navbar;

const NavHeader = styled.header`
  height: 90px;
  width: 100%;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;

  @media ${sizes(1025)} {
    gap: 100px;
  }
  nav {
    position: fixed;
    width: 100%;
    height: calc(100vh - 90px);
    top: 90px;
    right: ${(props) => (props.open ? "0" : "-100%")};
    background-color: white;
    border-left: 1px solid lightgray;
    border-top: 1px solid lightgray;
    padding: 0px 20px;
    display: block;
    transition: 0.7s ease-in-out;
    z-index: 9999;
    ul {
      li {
        margin-top: 30px;
      }
      a {
        font-family: var(--font-ibm);
        font-weight: 600;
        transition: 300ms;
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 18px;
        &:hover {
          color: ${colors.green};
        }
      }
      .dropdown {
        a {
          color: ${colors.green};
        }
      }
    }
    .nav-btns {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
      margin-top: 30px;
    }
    @media ${sizes(992)} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: auto;
      position: static;
      background-color: transparent;
      border: none;
      padding: 0;
      ul {
        display: flex;
        gap: 40px;
        li {
          margin-top: 0;
        }
      }
      .nav-btns {
        margin-top: 0;
        display: flex;
        gap: 25px;
        flex-direction: row;
      }
    }
  }
  .toggle {
    cursor: pointer;
    svg {
      font-size: 30px;
      color: ${colors.green};
    }
    @media ${sizes(992)} {
      display: none;
    }
  }
`;
