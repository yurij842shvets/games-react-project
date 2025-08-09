import styled from "styled-components";

const LogosContainer = styled.div`
  margin-top: 100px;
  display: flex;

  @media screen and (max-width: 905px) {
    margin: 100px 15% 0;
  }
`;

const GameDevText = styled.p`
  color: orange;
  font-family: "Poppins", sans-serif;
`;
const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  width: 280px;
  font-size: 42px;
  font-family: "Poppins", sans-serif;
`;

const Description = styled.p`
  color: #fff;
  width: 400px;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
`;

const DetailsButton = styled.button`
  background-color: orange;
  color: #fff;
  padding: 15px 25px;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
`;

const Joystick = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 250px;
    top: -260px;

    background-image: url("./img/joy_stick.png");
    width: 440px;
    height: 750px;
  }

  @media screen and (max-width: 1158px) {
    left: -250px;
  }
  @media screen and (max-width: 905px) {
    display: none;
  }
`;
const UnityLogo = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 80px;
    top: 180px;

    background-image: url("./img/unity.png");
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;

    @media screen and (max-width: 1158px) {
      left: -120px;
    }

    @media screen and (max-width: 905px) {
      left: 15px;
    }
  }
`;

const EyeLogo = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 270px;
    top: -70px;

    background-image: url("./img/eye.png");
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;

    @media screen and (max-width: 1158px) {
      left: 20px;
    }

    @media screen and (max-width: 905px) {
      top: 10px;
    }
  }
`;

const UnrealLogo = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 600px;
    top: -60px;

    background-image: url("./img/unreal.png");
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;

    @media screen and (max-width: 1158px) {
      left: 320px;
    }

    @media screen and (max-width: 905px) {
      left: 34px;
      top: 300px;
    }
  }
`;

export default function Logos() {
  return (
    <>
      <LogosContainer>
        <div>
          <GameDevText>3D game Dev</GameDevText>
          <Title>Work that we produce for our clients</Title>
          <Description>
            We create next-gen gaming experiences that combine stunning visuals,
            seamless mechanics, and unforgettable storytelling. Trusted by
            global studios, we bring your game ideas to life — from concept to
            release.
          </Description>
          <DetailsButton>Get more details</DetailsButton>
        </div>

        <div>
          <UnityLogo></UnityLogo>
          <EyeLogo></EyeLogo>
          <Joystick></Joystick>
          <UnrealLogo></UnrealLogo>
        </div>
      </LogosContainer>
    </>
  );
}
