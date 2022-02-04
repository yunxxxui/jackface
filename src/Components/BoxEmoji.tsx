import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #161616;
  border-radius: 16px;
  cursor: pointer;
  font-weight: bold;
  min-height: 120px;
  min-width: 120px;

  @media only screen and (min-width: 350px){
    width: 150px;
    height: 150px;
  }

  @media only screen and (min-width: 800px){
    width: 240px;
    height: 240px;
  }

  &:hover {
    box-shadow: 0 8px 24px 24px rgba(0,0,0,0.2);
  }

  img {
    width: 100%;
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

//인터페이스
interface IEmojisBox {
    id: number,
    main_category: {
        id: number,
        ENG_title: string,
        KOR_title: string,
    },
    sub_category: {
        id: number,
        ENG_title: string,
        KOR_title: string,
    },
    KOR_title: string,
    ENG_title: string,
    thumnail_img_src: string,
    orginal_img_Src: string,
    download_link: string,
    tag?: string[],
}

function BoxEmoji({
    id,
    main_category,
    sub_category,
    KOR_title,
    ENG_title,
    thumnail_img_src,
    orginal_img_Src,
    download_link,
    tag
    }:IEmojisBox)
{
  return <>
    <Container
        key={id}
        variants={boxAnime}
        whileHover="hover"
        initial="init"
        //onClick={checkCopy}
    >
        <a href={download_link} data-scroll={sub_category.KOR_title}>
        <Tag variants={tagAnime}>{tag?.map(data => <span>{data}</span>)}</Tag>
        <motion.img src={thumnail_img_src} width="240px" height="240px" alt={ENG_title} loading="lazy"/>
        <Click variants={clickAnime}>다운로드</Click>
        </a>              
    </Container>
  </>;
}

export default BoxEmoji;
