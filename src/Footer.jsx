import styled from "styled-components";

const CommonText = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
`;

const Longtext = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  width: 370px;
`;

const Logo = styled.h3`
  color: #fff;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
`;

const FooterContainer = styled.footer`
  margin-top: 100px;
  display: flex;
  justify-contnet: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
`;

const ImageContainer = styled.div`
  width: 34px;
  height: 34px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  gap: 15px;
`;

const FooterBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #d2d2d2;
  width: 100%;
`;

const FooterText = styled.p`
  color: #fff;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  margin: 40px auto;
`;

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <Container>
          <div>
            <Logo>LOGO</Logo>
            <Longtext>
              Join our community to stay updated on the latest games, events,
              and platform features.
            </Longtext>
            <CommonText>@Logo</CommonText>
          </div>

          <div>
            <CommonText>About us</CommonText>
            <CommonText>Zeux</CommonText>
            <CommonText>Portfolio</CommonText>
            <CommonText>Careers</CommonText>
          </div>

          <div>
            <CommonText>Contact us</CommonText>
            <Longtext>
              Got questions or ideas? Reach out — we’re always here to talk.
            </Longtext>
            <CommonText>+908 89097 890</CommonText>
          </div>

          <ImageWrapper>
            <ImageContainer>
              <img src="./img/facebook.png" alt="facebook" />
            </ImageContainer>
            <ImageContainer>
              <img src="./img/instagram.png" alt="instagram" />
            </ImageContainer>
            <ImageContainer>
              <img src="./img/twitter.png" alt="twitter" />
            </ImageContainer>
            <ImageContainer>
              <img src="./img/linkedin.png" alt="linkedin" />
            </ImageContainer>
          </ImageWrapper>
        </Container>

        <FooterBorder>
          <FooterText>Copyright ® 2021 | All rights Reserved</FooterText>
        </FooterBorder>
      </FooterContainer>
    </>
  );
}
