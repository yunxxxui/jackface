import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";


const Container = styled(motion.span)`
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

interface IToolTip {
    isCopy: boolean
}

function ToolTip({isCopy}:IToolTip) {
  return <>
    <AnimatePresence>
      {isCopy ?
        <Container
            variants={toolTipAnime}
            initial="init"
            animate="visible"
            exit="hidden">
            다운 완료
        </Container>
        : null }
    </AnimatePresence>
  </>;
}

export default ToolTip;
