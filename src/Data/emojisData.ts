import { mainCateory } from "./categoryData"
import { main01_subCategory } from "./categoryData"

const viewImgSrc = "https://docs.google.com/uc?export=view&id="
const downloadImgSrc = "https://docs.google.com/uc?export=download&id="

// https://drive.google.com/file/d/16WzNbzTkdHYZ97pKq54mSjR-Lp2avC5X/view?usp=sharing
// https://drive.google.com/file/d/1MA_921lb7EEjyoNQP58sqDAvko6R4acE/view?usp=sharing
// 

//데이터 선언
interface IEmojisData {
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

export const emojisData:IEmojisData[]= [
    {
      id: 1,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[0],
      KOR_title: "삐에로",
      ENG_title: "BBiero",
      thumnail_img_src: `${viewImgSrc}16WzNbzTkdHYZ97pKq54mSjR-Lp2avC5X`,
      orginal_img_Src: `${viewImgSrc}1MA_921lb7EEjyoNQP58sqDAvko6R4acE`,
      download_link: `${downloadImgSrc}1MA_921lb7EEjyoNQP58sqDAvko6R4acE`,
      tag: ["smile","퍼킹","헤헤"]
    },
  ]