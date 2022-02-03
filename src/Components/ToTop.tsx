import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color:rgba(0,0,0,0.8);
    border: 1px solid white;
    border-radius: 8px;

    &:hover {
      opacity: 0.8;
    }
`

const Btn = styled.button`
    width: 40px;
    height: 40px;
    cursor: pointer;
    background: none;
    border: none;
    outline: inherit;
    color: white;
`;

function ToTop() {
  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  return <Container>
      <Btn onClick={scrollToTop}>
        Top
      </Btn>
  </Container>;
}

export default ToTop;
