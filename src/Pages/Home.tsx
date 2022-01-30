import styled from "styled-components";
import Category from "../Components/Category";

const Container = styled.div`
  margin-top:-152px;
  height: 500vh;
`;

const MainBanner = styled.div`
  width: 100%;
  height: 720px;
  background-color: teal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  word-break: keep-all;

  @media only screen and (max-width: 700px){
    height: 480px;
  }
`;

const Title = styled.p`
  font-size: 96px;
  font-weight: bold;
  margin-top: 120px;
  margin-bottom: 24px;
  text-align: center;

  @media only screen and (max-width: 1080px){
    font-size: 64px;
  }

  @media only screen and (max-width: 700px){
    margin-top: 136px;
    font-size: 32px;
  }
`;

const SubTitle = styled.p`
  font-size: 24px;
  font-weight: bold;

  @media only screen and (max-width: 700px){
    font-size: 16px;
  }
`;


function Home() {
  return <>
    <Category />
    <Container>
      <MainBanner>
        <Title>
          <p>300개가 넘는 이모지.</p>
          <p>이 모든 것이 모두 무료.</p>
        </Title>
        <SubTitle>
          Designed by YUNXXX
        </SubTitle>
      </MainBanner>
      home
    </Container> 
  </>;
}

export default Home;
