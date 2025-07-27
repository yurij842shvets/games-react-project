import styled from "styled-components";

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

      <div></div>
    </DevelopmentContainer>
  );
}
