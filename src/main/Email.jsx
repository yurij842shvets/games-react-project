import styled from "styled-components";

const Title = styled.h2`
  font-weight: bold;
  color: #fff;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
  margin-left: 60px;
`;

const Description = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  width: 540px;
  margin-left: 60px;
`;

const EmailContainer = styled.div`
  background-color: #1c140f;
  width: 1170px;
  height: 190px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 60px 0 0 70px;
  padding: 20px;
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
  overflow: hidden;
  padding: 8px;
  background-color: #ffffff;
`;

export default function Email() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}
