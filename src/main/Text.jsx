import styled from "styled-components";

const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  width: 850px;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 90px;
`;

const DescriptionTitle = styled.h3`
  color: #fff;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  margin-top: 30px;
  margin-left: 60px;
`;

const Description = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  width: 540px;
  margin-left: 60px;
`;
const SpidermanImage = styled.img`
  display: block;
  max-width: 85%;
  margin: 20px;
  border-radius: 20px;
  z-index: 1;
  position: relative;
  left: 80px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 711px) {
    position: absolute;
    margin: 50px 0;
    width: 90%;
  }
`;

const ImageBackgroundStyle = styled.div`
  position: relative;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    right: 320px;
    top: -20px;

    width: 200px;
    height: 150px;
    background-image: url("./img/dots-style.png");
    z-index: -1;
    background-size: cover;
  }

  @media screen and (max-width: 711px) {
    display: none;
  }
`;

export default function Text() {
  return (
    <div>
      <TitleContainer>
        <Title>
          Dive into the world of the most popular games. See what millions are
          playing and join the global gaming community.
        </Title>
      </TitleContainer>

      <div>
        <DescriptionTitle>
          Embark on a journey into a new world of games
        </DescriptionTitle>
        <Description>
          Discover exciting virtual worlds, complete unique levels and develop your
          character. The platform gathers engaging titles to keep you up to date with the best in the
          world of gaming.
        </Description>
        <ImageBackgroundStyle></ImageBackgroundStyle>
        <SpidermanImage
          src="./img/spiderman.jpg"
          srcSet="./img/spiderman.jpg 1x, ./img/spiderman@2x.jpg 2x, ./img/spiderman@3x.jpg 3x"
          alt="spiderman"
        />
      </div>
    </div>
  );
}
