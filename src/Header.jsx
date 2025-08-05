import styled from "styled-components";
import Burger from "./Burger";
import Menu from "./Menu";
import React, { useState } from "react";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Link = styled.a`
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 55px;

  @media screen and (max-width: 829px) {
    display: none;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  color: #fff;
`;
const ContactButton = styled.button`
  background-color: orange;
  color: #fff;
  padding: 15px 25px;
`;
const Line = styled.div`
  position: relative;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 45px;
    height: 2px;
    background-color: orange;
    border-radius: 30px;
  }
`;

const BurgerWrapper = styled.div`
  display: none;

  @media screen and (max-width: 829px) {
    display: block;
  }
`;

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper>
      <Logo>LOGO</Logo>
      <Nav>
        <div>
          <Link href="#">Home</Link>
          <Line></Line>
        </div>

        <Link href="#">About us</Link>
        <Link href="#">Portfolio</Link>
        <Link href="#">News</Link>
        <ContactButton>Contact us</ContactButton>
      </Nav>

      <BurgerWrapper>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </BurgerWrapper>
    </Wrapper>
  );
}
