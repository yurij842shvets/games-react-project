import styled from "styled-components";

const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  width: 850px;
  font-size: 42px;
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
`;

const Description = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  width: 540px;
`;
const SpidermanImage = styled.img`
  margin-top: 50px;
  border-radius: 20px;
  z-index: 1;
  position: relative;
`;

const ImageBackgroundStyle = styled.div`
  position: relative;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    right: 190px;
    top: -20px;

    width: 200px;
    height: 150px;
    background-image: url("./img/dots-style.png");
    z-index: -1;
    background-size: cover;
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
          Discover exciting virtual worlds, complete unique levels, develop
          your character, and explore what was once unreachable. The platform
          gathers the most engaging titles to keep you up to date with the best
          in the world of gaming.
        </Description>
        <ImageBackgroundStyle></ImageBackgroundStyle>
        <SpidermanImage src="./img/spiderman.jpg" alt="spiderman" />
      </div>
    </div>
  );
}
