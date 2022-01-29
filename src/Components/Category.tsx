import styled from "styled-components";

const Container = styled.div`
    position: sticky;
    position: -webkit-sticky;

    top:0px;
    z-index: 1;;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 96px;
    background-color: rgba(0,0,0,0.8);
    backdrop-filter: blur(24px);
    border-bottom: 0.2px solid rgba(255,255,255,0.2);
    border-bottom: 0.2px solid rgba(255,255,255,0.2);
`;

const Frame = styled.div`
    display: flex;
    flex-direction: center;
    align-items: center;
    height: 100%;
`;

const Item = styled.span`
    margin-right: 24px;
`;


function Category() {
  return <Container>
        <Frame>
            <Item>표정 및 사람</Item>
            <Item>동물 및 자연</Item>    
            <Item>음식 및 음료</Item>    
            <Item>활동 및 취미</Item>    
            <Item>여행 및 장소</Item> 
            <Item>사물 및 기호</Item>         
        </Frame>  
    </Container>;
}

export default Category;
