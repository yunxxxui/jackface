import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

//컴포넌트
import BoxEmoji from "Components/BoxEmoji";
import BoxGrid from "Components/BoxGrid";
import ToolTip from "Components/ToolTip";

//데이터
import {emojisData} from "Data/emojisData";

const Container = styled.div`
  margin-top: 160px;
`;

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
    <BoxGrid>
      <>
      {emojisData.filter((data)=>data.tag?.includes(keyword+"")).map(emoji =>
              
              <div onClick={checkCopy} key={emoji.id}>
                <BoxEmoji 
                id={emoji.id}
                main_category={emoji.main_category}
                sub_category={emoji.sub_category}
                KOR_title={emoji.KOR_title}
                ENG_title={emoji.ENG_title}
                thumnail_img_src={emoji.thumnail_img_src}
                orginal_img_Src={emoji.orginal_img_Src}
                download_link={emoji.download_link}
                tag={emoji.tag}
                />
              </div>
            )}
      </>
    </BoxGrid>
    <ToolTip isCopy={isCopy} />
  </Container>;
}

export default Search;
