import styled from "styled-components";

const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  margin-left: 60px;
  @media screen and (max-width: 839px) {
    margin-left: 0;
  }
`;

const Description = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  margin-left: 60px;
  @media screen and (max-width: 839px) {
    margin-left: 0;
  }
`;

const EmailContainer = styled.div`
  background-color: #1c140f;
  width: 1170px;
  height: 190px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0 0 70px;
  padding: 20px;
  @media screen and (max-width: 1288px) {
    flex-direction: column;
    justify-content: center;
    width: 700px;
    height: 260px;
  }
  @media screen and (max-width: 821px) {
    width: 450px;
    margin: 50px 0;
  }

  @media screen and (max-width: 508px) {
    width: 100%;
    background-color: transparent;
  }
`;

const Input = styled.input`
  padding: 0 15px;
  border: none;
  outline: none;
  font-size: 14px;
  width: 250px;
  font-family: "Poppins", sans-serif;
  background: #fff;
  color: #000;
  border-radius: 20px;
  @media screen and (max-width: 508px) {
    width: 100px;
  }
  @media screen and (max-width: 385px) {
    width: 70px;
  }
  @media screen and (max-width: 373px) {
    overflow: auto;
  }
`;

const Button = styled.button`
  padding: 12px 16px;
  background-color: orange;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 15px;
  font-family: "Poppins", sans-serif;
`;

const EmailWrapper = styled.div`
  display: flex;
  width: fit-content;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 4px;
  background-color: #ffffff;
  @media screen and (max-width: 508px) {
    margin-right: 40px;
  }

  @media screen and (max-width: 407px) {
    margin-right: 40px;
  }
`;

const Container = styled.div`
  @media screen and (max-width: 821px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default function Email() {
  return (
    <>
      <Container>
        <div>
          <Title>Never miss an update</Title>
          <Description>
            Be the first to know about TDA updates, new features, and exclusive
            rewards. We respect your inbox — only what matters.
          </Description>
        </div>

        <EmailContainer>
          <div>
            <Title>Stay in the loop</Title>
            <Description>
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!
            </Description>
          </div>
          <EmailWrapper>
            <Input type="text" placeholder="Enter email adress" />
            <Button>Continue</Button>
          </EmailWrapper>
        </EmailContainer>
      </Container>
    </>
  );
}
