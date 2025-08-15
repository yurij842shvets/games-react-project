import styled from "styled-components";
import AboutUsBurger from "./AboutUsBurger";
import { useState } from "react";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: #fff;
`;

export default function AboutUsHeader() {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <Logo>LOGO</Logo>

        <AboutUsBurger isOpen={isOpen} setIsOpen={setIsOpen} />
      </Wrapper>
    </>
  );
}
