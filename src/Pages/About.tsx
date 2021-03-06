import styled, { keyframes } from "styled-components";
import QR from "img/QR.jpg";

import img_01 from "img/about/img_01.png"
import img_02 from "img/about/img_02.png"
import img_03 from "img/about/img_03.png"
import img_04 from "img/about/img_04.png"

import img_05 from "img/about/img_05.png"
import img_06 from "img/about/img_06.png"
import img_07 from "img/about/img_07.png"
import img_08 from "img/about/img_08.png"

import img_09 from "img/about/img_09.png"
import img_10 from "img/about/img_10.png"
import img_11 from "img/about/img_11.png"
import img_12 from "img/about/img_12.png"

const show = keyframes`
    0% {
      background-color: rgba(0,0,0,1);
      color: rgba(255,255,255,1);
    }
    50% {
      background-color: rgba(0,0,0,1);
      color: rgba(255,255,255,1);
    }
    100% {
      background-color: rgba(255,255,255,1);
      color: rgba(0,0,0,1);
    }
`

const Container = styled.div`
  overflow: hidden;

  animation-name: ${show};
  animation-delay: 0.2s;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
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
            #????????? #C4D #?????????
          </SubTitle>
          <SubTitle>
            <Bold>???????????? ???????????? ?????????, ????????????</Bold>
          </SubTitle>
          <Title>
            <span>????????? ??????,</span>
            <span>????????? ??????,</span>
            <span>????????? ??????.</span>
          </Title>
          <Box>
          <Br/>
          <a href="https://open.kakao.com/o/gOw4KUXd" target="_blank" rel="noreferrer">
            <QRcode src={QR} alt="my profile contact" />
          </a>
          <SubTitle>
              <span>?????? ????????? ??????</span>
              <span>?????? ?????????</span>
          </SubTitle>
        </Box>
        </Box>
        <Br/>
        <Br/>
        <Box>
          <SubTitle>
                <Bold>??? ????????????????</Bold>
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
                <Bold>????????? ????????????????</Bold>
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
                <Bold>??? ?????????????</Bold>
          </SubTitle>
          <ToonImg src={img_09} />
          <ToonImg src={img_10} />
          <ToonImg src={img_11} />
          <ToonImg src={img_12} />
          <SubTitle>
                <Bold>????????? ??????</Bold>
                <span>1. ????????? ??? ?????????</span>
                <span>2. NEXT??? SEO ?????????</span>
                <span>3. ????????? ????????? ?????????</span>
          </SubTitle>
        </Box>
        <Br/>
        <Box>
          <a href="https://open.kakao.com/o/gOw4KUXd" target="_blank" rel="noreferrer">
            <QRcode src={QR} alt="my profile contact" />
          </a>
          <SubTitle>
          ??? ????????? ?????? ????????????
          </SubTitle>
        </Box>
      </Copy>
    </Container>
  </>
}

export default About;
