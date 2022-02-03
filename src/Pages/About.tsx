import styled from "styled-components";
import QR from "../img/QR.jpg";

import img_01 from "../img/about/img_01.png"
import img_02 from "../img/about/img_02.png"
import img_03 from "../img/about/img_03.png"
import img_04 from "../img/about/img_04.png"

import img_05 from "../img/about/img_05.png"
import img_06 from "../img/about/img_06.png"
import img_07 from "../img/about/img_07.png"
import img_08 from "../img/about/img_08.png"

import img_09 from "../img/about/img_09.png"
import img_10 from "../img/about/img_10.png"
import img_11 from "../img/about/img_11.png"
import img_12 from "../img/about/img_12.png"

const Container = styled.div`
  overflow: hidden;
  background-color: white;
  color: black;
`

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 160px;
  padding-bottom: 320px;

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
  display: flex;
  flex-direction: column;
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

const SubTitle = styled.span`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 24px;

  @media only screen and (max-width: 700px){
    font-size: 16px;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`


const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  padding: 24px;
`

const Br = styled.div`
  margin-bottom: 80px;
`;

const QRcode = styled.img`
  cursor: pointer;
  width: 100%;
  max-width: 240px;
  margin-bottom: 24px;
`

const ToonImg = styled.img`
  width: 100%;
  max-width: 480px;
  margin-bottom: 80px;
`;

function About() {
  return <>
    <Container>
      <Copy>
        <Box>
        <SubTitle>
            #피그마 #C4D #리액트
          </SubTitle>
          <SubTitle>
            <Bold>구합니다, 구직 중인 디자이너 이윤규</Bold>
          </SubTitle>
          <Title>
            <span>함께할 팀원,</span>
            <span>존경할 사수,</span>
            <span>체계적 회사.</span>
          </Title>
          <Box>
          <Br/>
          <a href="https://open.kakao.com/o/gOw4KUXd" target="_blank" rel="noreferrer">
            <QRcode src={QR} alt="my profile contact" />
          </a>
          <SubTitle>
              <span>카톡 채팅방 링크</span>
              <span>항시 대기중</span>
          </SubTitle>
        </Box>
        </Box>
        <Br/>
        <Br/>
        <Box>
          <SubTitle>
                <Bold>왜 만들었나요?</Bold>
          </SubTitle>
          <ToonImg src={img_01} />
          <ToonImg src={img_02} />
          <ToonImg src={img_03} />
          <ToonImg src={img_04} />
        </Box>
        <Br/>
        <Br/>
        <Box>
          <SubTitle>
                <Bold>포트폴리오 여정기</Bold>
          </SubTitle>
          <ToonImg src={img_05} />
          <ToonImg src={img_06} />
          <ToonImg src={img_07} />
          <ToonImg src={img_08} />
        </Box>
        <Br/>
        <Br/>
        <Box>
          <SubTitle>
                <Bold>더 만들까요?</Bold>
          </SubTitle>
          <ToonImg src={img_09} />
          <ToonImg src={img_10} />
          <ToonImg src={img_11} />
          <ToonImg src={img_12} />
          <SubTitle>
                <Bold>앞으로 할일</Bold>
                <span>1. 이모지 더 만들기</span>
                <span>2. NEXT로 SEO 최적화</span>
                <span>3. 스크롤 스파이 만들기</span>
          </SubTitle>
        </Box>
        <Br/>
        <Box>
          <a href="https://open.kakao.com/o/gOw4KUXd" target="_blank" rel="noreferrer">
            <QRcode src={QR} alt="my profile contact" />
          </a>
          <SubTitle>
          더 궁금한 점은 카톡으로
          </SubTitle>
        </Box>
      </Copy>
    </Container>
  </>
}

export default About;
