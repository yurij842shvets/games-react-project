import trendinggames from "../../trendinggames.json";
import styled from "styled-components";

const Title = styled.p`
  color: #fff;
  font-size: 32px;
  font-family: "Rubik", sans-serif;
`;

const SeeAllButton = styled.button`
  font-family: "Rubik", sans-serif;
  background-color: #242424;
  color: #fff;
  width: 139px;
  height: 57px;
`;

const Text = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: "Rubik", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const TextContainer = styled.div`
  margin: 100px 45px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DataContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media screen and (max-width: 1041px) {
    width: 600px;
    margin: 50px auto;  
  }
`;


export default function TrendingGames() {
  return (
    <>
      <div>
        <TextContainer>
          <Title>Currenlty Trending Games</Title>
          <SeeAllButton>SEE ALL</SeeAllButton>
        </TextContainer>

        <DataContainer>
          {trendinggames.map(({ img, icon, text, index }) => (
            <div key={index}>
              <img src={img} alt={text} />
              <Text >
                <img src={icon} alt={text} />
                {text}
              </Text>
            </div>
          ))}
        </DataContainer>
      </div>
    </>
  );
}
