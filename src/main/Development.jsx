import styled from "styled-components";
import data from "../../development.json";

const DevelopmentContainer = styled.div`
  background-image: url("./img/Development.jpg");
  background-size: cover;
  background-repeat: no-repeat;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  margin: 180px 0 0 0;
`;

const DescriptionTitle = styled.h3`
  color: #fff;
  font-size: 25px;
  font-family: "Poppins", sans-serif;
`;

const Description = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  width: 900px;
  text-align: center;
`;

const DataContainer = styled.div`
  display: flex;
  width: 1000px;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 90px auto;
`;

const ImageContainer = styled.div`
  width: 65px;
  height: 65px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-rows: auto auto auto; 
  justify-items: center; 
  margin-bottom: 70px;
`;

const Text = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
`;

export default function Development() {
  return (
    <DevelopmentContainer>
      <TextContainer>
        <Title>The Future of Gaming Starts Here</Title>
        <DescriptionTitle>
          We create next-generation game solutions that shape the industry.
        </DescriptionTitle>
        <Description>
          From mobile and PC to console games, AR/VR technologies, and 3D
          modeling — our team brings your boldest ideas to life. Explore
          immersive worlds, innovative gameplay, and cutting-edge design crafted
          by passionate developers.
        </Description>
      </TextContainer>

      <DataContainer>
        {data.map(({ img, text, icon }, index) => (
          <Grid key={index}>
            <ImageContainer>
              <img src={img} alt={text} />
            </ImageContainer>
            <Text>{text}</Text>
            <img src={icon} alt={text} />
          </Grid>
        ))}
      </DataContainer>
    </DevelopmentContainer>
  );
}
