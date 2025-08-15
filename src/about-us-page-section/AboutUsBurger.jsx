import "../burger-css/Burger.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContactButton = styled.button`
  background-color: orange;
  color: #fff;
  padding: 15px 25px;
  z-index: 1;
`;
const Line = styled.div`
  position: relative;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 65px;
    height: 2px;
    background-color: orange;
    border-radius: 30px;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  z-index: 1;

  @media screen and (max-width: 900px) {
    color: #000;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 80px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export default function Burger({ isOpen, setIsOpen }) {
  return (
    <>
      <div>
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
            <StyledLink to="/">Home</StyledLink>

            <div>
              <StyledLink to="/about">About us</StyledLink>
              <Line></Line>
            </div>

            <StyledLink to="/">Portfolio</StyledLink>
            <StyledLink to="/">News</StyledLink>
            <ContactButton>Contact us</ContactButton>
          </Nav>
        </div>
      </div>
    </>
  );
}
