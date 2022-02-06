import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//컴포넌트
import styled from "styled-components";
import BoxEmoji from "Components/BoxEmoji";
import BoxGrid from "Components/BoxGrid";
import Loader from "Components/Loader";
import ToolTip from "Components/ToolTip";
//import NavLocal from "Components/NavLocal";

//데이터
import {emojisData} from "Data/emojisData";

//이미지
import BGimg from "img/BG.webp"
import { AnimatePresence, motion } from "framer-motion";

//CSS
const Container = styled.div`
  margin-top:-152px;
  overflow: hidden;
`;

const MainBanner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: 100%;
  height: 80vh;
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
    height: 81vh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(rgba(0,0,0,0) 40%, rgba(0,0,0,1) 95%);
  }
`;

const Copy = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 65vh;
  padding-bottom: 40px;

  word-break: keep-all;
  word-wrap: break-word;

  @media only screen and (max-width: 1080px){
    padding-top: 70vh;
    padding-bottom: 24px;
  }

  @media only screen and (max-width: 700px){
    padding-top: 75vh;
    font-size: 24px;
  }
`;

const Title = styled(motion.p)`
  font-size: 96px;
  font-weight: bold;
  text-align: center;

  span {
    display: block;
  }

  @media only screen and (max-width: 1080px){
    font-size: 64px;
  }

  @media only screen and (max-width: 700px){
    font-size: 32px;
  }
`;

const SubTitle = styled(motion.p)`
  margin-top: 16px;
  font-size: 24px;
  font-weight: bold;

  @media only screen and (max-width: 700px){
    font-size: 16px;
  }
`;

const ToAbout = styled(motion.div)`
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
//애니메이션
const copyAnime = {
  inital: {
      opacity: 0,
      y: 20,
  },

  visible: {
      opacity: 1,
      y:0,
      transition: {
          type:"linear",
          ease:"easeOut",
          duration: 0.5,
          staggerChildren: 0.2,
      }
  },

  hidden: {
      opacity: 0,
      y: -20,
  }
}

const childAnime = {
  inital: {
    opacity: 0,
    y: 20,
  },

  visible: {
      opacity: 1,
      y:0,
      transition: {
          type:"linear",
          ease:"easeOut",
          duration: 1,
      }
  },

  hidden: {
      opacity: 0,
      y: -20,
  }
}


//함수
const scrollToTop = () => {
  window.scrollTo({top:0} )
}

function Home() {
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=> {
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
      <AnimatePresence>
        <Copy variants={copyAnime} initial="inital" animate="visible" exit="hidden">
            <Title variants={childAnime}>
              <span>88개가 넘는 이모지.</span>
            </Title>
            <Title variants={childAnime}>
              <span>이 모든 것이 모두 무료.</span>
            </Title>
            <SubTitle variants={childAnime}>
              Designed by 윤엑스
            </SubTitle>
            <Link to="about" onClick={scrollToTop}>
              <ToAbout variants={childAnime}>
                과정이 궁금하다면? 👉
              </ToAbout>
            </Link>
        </Copy>
      </AnimatePresence>
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
