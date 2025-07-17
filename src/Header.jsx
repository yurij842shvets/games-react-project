import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Link = styled.a`
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 25px;
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

export default function Header() {
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
      </Nav>
      <ContactButton>Contact us</ContactButton>
    </Wrapper>
  );
}
