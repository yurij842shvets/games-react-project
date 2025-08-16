import styled from "styled-components";

const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  width: 500px;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 387px) {
    width: 200px;
  }
`;

const Description = styled.p`
  color: #fff;
  width: 400px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 557px) {
    width: 250px;
  }
`;

const Flex = styled.p`
  display: flex;
`;

const ArrowContainer = styled.div`
  position: relative;
  margin: 0 25px;
`;
const Arrow = styled.div`
  &::after {
    width: 10px;
    height: 2px;
    background-color: #fff;
    transform: rotate(-45deg);
  }
`;

export default function Titles() {
  return (
    <>
      <div>
        <div>
          <Flex>
            <span>Home</span>
            <ArrowContainer>
              <Arrow></Arrow>
            </ArrowContainer>
            <span>About us</span>
          </Flex>

          <Title>
            We are more than just a gaming platform — we are a community built
            by players, for players. We bring games to life in a way that
            inspires and unites."
          </Title>

          <Description>
            Our mission is to connect people through immersive experiences,
            where creativity, competition, and fun come together. Every project
            we work on is fueled by passion and a deep love for the gaming
            world. With us, you don’t just play — you become part of something
            bigger.
          </Description>
        </div>

        <div></div>
      </div>
    </>
  );
}
