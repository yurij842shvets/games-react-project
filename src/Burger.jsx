import { useState } from "react";
import "./home-page-css/Burger.css";
import styled from "styled-components";

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

const Link = styled.a`
  color: #fff;

  @media screen and (max-width: 900px) {
  color: #000;}
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 105px;
@media screen and (max-width: 900px) {

  flex-direction: column;}
`;

const BurgerWrapper = styled.div`
`


export default function Burger({ isOpen, setIsOpen }) {
  return (
    <>
      <BurgerWrapper>
        <div
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: isOpen ? "none" : "" }}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>

        <div className={`menu ${isOpen ? "show" : ""}`}>
          <div className={`burger open close`} onClick={() => setIsOpen(false)}>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
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
        </div>
      </BurgerWrapper>
    </>
  );
}
