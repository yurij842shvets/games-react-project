import { MdHeight } from "react-icons/md";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  @media screen and (max-width: 387px) {
    width: 200px;
  }
`;

export default function Cards() {
  const titleStyles = (color) => ({
    width: "195px",
    height: "55px",
    backgroundColor: color,
    color: "#fff",
    fontSize: "12px",
    fontFamily: "Poppins, sans-serif",
    opacity: "0.5",
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  });

  return (
    <>
      <Title>Why work with us</Title>
      <Container>
        <div>
          <div style={titleStyles("#B000DC")}>
            <h3>Innovation first</h3>
          </div>

          <p>
            We constantly explore new technologies to deliver the gaming
            experience of the future. Our vision is to always stay one step
            ahead and bring players unique worlds to explore.
          </p>
        </div>
        <div>
          <div style={titleStyles("#DC4200")}>
            <h3>Community driven</h3>
          </div>

          <p>
            Every project grows together with our players – we listen, test, and
            improve. We believe that the best games are built hand in hand with
            the community.
          </p>
        </div>
        <div>
          <div style={titleStyles("#00DC8D")}>
            <h3>Trusted expertise</h3>
          </div>

          <p>
            Our team has years of experience in game development and web
            technologies, ensuring top quality. From concept to launch, we
            guarantee reliability and professional execution.
          </p>
        </div>
      </Container>
    </>
  );
}
