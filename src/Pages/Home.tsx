import styled from "styled-components";
import Category from "../Components/Category";

import {emojisData} from "../Data/emojisData";

import BGimg from "../img/BG.png"

const Container = styled.div`
  margin-top:-152px;
  height: 5000vh;
`;

const MainBanner = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background: url(${BGimg});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    width: 100%;
    height: 724px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%);

    @media only screen and (max-width: 700px){
      background: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%);
      height: 480px;
    }
  }
  

  @media only screen and (max-width: 700px){
    height: 480px;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 240px;
  padding-bottom: 40px;

  word-break: keep-all;
  word-wrap: break-word;

  @media only screen and (max-width: 1080px){
    padding-top: 200px;
    padding-bottom: 40px;
  }

  @media only screen and (max-width: 700px){
    padding-top: 120px;
    padding-bottom: 40px;
  }
`;

const Title = styled.p`
  font-size: 96px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;

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

const MainSection = styled.div`
  display: flex;
  justify-content: center;
`;

const Frame = styled.div`
  width: 100%;
  overflow: hidden;
  max-width: 1256px;
  margin: 0 auto;
  padding: 24px;

  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  position: absolute;
  

  @media only screen and (min-width: 500px){
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }
  @media only screen and (min-width: 1050px){
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #161616;
  border-radius: 8px;
  min-height: 120px;

  img {
    width: 100%;
    @media only screen and (min-width: 800px){
      max-width: 240px;
      max-height: 240px;
    }
    
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    font-size: 12px;
    font-weight: bold;
    @media only screen and (min-width: 800px){
      font-size: 16px;
    }
  }
`;




function Home() {
  console.log(emojisData)

  return <>
    <Category />
    <Container>
      <MainBanner />

      <Copy>
          <Title>
            <p>88개가 넘는 이모지.</p>
            <p>이 모든 것이 모두 무료.</p>
          </Title>
          <SubTitle>
            - 현재 구직 중인 이윤규 드림 -
          </SubTitle>
      </Copy>

      <MainSection>
        <Frame>
          {emojisData.map(emoji =>
            <Box key={emoji.id}>
              <a href={emoji.download_link}>
                <img src={emoji.thumnail_img_src} alt="emoji tumnail" />
                <span>{emoji.id}</span>
                <span>{emoji.sub_category.KOR_title}</span>
                <span>{emoji.KOR_title}</span>
              </a>
            </Box>
          )}
          {/* {[...Array(499)].map((i) => (
                  <Box key={i}>{i}</Box>
          ))} */}
          
        </Frame>
      </MainSection>
    </Container> 
  </>;
}

export default Home;
