import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//컴포넌트
import styled from "styled-components";
import BoxEmoji from "../Components/BoxEmoji";
import BoxGrid from "../Components/BoxGrid";
import Loader from "../Components/Loader";
import ToolTip from "../Components/ToolTip";
//import NavLocal from "../Components/NavLocal";

//데이터
import {emojisData} from "../Data/emojisData";

//이미지
import BGimg from "../img/BG.webp"

//CSS
const Container = styled.div`
  margin-top:-152px;
  overflow: hidden;
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

  span {
    display: block;
  }

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

const ToAbout = styled.div`
  cursor: pointer;
  margin-top: 16px;
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(0,0,0,0.2);
  backdrop-filter: blur(24px);
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border: 1px solid black;

  &:hover{
    border: 1px solid white;
  }

  @media only screen and (min-width: 800px){
    font-size: 16px;
  }
`

const scrollToTop = () => {
  window.scrollTo({top:0} )
}

function Home() {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=> {
    // const img = new Image();

    // img.src = emojisData[0].thumnail_img_src;
    // img.onload = () => {
    //   setIsLoading(true);
    // }
    let checkLoad = 0;
    emojisData.map((emoji) => {
      const newImg = new Image();
      newImg.src = emoji.thumnail_img_src;
      newImg.onload = () => {
        checkLoad = checkLoad+1;
        if (40 === checkLoad){
          setIsLoading(false);
        }
      }
      return null;
    })
    

  },[]);

  const [isCopy, setIsCopy] = useState(false);
  const checkCopy = () => {
    setIsCopy(true)
    const timeout = setTimeout(()=>setIsCopy(false),3000)
    return () => {
      clearTimeout(timeout)
    }
  }
  
  return <>
    {/* <NavLocal /> */}
    <Container>
      <MainBanner />

      <Copy>
          <Title>
            <span>88개가 넘는 이모지.</span>
            <span>이 모든 것이 모두 무료.</span>
          </Title>
          <SubTitle>
            Designed by 이윤규
          </SubTitle>
          <Link to="about" onClick={scrollToTop}>
            <ToAbout>
              궁금하다면? 👉
            </ToAbout>
          </Link>
      </Copy>
      <BoxGrid>
        <>
          {isLoading ? <Loader/> :
          <>
            {emojisData.map(emoji => 
                <div onClick={checkCopy} key={emoji.id}>
                  <BoxEmoji 
                  id={emoji.id}
                  main_category={emoji.main_category}
                  sub_category={emoji.sub_category}
                  KOR_title={emoji.KOR_title}
                  ENG_title={emoji.ENG_title}
                  thumnail_img_src={emoji.thumnail_img_src}
                  orginal_img_Src={emoji.orginal_img_Src}
                  download_link={emoji.download_link}
                  tag={emoji.tag}
                  />
                </div>
              )}
            </>
          }
        </>
      </BoxGrid>
      <ToolTip isCopy={isCopy}/>
    </Container>
  </>;
}

export default Home;