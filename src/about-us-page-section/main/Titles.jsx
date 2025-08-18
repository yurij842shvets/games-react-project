import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import { useState } from "react";

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
  font-weight: normal;
  @media screen and (max-width: 557px) {
    width: 250px;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 0 32px;
`;

const ArrowContainer = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
`;
const Arrow = styled.div`
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    background-color: #fff;
    transform: rotate(30deg) translate(21px, -1px);
  }
  &::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    background-color: #fff;
    transform: rotate(-17deg) translate(13px, 18px);
  }
`;
const HomeText = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  padding: 0;
`;

const AboutUsText = styled.p`
  color: orange;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  padding: 0;
`;

const TitlesContainer = styled.div`
  margin: 100px 45px 0;
  display: flex;
  justify-content: space-between;
`;

const DetailsButton = styled.button`
  background-color: orange;
  color: #fff;
  padding: 15px 25px;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 40px;
`;
const Switcher = styled.div`
display: flex;
gap: 10px;
`

const AboutUsMainImg = styled.img`
  width: 650px;
  height: 550px;
  margin: 0;
`;
export default function Titles() {
  const images = ["./img/About-us-main.jpg", "./img/keyboard.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(1);
  };
  const prevImage = () => {
    setCurrentIndex(0);
  };

  return (
    <>
      <TitlesContainer>
        <div>
          <Flex>
            <HomeText>Home</HomeText>
            <ArrowContainer>
              <Arrow></Arrow>
            </ArrowContainer>
            <AboutUsText>About us</AboutUsText>
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

          <DetailsButton>
            Get in Touch <FaArrowRight />
          </DetailsButton>
        </div>

        <div>
          <AboutUsMainImg
            src={images[currentIndex]}
            alt="about-us-main-pic"
          />
          <Switcher>
            <button onClick={prevImage}>
              <FaArrowLeftLong />
            </button>
            <p>{currentIndex + 1} of {images.length}</p>
            <button onClick={nextImage}>
              <FaArrowRightLong />
            </button>
          </Switcher>
        </div>
      </TitlesContainer>
    </>
  );
}
