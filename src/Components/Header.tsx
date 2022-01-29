import styled from "styled-components";
import {Link} from "react-router-dom"

const Gnb = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 56px;
    background-color: rgba(0,0,0,0.8);
    backdrop-filter: blur(24px);
    color: white;
    border-bottom: 1px solid rgba(255,255,255,0.25);

    font-family: SF Pro;
    font-size: 12px;
    line-height: 12px;
`;

const Frame = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 24px;
    width: 100%;
    max-width: 980px;
    height: 48px;
`;

const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.svg`
    background-color: white;
    height: 24px;
    width: 24px;
    border-radius: 40px;

    margin-right: 4px;
`;

const Title = styled.div`
    font-size:16px;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const Items = styled.ul`
    display: flex;
    align-items: center;
`;

const Item = styled.li`
    margin-left: 32px;
    text-align: center;

    font-weight: bold;
`;

function Header() {
  return <Gnb>
            <Frame>
                <Box>
                    <Logo/>
                    <Title>
                        <Bold>jack</Bold>face
                    </Title>
                </Box>
                <Box>
                    <Items>
                        <button>search</button>
                        <Item><Link to="about">제작자 소개</Link></Item>
                        <Item><Link to="search">자주 묻는 질문</Link></Item>
                    </Items>
                </Box>
            </Frame>
        </Gnb>;
}

export default Header;
