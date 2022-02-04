import styled from "styled-components";

//스타일드 컴포넌트
const MainSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const Frame = styled.div`
    max-width: 1256px;
    margin: 0 auto;
    padding: 32px;
    padding-bottom: 240px;
    
    display: grid;
    grid-gap: 8px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(min-content, max-content);
    position: absolute;


    @media only screen and (min-width: 540px){
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    }
    @media only screen and (min-width: 1050px){
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
    }
`;


//인터페이스
interface IBoxGrid {
    children: JSX.Element
}

function BoxGrid({children}:IBoxGrid) {
  return <>
        <MainSection>
            <Frame>
                {children}
            </Frame>
        </MainSection>
    </>;
}

export default BoxGrid;
