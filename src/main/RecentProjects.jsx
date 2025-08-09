import styled from "styled-components";
import data from "../../recentprojects.json";

const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const Description = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  width: 500px;
  text-align: center;
  margin: 20px auto;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
`;

const ImageContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 50px auto;
  width: 1000px;
  @media screen and (max-width: 1006px) {
    width: 600px;
  }
  @media screen and (max-width: 609px) {
    width: 300px;
  }
`;

const SeeAllButton = styled.button`
  display: block;
  font-family: "Rubik", sans-serif;
  background-color: #242424;
  color: #fff;
  width: 139px;
  height: 57px;
  margin: 90px auto;
`;

export default function RecentProjects() {
  return (
    <>
      <div>
        <Title>Our Recent Projects</Title>
        <Description>
          Take a look at some of our most exciting gaming projects — from
          console to VR experiences, crafted with passion and precision.
        </Description>

        <ImageContainer>
          {data.map(({ img }, index) => (
            <Image key={index} src={img} alt="Recent Project" />
          ))}
        </ImageContainer>

        <SeeAllButton>SEE ALL</SeeAllButton>
      </div>
    </>
  );
}
