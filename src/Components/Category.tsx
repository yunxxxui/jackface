import styled from "styled-components";

const Container = styled.div`

    position: sticky;
    z-index: 1;

    top: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 96px;
    background-color: rgba(0,0,0,0.8);
    backdrop-filter: blur(24px);
    border-bottom: 0.2px solid rgba(255,255,255,0.2);

    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }

    font-size: 12px;

    @media only screen and (max-width: 400px){
        align-items: flex-start;
    }
`;

const Frame = styled.div`
    min-width: 300px;
    display: flex;
    flex-direction: center;
    align-items: center;
    height: 100%;
    padding: 24px;
`;

const Item = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.5;
    //margin-right: 24px;
    /* &:last-child {
        margin-right: 0;
    } */
`;

const Name = styled.span`
    min-width:65px;
    display: block;
`;


function Category() {
  return <>
    <Container>
        <Frame>
            <Item>
                <Name>미소</Name>
            </Item>
            <Item>
                <Name>애정</Name>
            </Item>    
            <Item>
                <Name>혀</Name>
            </Item>    
            <Item>
                <Name>중립</Name>
            </Item> 
            <Item>
                <Name>졸린</Name>
            </Item>
            <Item>
                <Name>나쁜</Name>
            </Item>
            <Item>
                <Name>모자</Name>
            </Item>
            <Item>
                <Name>안경</Name>
            </Item>
            <Item>
                <Name>걱정</Name>
            </Item>
            <Item>
                <Name>부정</Name>
            </Item>
            <Item>
                <Name>커스텀</Name>
            </Item>
            <Item>
                <Name>감정</Name>
            </Item>         
        </Frame>  
    </Container>
    </>
}

export default Category;
