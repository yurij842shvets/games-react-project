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

export default function Text() {
  return (
    <div>
      <TitleContainer>
        <Title>
          Відкрий для себе найпопулярніші ігри. Дивись, у що грають мільйони, і
          приєднуйся до геймерської спільноти з усього світу.
        </Title>
      </TitleContainer>

      <div>
        <DescriptionTitle> Занурюйся в новий світ ігор</DescriptionTitle>
        <Description>
          Відкрий для себе захопливі віртуальні світи, проходь унікальні рівні,
          розвивай свого героя та досліджуй те, що раніше було недосяжним.
          Платформа збирає найцікавіші тайтли, щоб ти завжди був у курсі
          найкращого в світі ігор.
        </Description>
      </div>
    </div>
  );
}
