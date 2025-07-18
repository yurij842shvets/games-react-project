import styled from "styled-components";

const LogosContainer = styled.div`
  margin-top: 100px;
`;

const GameDevText = styled.p`
  color: orange;
`;
const Logo = styled.h2`
  font-weight: bold;
  color: #fff;
  width: 280px;
  font-size: 42px;
`;

const Description = styled.p`
  color: #fff;
  width: 400px;
  font-size: 14px;
`;

const DetailsButton = styled.button`
  background-color: orange;
  color: #fff;
  padding: 15px 25px;
  margin-top: 20px;
`;

const Joystick = styled.div`
  position: relative;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-image: url("./img/joy_stick.png");
  }
`;

export default function Logos() {
  return (
    <>
      <LogosContainer>
        <div>
          <GameDevText>3D game Dev</GameDevText>
          <Logo>Work that we produce for our clients</Logo>
          <Description>
            We create next-gen gaming experiences that combine stunning visuals,
            seamless mechanics, and unforgettable storytelling. Trusted by
            global studios, we bring your game ideas to life — from concept to
            release.
          </Description>
          <DetailsButton>Get more details</DetailsButton>
        </div>

        <div>
          <div></div>
          <div></div>
          <Joystick></Joystick>
          <div></div>
          <div></div>
        </div>
      </LogosContainer>
    </>
  );
}
