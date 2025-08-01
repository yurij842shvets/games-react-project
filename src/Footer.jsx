import styled from "styled-components";

const CommonText = styled.p`
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

`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <Container>
          <div>
            <Logo>LOGO</Logo>
            <CommonText>
              Join our community to stay updated on the latest games, events,
              and platform features.
            </CommonText>
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
            <CommonText>
              Got questions or ideas? Reach out — we’re always here to talk.
            </CommonText>
            <CommonText>+908 89097 890</CommonText>
          </div>

          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Container>

        <div>
          <p>Copyright ® 2021 | All rights Rcerved</p>
        </div>
        
      </FooterContainer>
    </>
  );
}
