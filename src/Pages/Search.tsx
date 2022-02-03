import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {emojisData} from "../Data/emojisData";

const Container = styled.div`
  margin-top: 160px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Frame = styled.div`
  max-width: 1256px;
  margin: 0 auto;
  padding: 32px;
  padding-bottom: 240px;
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

const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #161616;
  border-radius: 16px;
  min-height: 150px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    box-shadow: 0 8px 24px 24px rgba(0,0,0,0.2);
  }

  img {
    width: 100%;
    @media only screen and (min-width: 800px){
      width: 240px;
      height: 240px;
    }
    
  }
`;

const Click = styled(motion.span)`
  display: flex;
  opacity: 0;
  padding: 8px;
  border-radius: 8px;
  background-color: rgba(0,0,0,0.2);
  backdrop-filter: blur(24px);
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  @media only screen and (min-width: 800px){
    font-size: 16px;
  }

  position: absolute;
  left: 50%;
  bottom: 24px;
`

const ToolTip = styled(motion.span)`
  position: fixed;
  bottom: 32px;
  left: 50%;
  padding: 16px 24px;
  border-radius: 8px;
  background-color: #ffffff;
  color: #000000;
  font-weight: bold;
  box-shadow: 0 8px 24px 24px rgba(0,0,0,0.2);
  text-align: center;
`


const Tag = styled(motion.div)`
  position: absolute;
  width: 100%;
  left: 50%;
  top: -48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  span {
    margin: 4px;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: #fff;
    color: black;
    font-size: 12px;
  }
`

//애니메이션
const boxAnime = {
  init: {
    scale: 1,
    transition: {
      type: "tween"
    }
  },
  hover: {
    scale: 1.2,
    y: -8,
    transition: {
      delay: 0.1,
      duration: 0.3,
      type: "tween"
    }
  }
}

const clickAnime = {
  init: {
    opacity: 0,
    scale: 0,
    x: "-50%",
    y: 8,
  },
  hover: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.2,
      type: "tween"
    }
  }
}

const tagAnime = {
  init: {
    opacity: 0,
    scale: 0,
    x: "-50%",
    y: 8,
  },
  hover: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.2,
      type: "tween"
    }
  }
}

const toolTipAnime = {
  init: {
    opacity: 0,
    scale: 0,
    x: "-50%",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    transition: {
      delay: 1,
      duration: 0.2,
      type: "tween"
    }
  },
  hidden: {
    opacity: 0,
    scale: 0,
    x: "-50%",
  }
}

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword")
  
  const [isCopy, setIsCopy] = useState(false);
  const checkCopy = () => {
    setIsCopy(true)
    const timeout = setTimeout(()=>setIsCopy(false),3000)
    return () => {
      clearTimeout(timeout)
    }
  }

  return <Container>
    <Frame>
      {emojisData.filter((data)=>data.tag?.includes(keyword+"")).map(emoji =>
              
              <Box
                key={emoji.id}
                variants={boxAnime}
                whileHover="hover"
                initial="init"
                onClick={checkCopy}
              >
                <a href={emoji.download_link} data-scroll={emoji.sub_category.KOR_title}>
                  <Tag variants={tagAnime}>{emoji.tag?.map(data => <span>{data}</span>)}</Tag>
                  <motion.img layout src={emoji.thumnail_img_src} alt="emoji tumnail" />
                  <Click variants={clickAnime}>다운로드</Click>
                </a>
              </Box>)}
    </Frame>
    <AnimatePresence>
      {isCopy ? <ToolTip variants={toolTipAnime} initial="init" animate="visible" exit="hidden">다운 완료</ToolTip> : null }
    </AnimatePresence>
  </Container>;
}

export default Search;
