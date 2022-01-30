import styled from "styled-components";
import {Link} from "react-router-dom"
import { useState } from "react";
import { motion } from "framer-motion";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0,0,0,0.8);
    backdrop-filter: blur(24px);
    border-bottom: 0.2px solid rgba(255,255,255,0.2);

    font-size:12px;
`;


// 네비게이션바
const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 960px;
    height: 56px;

    padding: 0 24px;
`;

const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.svg`
    margin-right: 8px;
    z-index: 10000;
`;

const Title = styled.span`
    font-size: 16px;
`;

const Bold = styled.span`
    font-weight: bold;
`;

const Items = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: none;

    @media only screen and (max-width: 700px){
        flex-direction: column;
        justify-content: start;
        
        position: fixed;
        top: 0;
        right: 0;
        z-index: 10;

        width: 100vw;
        height: 100vh;

        padding: 32px;
        padding-top: 120px;

        background-color: black;
        display: none;
    }
`

const Item = styled.li`
    margin-right: 24px;

    @media only screen and (max-width: 700px){
        font-size: 16px;
        width: 100%;
        margin: 0 16px;
        padding: 16px 0;
        padding-left: 24px;
        border-bottom: 0.2px solid rgba(255,255,255,0.2);
    }
`

const SearchBtn = styled.button`
    background: none;
    border: none;
    outline: inherit;
`;

const MenuBtn = styled.button`
    display: none;
    background: none;
    border: none;
    outline: inherit;

    @media only screen and (max-width: 700px){
        display: block;
    }
`;

// 검색창
const SearchBar = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 960px;
    display: none;

    @media only screen and (max-width: 700px){
        margin-top: 104px;
        z-index: 100;
        padding: 16px;
    }
`;

const SearchInput = styled.input`
    width: 100%;
    max-width: 480px;
    height: 32px;
    background: none;
    outline: none;
    border: none;
    border-bottom: 0.2px solid rgba(255,255,255,0.2);
    padding: 0 48px;

    @media only screen and (max-width: 700px){
        height: 40px;
        border: none;
        padding: 24px;
        padding-left: 40px;
        color: white;
        background-color: rgba(255,255,255,0.2);
        border-radius: 8px;
    }
`;

const SearchIcon = styled.svg`
    position: relative;
    left: 24px;
    opacity: 0.2;
    @media only screen and (max-width: 700px){
        left: 32px;
    }
`;

const CloseIcon = styled.svg`
    display: none;
    position: relative;
    right: 16px;
    @media only screen and (max-width: 700px){
        z-index: 1000;
        right: 0;
    }
`;





