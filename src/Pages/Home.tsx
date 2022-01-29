import styled from "styled-components";
import Category from "../Components/Category";

const Container = styled.div`
  margin-top:-152px;
  height: 200vh;
`;

const MainBanner = styled.div`
  width: 100%;
  height: 720px;
  background-color: red;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 96px;
  font-weight: bold;
  margin-top: 104px;
  margin-bottom: 24px;
  text-align: center;
`;

const SubTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
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
