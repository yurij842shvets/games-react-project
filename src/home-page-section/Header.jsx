import styled from "styled-components";
import Burger from "./Burger";
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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Logo>LOGO</Logo>

      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
    </Wrapper>
  );
}