function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen((prev)=>!prev)
        console.log(menuOpen)
    }

    const [searchOpen, setSearchOpen] = useState(false);
    const toggleSearch = () => {
        setSearchOpen((prev)=>!prev)
        console.log(searchOpen)
    }
  return <Container>

        <NavBar>
            <Link to="/">
                <Box>
                    <Logo
                        width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.4 6.66667C17.246 6.66667 19.0505 7.21406 20.5854 8.23962C22.1202 9.26518 23.3165 10.7228 24.0229 12.4283C24.7293 14.1337 24.9142 16.0104 24.554 17.8208C24.1939 19.6313 23.305 21.2944 21.9997 22.5997C20.6944 23.905 19.0314 24.7939 17.2209 25.154C15.4104 25.5141 13.5338 25.3293 11.8283 24.6229C10.1229 23.9165 8.66521 22.7202 7.63965 21.1853C6.61409 19.6505 6.0667 17.846 6.0667 16C6.0667 13.5246 7.05003 11.1507 8.80037 9.40034C10.5507 7.65 12.9247 6.66667 15.4 6.66667V6.66667ZM15.4 4C13.0267 4 10.7066 4.70379 8.73319 6.02236C6.7598 7.34094 5.22173 9.21509 4.31348 11.4078C3.40522 13.6005 3.16758 16.0133 3.63061 18.3411C4.09363 20.6689 5.23652 22.8071 6.91475 24.4853C8.59298 26.1635 10.7312 27.3064 13.0589 27.7694C15.3867 28.2324 17.7995 27.9948 19.9922 27.0866C22.1849 26.1783 24.0591 24.6402 25.3777 22.6668C26.6962 20.6935 27.4 18.3734 27.4 16C27.4 12.8174 26.1357 9.76516 23.8853 7.51472C21.6349 5.26428 18.5826 4 15.4 4V4Z" fill="white"/>
                        <path d="M16 13.84C16 10.88 13.24 8.62664 10.4267 8.35998C5.25335 8.17331 3.65335 9.14664 2.81335 11.4266C1.97335 13.7066 4.61335 19.24 9.41335 19.24C15.56 19.24 16 15.5733 16 13.84Z" fill="white"/>
                        <path d="M14.8134 13.84C14.8134 10.88 17.5734 8.62664 20.3867 8.35998C25.5467 8.17331 27.16 9.14664 27.9867 11.4266C28.8134 13.7066 26.1867 19.24 21.4 19.24C15.2534 19.24 14.8134 15.5733 14.8134 13.84Z" fill="white"/>
                        <path d="M11.92 21.1067C11.92 21.1067 12.5067 23.0267 15.4 23.0267C18.2933 23.0267 18.88 21.1067 18.88 21.1067H11.92Z" fill="white"/>
                    </Logo>
                    <Title>
                        <Bold>Jack</Bold>face
                    </Title>
                </Box>
            </Link>
            <Box>
                <Items>
                    <Item><Link to="about">소개</Link></Item>
                    <Item><Link to="share">공유</Link></Item>
                    <Item><a href="https://drive.google.com/drive/folders/1RMM5xaH7VIMiYo5DpWGPC3bjSfpQ61Dw?usp=sharing" target="_blank" rel="noreferrer">다운로드</a></Item>
                    <Item>
                        <SearchBtn
                            onClick={toggleSearch}
                        >
                            <motion.svg
                                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.3187 20.0273L15.232 13.9406C16.1766 12.7195 16.6875 11.2266 16.6875 9.65625C16.6875 7.77656 15.9539 6.01406 14.6273 4.68516C13.3008 3.35625 11.5336 2.625 9.65625 2.625C7.77891 2.625 6.01172 3.35859 4.68516 4.68516C3.35625 6.01172 2.625 7.77656 2.625 9.65625C2.625 11.5336 3.35859 13.3008 4.68516 14.6273C6.01172 15.9562 7.77656 16.6875 9.65625 16.6875C11.2266 16.6875 12.7172 16.1766 13.9383 15.2344L20.025 21.3187C20.0428 21.3366 20.064 21.3508 20.0874 21.3604C20.1107 21.3701 20.1357 21.3751 20.1609 21.3751C20.1862 21.3751 20.2112 21.3701 20.2345 21.3604C20.2578 21.3508 20.279 21.3366 20.2969 21.3187L21.3187 20.2992C21.3366 20.2814 21.3508 20.2602 21.3604 20.2369C21.3701 20.2135 21.3751 20.1885 21.3751 20.1633C21.3751 20.138 21.3701 20.113 21.3604 20.0897C21.3508 20.0664 21.3366 20.0452 21.3187 20.0273V20.0273ZM13.3688 13.3688C12.375 14.3602 11.0578 14.9062 9.65625 14.9062C8.25469 14.9062 6.9375 14.3602 5.94375 13.3688C4.95234 12.375 4.40625 11.0578 4.40625 9.65625C4.40625 8.25469 4.95234 6.93516 5.94375 5.94375C6.9375 4.95234 8.25469 4.40625 9.65625 4.40625C11.0578 4.40625 12.3773 4.95 13.3688 5.94375C14.3602 6.9375 14.9062 8.25469 14.9062 9.65625C14.9062 11.0578 14.3602 12.3773 13.3688 13.3688Z" fill="white"/>
                            </motion.svg>
                        </SearchBtn>
                    </Item>
                </Items>
            </Box>
            <MenuBtn
                onClick={toggleMenu}    
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20V8H4V6ZM8 11H20V13H8V11ZM13 16H20V18H13V16Z" fill="white"/>
                </svg>
            </MenuBtn>

        </NavBar>

        <SearchBar>
            <SearchIcon
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3187 20.0273L15.232 13.9406C16.1766 12.7195 16.6875 11.2266 16.6875 9.65625C16.6875 7.77656 15.9539 6.01406 14.6273 4.68516C13.3008 3.35625 11.5336 2.625 9.65625 2.625C7.77891 2.625 6.01172 3.35859 4.68516 4.68516C3.35625 6.01172 2.625 7.77656 2.625 9.65625C2.625 11.5336 3.35859 13.3008 4.68516 14.6273C6.01172 15.9562 7.77656 16.6875 9.65625 16.6875C11.2266 16.6875 12.7172 16.1766 13.9383 15.2344L20.025 21.3187C20.0428 21.3366 20.064 21.3508 20.0874 21.3604C20.1107 21.3701 20.1357 21.3751 20.1609 21.3751C20.1862 21.3751 20.2112 21.3701 20.2345 21.3604C20.2578 21.3508 20.279 21.3366 20.2969 21.3187L21.3187 20.2992C21.3366 20.2814 21.3508 20.2602 21.3604 20.2369C21.3701 20.2135 21.3751 20.1885 21.3751 20.1633C21.3751 20.138 21.3701 20.113 21.3604 20.0897C21.3508 20.0664 21.3366 20.0452 21.3187 20.0273V20.0273ZM13.3688 13.3688C12.375 14.3602 11.0578 14.9062 9.65625 14.9062C8.25469 14.9062 6.9375 14.3602 5.94375 13.3688C4.95234 12.375 4.40625 11.0578 4.40625 9.65625C4.40625 8.25469 4.95234 6.93516 5.94375 5.94375C6.9375 4.95234 8.25469 4.40625 9.65625 4.40625C11.0578 4.40625 12.3773 4.95 13.3688 5.94375C14.3602 6.9375 14.9062 8.25469 14.9062 9.65625C14.9062 11.0578 14.3602 12.3773 13.3688 13.3688Z" fill="white"/>
            </SearchIcon>
            <SearchInput
                placeholder="검색해서 원하는 이모지를 찾아보세요."
            />
        </SearchBar>

        <CloseIcon
                onClick={toggleSearch}
                width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41L12.59 0Z" fill="white"/>
        </CloseIcon>
    </Container>;
}

export default Header;
