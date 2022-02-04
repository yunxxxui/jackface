import styled, { keyframes } from "styled-components";

const blink = keyframes`
    0% {
        opacity: 0.8;
    }
    40% {
        opacity: 1;
    }
    100% {
        opacity: 0.8;
    }
`

const Box = styled.div`
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
  animation-name: ${blink};
  animation-duration: 2s;
  animation-iteration-count: infinite;

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

function Loader() {
  return <>
    <Box style={{animationDelay: "0.1s"}}/>
    <Box style={{animationDelay: "0.2s"}}/>
    <Box style={{animationDelay: "0.3s"}}/>
    <Box style={{animationDelay: "0.4s"}}/>
    <Box style={{animationDelay: "0.5s"}}/>
    <Box style={{animationDelay: "0.6s"}}/>
    <Box style={{animationDelay: "0.7s"}}/>
    <Box style={{animationDelay: "0.8s"}}/>
    <Box style={{animationDelay: "0.9s"}}/>
    <Box style={{animationDelay: "1s"}}/>
    <Box style={{animationDelay: "0.1s"}}/>
    <Box style={{animationDelay: "0.2s"}}/>
  </>;
}

export default Loader;
