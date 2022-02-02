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
    //01_표정과사람/01_얼굴-미소
    {
      id: 1,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[0],
      KOR_title: "활짝 웃는 얼굴",
      ENG_title: "Grinning Face",
      thumnail_img_src: `${viewImgSrc}16WzNbzTkdHYZ97pKq54mSjR-Lp2avC5X`,
      orginal_img_Src: `${viewImgSrc}1MA_921lb7EEjyoNQP58sqDAvko6R4acE`,
      download_link: `${downloadImgSrc}1MA_921lb7EEjyoNQP58sqDAvko6R4acE`,
      tag: ["미소","스마일","얼굴","웃음","활짝 웃는 얼굴","face","grin","grinning face"]
    },
    {
      id: 2,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[0],
      KOR_title: "미소 짓는 눈으로 활짝 웃는 얼굴",
      ENG_title: "Grinning Face With Squinting Eyes",
      thumnail_img_src: `${viewImgSrc}1S66OR3wdsBGETiyKYVM0Rn7t9fDqSelf`,
      orginal_img_Src: `${viewImgSrc}1MxWhmA815V90LbYYtPibw_GM899bd2mB`,
      download_link: `${downloadImgSrc}1MxWhmA815V90LbYYtPibw_GM899bd2mB`,
      tag: ["미소","미소 짓는 눈으로 활짝 웃는 얼굴","스마일","얼굴","입 벌리고 웃는 눈웃음 얼굴","eye","face","grinning face with smiling eyes","mouth","open","smile"]
    },
    {
      id: 3,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[0],
      KOR_title: "미소 짓는 눈으로 웃는 얼굴",
      ENG_title: "Grinning Face With Smiling Eyes",
      thumnail_img_src: `${viewImgSrc}1GqaMVItBzCZWXaCJ6I5Q9CKdbhy7B6AK`,
      orginal_img_Src: `${viewImgSrc}1NjNC8AV8OMSP2HCrNJAJ9fBh_KE2Yucr`,
      download_link: `${downloadImgSrc}1NjNC8AV8OMSP2HCrNJAJ9fBh_KE2Yucr`,
      tag: ["미소","smile"]
    },
    {
      id: 4,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[0],
      KOR_title: "눈웃음 짓는 얼굴",
      ENG_title: "Grinning Face With Tightly Closed Eyes",
      thumnail_img_src: `${viewImgSrc}1nUupIXt4ayu5HhCQsWmIfnQY6hajKwdr`,
      orginal_img_Src: `${viewImgSrc}1qJDKf3DWKHppG1jj6ILdHDY5QSGzvbpx`,
      download_link: `${downloadImgSrc}1qJDKf3DWKHppG1jj6ILdHDY5QSGzvbpx`,
      tag: ["미소","smile"]
    },
    {
      id: 5,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[0],
      KOR_title: "땀 흘리며 웃는 얼굴",
      ENG_title: "Grinning Face With Squinting Eyes and Sweat Drop",
      thumnail_img_src: `${viewImgSrc}1wGoLIhCHvCKlMzqbtTE4HAmD9H41Q2GE`,
      orginal_img_Src: `${viewImgSrc}1Y0kzK9XTeulBMitLcCBzul6DmQGSQbwn`,
      download_link: `${downloadImgSrc}1Y0kzK9XTeulBMitLcCBzul6DmQGSQbwn`,
      tag: ["미소","smile"]
    },
    {
      id: 6,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[0],
      KOR_title: "바닥을 구르며 웃는 얼굴",
      ENG_title: "Rolling on the Floor Laughing Face",
      thumnail_img_src: `${viewImgSrc}1yyGKoTt0n9PCSywe5brDq7DD_dsG5-sV`,
      orginal_img_Src: `${viewImgSrc}1AAg8tePUzc02qXTWuV3bvQ725KiQVAAS`,
      download_link: `${downloadImgSrc}1AAg8tePUzc02qXTWuV3bvQ725KiQVAAS`,
      tag: ["미소","smile"]
    },
    {
      id: 7,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[0],
      KOR_title: "기쁨의 눈물을 흘리는 얼굴",
      ENG_title: "Face With Tears of Joy",
      thumnail_img_src: `${viewImgSrc}1kWRFNz5aIxznlM8bO913vDr_1sQ6yLgL`,
      orginal_img_Src: `${viewImgSrc}10QteZWBJIY0KzBwSPhZve4Awg-7sXb47`,
      download_link: `${downloadImgSrc}10QteZWBJIY0KzBwSPhZve4Awg-7sXb47`,
      tag: ["미소","smile"]
    },
    {
      id: 8,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[0],
      KOR_title: "살짝 미소 짓는 얼굴",
      ENG_title: "Slightly Smiling Face",
      thumnail_img_src: `${viewImgSrc}1P7RsfQDl7RncSMxlLBW0fr5iQgltpTHh`,
      orginal_img_Src: `${viewImgSrc}1aLhj0zA-F1v1jV0z7wFOdVNDC8YGCKUT`,
      download_link: `${downloadImgSrc}1aLhj0zA-F1v1jV0z7wFOdVNDC8YGCKUT`,
      tag: ["미소","smile"]
    },
    {
      id: 9,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[0],
      KOR_title: "윙크하는 얼굴",
      ENG_title: "Winking Face",
      thumnail_img_src: `${viewImgSrc}14xkX5uPgesa_BJyi0RtJZ8MuW0b_VQA7`,
      orginal_img_Src: `${viewImgSrc}1mCSEwb1niKFjevrm9Y18CygzgoKOpx2_`,
      download_link: `${downloadImgSrc}1mCSEwb1niKFjevrm9Y18CygzgoKOpx2_`,
      tag: ["미소","smile"]
    },
    {
      id: 10,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[0],
      KOR_title: "미소 짓는 눈으로 살짝 웃는 얼굴",
      ENG_title: "Smiling Face With Squinting Eyes",
      thumnail_img_src: `${viewImgSrc}1p33STy3k824ABEJ4zYGXtBm7iXHS9hUb`,
      orginal_img_Src: `${viewImgSrc}1pjKr9pG6TFjVTW_p2BqPxGGa-rB1-wKU`,
      download_link: `${downloadImgSrc}1pjKr9pG6TFjVTW_p2BqPxGGa-rB1-wKU`,
      tag: ["미소","smile"]
    },

    //01_표정과사람/02_얼굴-애정
    {
      id: 11,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[1],
      KOR_title: "하트와 함께 웃는 얼굴",
      ENG_title: "Smiling Face With Hearts",
      thumnail_img_src: `${viewImgSrc}1U6T91Hqf3Koq1Aj7BbL96VD2GAb7cFua`,
      orginal_img_Src: `${viewImgSrc}1i7XovsUZAcbZBHP7WesH88ZG5Zk99hID`,
      download_link: `${downloadImgSrc}1i7XovsUZAcbZBHP7WesH88ZG5Zk99hID`,
      tag: ["사랑","hearts"]
    },
    {
      id: 12,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[1],
      KOR_title: "하트 눈 얼굴",
      ENG_title: "Smiling Face With Heart-Shaped Eyes",
      thumnail_img_src: `${viewImgSrc}1nep-kPMgAP9C2PTGlNmCB1MWy2CQ4fuY`,
      orginal_img_Src: `${viewImgSrc}1sf2GeromREkYQyzIV0OLyGHi6nQ-22ow`,
      download_link: `${downloadImgSrc}1sf2GeromREkYQyzIV0OLyGHi6nQ-22ow`,
      tag: ["사랑","hearts"]
    },
    {
      id: 13,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[1],
      KOR_title: "키스를 보내는 얼굴",
      ENG_title: "Face blowing a kiss",
      thumnail_img_src: `${viewImgSrc}1glz70tb-pNuioepbzOps0AhPioyfZ6ip`,
      orginal_img_Src: `${viewImgSrc}10kKcQMm3tfNK50muPvZiUrrWgXHSqHnY`,
      download_link: `${downloadImgSrc}10kKcQMm3tfNK50muPvZiUrrWgXHSqHnY`,
      tag: ["사랑","hearts"]
    },
    {
      id: 14,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[1],
      KOR_title: "키스 하는 얼굴",
      ENG_title: "	Kissing Face",
      thumnail_img_src: `${viewImgSrc}1FITBIwjAB8NE6sQWUgEzQsrqobUztqqj`,
      orginal_img_Src: `${viewImgSrc}1p3JKfOG6unJOUoq6b4DR1lTJOgDbissR`,
      download_link: `${downloadImgSrc}1p3JKfOG6unJOUoq6b4DR1lTJOgDbissR`,
      tag: ["사랑","hearts"]
    },
    {
      id: 15,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[1],
      KOR_title: "눈을 감은 채로 키스하는 얼굴",
      ENG_title: "Kissing Face With Closed Eyes",
      thumnail_img_src: `${viewImgSrc}1kfLyoUvI4Xlj_QM7tnTNePz4ZoYYORCW`,
      orginal_img_Src: `${viewImgSrc}1_0SLoQWkLN9PBLC2Vl3GSbVLPvSoTaXC`,
      download_link: `${downloadImgSrc}1_0SLoQWkLN9PBLC2Vl3GSbVLPvSoTaXC`,
      tag: ["사랑","hearts"]
    },
    {
      id: 16,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[1],
      KOR_title: "미소 짓는 눈으로 키스하는 얼굴",
      ENG_title: "Kissing Face With Squinting Eyes",
      thumnail_img_src: `${viewImgSrc}1WJag6JFFLk9cztubIHwRPLE3x9KA01C6`,
      orginal_img_Src: `${viewImgSrc}1Rb4XerZI7lVk8qXPddsff07iDPuCWQcn`,
      download_link: `${downloadImgSrc}1Rb4XerZI7lVk8qXPddsff07iDPuCWQcn`,
      tag: ["사랑","hearts"]
    },
    //01_표정과사람/03_얼굴-혀
    {
      id: 17,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[2],
      KOR_title: "맛있는 음식을 음미하는 얼굴",
      ENG_title: "Smiling Face Licking Lips",
      thumnail_img_src: `${viewImgSrc}1-_PxT5RFTU-N6W1RGKbzWzHGF3SbBtue`,
      orginal_img_Src: `${viewImgSrc}1qR9Bts_qWqYqva4WbHgsGU2e2aHvXs6F`,
      download_link: `${downloadImgSrc}1qR9Bts_qWqYqva4WbHgsGU2e2aHvXs6F`,
      tag: ["혀","tongue"]
    },
    {
      id: 18,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[2],
      KOR_title: "혀를 내민 얼굴",
      ENG_title: "Face With Stuck-Out Tongue",
      thumnail_img_src: `${viewImgSrc}1oKNaBcGRUR3pMa3gk943JPA5W-47feOX`,
      orginal_img_Src: `${viewImgSrc}1qllwpkxvPsHPO-ZiEOoTMhDC2XFjVG-Y`,
      download_link: `${downloadImgSrc}1qllwpkxvPsHPO-ZiEOoTMhDC2XFjVG-Y`,
      tag: ["혀","tongue"]
    },
    {
      id: 19,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[2],
      KOR_title: "윙크하면서 혀를 내민 얼굴",
      ENG_title: "Winking Face With Stuck-Out Tongue",
      thumnail_img_src: `${viewImgSrc}1IOqf8D8O82eP_LTBgtHuqHv0dxyz0I3i`,
      orginal_img_Src: `${viewImgSrc}1zw7nDtbHdd09rVHwrwoDAUw6CpZHJ177`,
      download_link: `${downloadImgSrc}1zw7nDtbHdd09rVHwrwoDAUw6CpZHJ177`,
      tag: ["혀","tongue"]
    },
    {
      id: 20,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[2],
      KOR_title: "눈썹 올리고 윙크하며 혀를 내민 얼굴",
      ENG_title: "Winking Face With Raised Eyebrow and Stuck-Out Tongue",
      thumnail_img_src: `${viewImgSrc}1DrsLx3XwIHV9J8bt4quAMu-o1TGOx2Le`,
      orginal_img_Src: `${viewImgSrc}12M8Cu38Rel-w9WHiwtyWEvUBKrEFGGor`,
      download_link: `${downloadImgSrc}12M8Cu38Rel-w9WHiwtyWEvUBKrEFGGor`,
      tag: ["혀","tongue"]
    },
    {
      id: 21,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[2],
      KOR_title: "괴짜 얼굴",
      ENG_title: "Goofy Face",
      thumnail_img_src: `${viewImgSrc}1PtuH76XMWGK3BZzsEBZVvQTogUMj0BBa`,
      orginal_img_Src: `${viewImgSrc}1BNpZNGWWhUHJxALWBC3mnhxq165W9spP`,
      download_link: `${downloadImgSrc}1BNpZNGWWhUHJxALWBC3mnhxq165W9spP`,
      tag: ["혀","tongue"]
    },
    {
      id: 22,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[2],
      KOR_title: "눈을 감고 메롱하는 얼굴",
      ENG_title: "Face With Stuck Out Tongue and Tightly-Closed Eyes",
      thumnail_img_src: `${viewImgSrc}1_LUhRVj2SOm09Ix1eJecvYvC340_Gib-`,
      orginal_img_Src: `${viewImgSrc}1JxB_tN4I3ffsNK-4n9VK_rqxZ1b4C3Dq`,
      download_link: `${downloadImgSrc}1JxB_tN4I3ffsNK-4n9VK_rqxZ1b4C3Dq`,
      tag: ["혀","tongue"]
    },
    {
      id: 23,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[2],
      KOR_title: "돈 모양의 입이 있는 얼굴",
      ENG_title: "Money-Mouth Face",
      thumnail_img_src: `${viewImgSrc}1aBma7lWwBAqfzKune3DwgYX2UX3yMMrh`,
      orginal_img_Src: `${viewImgSrc}1a9E5jlyeIcmlS-2R4Ny68FKW6U6p0uWw`,
      download_link: `${downloadImgSrc}1a9E5jlyeIcmlS-2R4Ny68FKW6U6p0uWw`,
      tag: ["혀","tongue"]
    },
    //01_표정과사람/04_얼굴-손
    //null

    //01_표정과사람/05_얼굴-중립
    {
      id: 24,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[4],
      KOR_title: "지퍼로 입을 잠근 얼굴",
      ENG_title: "Face With a Zipper Mouth",
      thumnail_img_src: `${viewImgSrc}1yIGPDV9o7DIsi0uEW05P0lmmAmz987XL`,
      orginal_img_Src: `${viewImgSrc}1SmppHWr8ugdtkTWQ0ltuRsXDWjolzXbn`,
      download_link: `${downloadImgSrc}1SmppHWr8ugdtkTWQ0ltuRsXDWjolzXbn`,
      tag: ["중립","무표정","netural"]
    },
    {
      id: 25,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[4],
      KOR_title: "눈썹을 치켜 올린 얼굴",
      ENG_title: "Face With Raised Eyebrow",
      thumnail_img_src: `${viewImgSrc}1HiIYhFSNDsEeTl7fYjESdNhZIEKvmpdG`,
      orginal_img_Src: `${viewImgSrc}y3Z3x0hjKUpLr7HAnGB6GU73Xod9PSxR`,
      download_link: `${downloadImgSrc}y3Z3x0hjKUpLr7HAnGB6GU73Xod9PSxR`,
      tag: ["중립","무표정","netural"]
    },
    {
      id: 26,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[4],
      KOR_title: "덤덤한 얼굴",
      ENG_title: "Neutral Face",
      thumnail_img_src: `${viewImgSrc}17z_QnjyJ_hiv-G0mSgXT-hMSRbaEAk_8`,
      orginal_img_Src: `${viewImgSrc}1fczZHwaPZDQ3LGSY8Fd6YHSfl3DTJIH5`,
      download_link: `${downloadImgSrc}1fczZHwaPZDQ3LGSY8Fd6YHSfl3DTJIH5`,
      tag: ["중립","무표정","netural"]
    },
    {
      id: 27,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[4],
      KOR_title: "무표정한 얼굴",
      ENG_title: "Expressionless Face",
      thumnail_img_src: `${viewImgSrc}1IogGCOSfjAXdnkcKQwz3mrVtP1pzlSvs`,
      orginal_img_Src: `${viewImgSrc}19_zEJbnum8YtzDE70wyxNKDDEcXP6u9n`,
      download_link: `${downloadImgSrc}19_zEJbnum8YtzDE70wyxNKDDEcXP6u9n`,
      tag: ["중립","무표정","netural"]
    },
    {
      id: 28,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[4],
      KOR_title: "히죽 거리고 있는 얼굴",
      ENG_title: "Smirking Face",
      thumnail_img_src: `${viewImgSrc}1bvEC5jkJm6a8_DlmkFzeg7c4hoQOudIy`,
      orginal_img_Src: `${viewImgSrc}1BsRoeJ95CkxRQIFPYu0dAf6ZgzBj-18k`,
      download_link: `${downloadImgSrc}1BsRoeJ95CkxRQIFPYu0dAf6ZgzBj-18k`,
      tag: ["중립","무표정","netural"]
    },
    {
      id: 29,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[4],
      KOR_title: "지루해 하는 얼굴",
      ENG_title: "Unamused Face",
      thumnail_img_src: `${viewImgSrc}1ISrqMrpA7AGgURn4Y5gNPOnNaRbzNG0s`,
      orginal_img_Src: `${viewImgSrc}18QppoYTIKA1fIXXXtIt1a67y2uYQy2a-`,
      download_link: `${downloadImgSrc}18QppoYTIKA1fIXXXtIt1a67y2uYQy2a-`,
      tag: ["중립","무표정","netural"]
    },
    {
      id: 30,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[4],
      KOR_title: "눈을 굴리고 있는 표정",
      ENG_title: "Face With Rolling Eyes",
      thumnail_img_src: `${viewImgSrc}1sgM8M8A5FNoHrTY9EYugmIMswZP6ADTI`,
      orginal_img_Src: `${viewImgSrc}1mpuCmpbD6071BFPaGxYn04oM3RJjV6C`,
      download_link: `${downloadImgSrc}1mpuCmpbD6071BFPaGxYn04oM3RJjV6C`,
      tag: ["중립","무표정","netural"]
    },
    {
      id: 31,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[4],
      KOR_title: "찌푸린 얼굴",
      ENG_title: "Grimacing Face",
      thumnail_img_src: `${viewImgSrc}1rrYTyZEsNz7Lh2Sijvk3FDlAKAkNdEjG`,
      orginal_img_Src: `${viewImgSrc}1uuwmFojFKIj6-A2n5VCXKbHHpzISJs9S`,
      download_link: `${downloadImgSrc}1uuwmFojFKIj6-A2n5VCXKbHHpzISJs9S`,
      tag: ["중립","무표정","netural"]
    },
    {
      id: 32,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[4],
      KOR_title: "날숨 쉬는 얼굴",
      ENG_title: "Face exhaling",
      thumnail_img_src: `${viewImgSrc}13sX8mM-u6i6vMCaa7XMugget5mViz-dE`,
      orginal_img_Src: `${viewImgSrc}1yS_6rgzWfI96bILj_oH213o3r5Janjg7`,
      download_link: `${downloadImgSrc}1yS_6rgzWfI96bILj_oH213o3r5Janjg7`,
      tag: ["중립","무표정","netural"]
    },
    {
      id: 33,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[4],
      KOR_title: "거짓말 하는 얼굴",
      ENG_title: "Lying Face",
      thumnail_img_src: `${viewImgSrc}1OTAfIweWrFOGURpyGo2LugWYAE3AEZtL`,
      orginal_img_Src: `${viewImgSrc}1JGbguR3Y5UPnCvxBFJ_rJMjzYcTSStM1`,
      download_link: `${downloadImgSrc}1JGbguR3Y5UPnCvxBFJ_rJMjzYcTSStM1`,
      tag: ["중립","무표정","netural"]
    },
    //01_표정과사람/06_얼굴-졸린
    {
      id: 34,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[5],
      KOR_title: "안심한 얼굴",
      ENG_title: "Relieved Face",
      thumnail_img_src: `${viewImgSrc}1ychcf9awtdihi_fqRUSCeN1r_eEKmjRZ`,
      orginal_img_Src: `${viewImgSrc}1nxBHTVKK18AAPBGiCHC3pDOnXMGEs9v9`,
      download_link: `${downloadImgSrc}1nxBHTVKK18AAPBGiCHC3pDOnXMGEs9v9`,
      tag: ["졸린","sleepy"]
    },
    {
      id: 35,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[5],
      KOR_title: "수심 어린 얼굴",
      ENG_title: "Sad Pensive Face",
      thumnail_img_src: `${viewImgSrc}1yQRvz3Z-EApWfvaNu6uETyCQmi7_moFX`,
      orginal_img_Src: `${viewImgSrc}1gZ15LF4CUGfb71TnHx0MyMPS3qPknFHR`,
      download_link: `${downloadImgSrc}1gZ15LF4CUGfb71TnHx0MyMPS3qPknFHR`,
      tag: ["졸린","sleepy"]
    },
    {
      id: 36,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[5],
      KOR_title: "졸린 얼굴",
      ENG_title: "Sleepy Face",
      thumnail_img_src: `${viewImgSrc}1Sbcj7V0VcJeuKaH4-eucbueMqoLOLbfw`,
      orginal_img_Src: `${viewImgSrc}1FkKwUIwgDxaIcHZiX4_P9XEPYmKodH64`,
      download_link: `${downloadImgSrc}1FkKwUIwgDxaIcHZiX4_P9XEPYmKodH64`,
      tag: ["졸린","sleepy"]
    },
    {
      id: 37,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[5],
      KOR_title: "침 흘리는 얼굴",
      ENG_title: "Drooling Face",
      thumnail_img_src: `${viewImgSrc}1xBitJGgY4Y_Ui_CJoihvjUjpXqp3zugC`,
      orginal_img_Src: `${viewImgSrc}10MNWcAHaRSlYld2TwzWqT32Ge8VnaI6z`,
      download_link: `${downloadImgSrc}10MNWcAHaRSlYld2TwzWqT32Ge8VnaI6z`,
      tag: ["졸린","sleepy"]
    },
    {
      id: 38,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[5],
      KOR_title: "졸고 있는 얼굴",
      ENG_title: "Sleeping Face",
      thumnail_img_src: `${viewImgSrc}1To9mPJkTph3YQ3nkSPhdpT3pJjXrphEg`,
      orginal_img_Src: `${viewImgSrc}1hA1_CmqfzHMR_3_Tgt_iy9n1XYsqkbz-`,
      download_link: `${downloadImgSrc}1hA1_CmqfzHMR_3_Tgt_iy9n1XYsqkbz-`,
      tag: ["졸린","sleepy"]
    },
    //01_표정과사람/07_얼굴-나쁜
    {
      id: 39,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[6],
      KOR_title: "마스크 낀 얼굴",
      ENG_title: "Face With Medical Mask",
      thumnail_img_src: `${viewImgSrc}1VCGWmPkQhjhwVb9fQofb2m732v2WdDfl`,
      orginal_img_Src: `${viewImgSrc}1Cexlw1gvYfFAAc4Jfz1fJqCCAeTOsuIy`,
      download_link: `${downloadImgSrc}1Cexlw1gvYfFAAc4Jfz1fJqCCAeTOsuIy`,
      tag: ["나쁜","unwell"]
    },
    {
      id: 40,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[6],
      KOR_title: "체온계 물고 있는 얼굴",
      ENG_title: "Face With Thermometer",
      thumnail_img_src: `${viewImgSrc}1JVxI95jvRi6NmSfjc-98yG_c8N4EzT_H`,
      orginal_img_Src: `${viewImgSrc}13KNiEoi3_rsA6swNTW8wOWdAfz0GqvRo`,
      download_link: `${downloadImgSrc}13KNiEoi3_rsA6swNTW8wOWdAfz0GqvRo`,
      tag: ["나쁜","unwell"]
    },
    {
      id: 41,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[6],
      KOR_title: "머리에 붕대를 감은 얼굴",
      ENG_title: "Face With Head-Bandage",
      thumnail_img_src: `${viewImgSrc}1WHg-HYZk7QGUSUcg7h4PjYxds6YlvGqM`,
      orginal_img_Src: `${viewImgSrc}1QyOM5rmlq7BlQvxMsvpMWqA_sHZxO2SR`,
      download_link: `${downloadImgSrc}1QyOM5rmlq7BlQvxMsvpMWqA_sHZxO2SR`,
      tag: ["나쁜","unwell"]
    },
    {
      id: 42,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[6],
      KOR_title: "구역질하는 얼굴",
      ENG_title: "Nauseated Face",
      thumnail_img_src: `${viewImgSrc}1B6fS03XX8czGsw4YqBOrPIlXiV8U0ca8`,
      orginal_img_Src: `${viewImgSrc}1OPvrAuVsvNDmMrqJPgn1M9jr1VeE22KY`,
      download_link: `${downloadImgSrc}1OPvrAuVsvNDmMrqJPgn1M9jr1VeE22KY`,
      tag: ["나쁜","unwell"]
    },
    {
      id: 43,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[6],
      KOR_title: "더운 얼굴",
      ENG_title: "Hot Face",
      thumnail_img_src: `${viewImgSrc}1pdzacPI_wX-htUs-FEkLqYCa-jsaw4JE`,
      orginal_img_Src: `${viewImgSrc}16_WGi1wSL982ZHJ71a49425WkLK50kU1`,
      download_link: `${downloadImgSrc}16_WGi1wSL982ZHJ71a49425WkLK50kU1`,
      tag: ["나쁜","unwell"]
    },
    {
      id: 44,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[6],
      KOR_title: "추워하는 얼굴",
      ENG_title: "Cold Face",
      thumnail_img_src: `${viewImgSrc}1ihIVWt9xJR87twuPYZ1jnNBY3GV6RWZ4`,
      orginal_img_Src: `${viewImgSrc}1nvH0yW77lIvLS3eLzlrZdfLF2d9DVMt5`,
      download_link: `${downloadImgSrc}1nvH0yW77lIvLS3eLzlrZdfLF2d9DVMt5`,
      tag: ["나쁜","unwell"]
    },
    {
      id: 45,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[6],
      KOR_title: "어지러운 얼굴",
      ENG_title: "Dizzy Face",
      thumnail_img_src: `${viewImgSrc}1eQnwwCgth_mNsNaptbKu6puMVQB-Nsuu`,
      orginal_img_Src: `${viewImgSrc}13fWj1nIKo41hy4hw8uWXzxeeDqcF9tRd`,
      download_link: `${downloadImgSrc}13fWj1nIKo41hy4hw8uWXzxeeDqcF9tRd`,
      tag: ["나쁜","unwell"]
    },
    {
      id: 46,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[6],
      KOR_title: "폭발하는 얼굴",
      ENG_title: "Exploding Head",
      thumnail_img_src: `${viewImgSrc}1C9vEQIsu2Q1on1Xz28eeLV5zvl7FRk2S`,
      orginal_img_Src: `${viewImgSrc}1gPmgKiPA3wadl2AKi0NqDt5aAKCTZSDt`,
      download_link: `${downloadImgSrc}1gPmgKiPA3wadl2AKi0NqDt5aAKCTZSDt`,
      tag: ["나쁜","unwell"]
    },
    //01_표정과사람/08_얼굴-모자
    {
      id: 47,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[7],
      KOR_title: "파티하는 얼굴",
      ENG_title: "Party Face",
      thumnail_img_src: `${viewImgSrc}13gCBOf7xr3I_8RRDrweL038l3tNC3FlA`,
      orginal_img_Src: `${viewImgSrc}1KO4UFg-CESzcJ4w9UL0rNDHqIEITLtQ-`,
      download_link: `${downloadImgSrc}1KO4UFg-CESzcJ4w9UL0rNDHqIEITLtQ-`,
      tag: ["모자","hat"]
    },
    //01_표정과사람/09_얼굴-안경
    {
      id: 48,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[8],
      KOR_title: "선글라스 낀 얼굴",
      ENG_title: "Smiling Face With Sunglasses",
      thumnail_img_src: `${viewImgSrc}17jJbjjEzxnn7qi_M3_UwVWsoNP-6A1Z4`,
      orginal_img_Src: `${viewImgSrc}1_7H_IOT4796J4Qpe7U-x6hw9qB_jfVD3`,
      download_link: `${downloadImgSrc}1_7H_IOT4796J4Qpe7U-x6hw9qB_jfVD3`,
      tag: ["안경","glasses"]
    },
    {
      id: 49,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[8],
      KOR_title: "모범생 얼굴",
      ENG_title: "Nerdy Face",
      thumnail_img_src: `${viewImgSrc}1_Gojx150BQ4ufP-tCKNy40R22lymiG2e`,
      orginal_img_Src: `${viewImgSrc}1UqE6Rt5Gboc0ogHmCWXezIa3yK01Dgue`,
      download_link: `${downloadImgSrc}1UqE6Rt5Gboc0ogHmCWXezIa3yK01Dgue`,
      tag: ["안경","glasses"]
    },
    //01_표정과사람/10_얼굴-걱정
    {
      id: 50,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "걱정스러운 얼굴",
      ENG_title: "Worried Face",
      thumnail_img_src: `${viewImgSrc}1b9-wxT2umWFEiDuL-DTr77UQBmB0_x3z`,
      orginal_img_Src: `${viewImgSrc}1ulz4Hn8ILVXdWRKicclWP2f0R0bDkp-2`,
      download_link: `${downloadImgSrc}1ulz4Hn8ILVXdWRKicclWP2f0R0bDkp-2`,
      tag: ["걱정","concerned"]
    },
    {
      id: 51,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "살짝 찡그린 얼굴",
      ENG_title: "Slightly Frowning Face",
      thumnail_img_src: `${viewImgSrc}1MWQw6WCfYFn1YW-ct7G1OMVCy7ESAU6f`,
      orginal_img_Src: `${viewImgSrc}15J_B4cZ8Au1uMzvMjAJAxgvY7qJ2iTHK`,
      download_link: `${downloadImgSrc}15J_B4cZ8Au1uMzvMjAJAxgvY7qJ2iTHK`,
      tag: ["걱정","concerned"]
    },
    {
      id: 52,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "입벌린 얼굴",
      ENG_title: "Surprised Face With Open Mouth",
      thumnail_img_src: `${viewImgSrc}1dFyqz9SgxC20_JdOXdJ7C5O-Iz5XoXVs`,
      orginal_img_Src: `${viewImgSrc}1Pz7FmpN5NwXjwQ8uTXSzEYQFOl1a1oNr`,
      download_link: `${downloadImgSrc}1Pz7FmpN5NwXjwQ8uTXSzEYQFOl1a1oNr`,
      tag: ["걱정","concerned"]
    },
    {
      id: 53,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "깜짝 놀란 얼굴",
      ENG_title: "Astonished Face",
      thumnail_img_src: `${viewImgSrc}1Rra3srqkohdmxOo1kBP1MeOlszallu5C`,
      orginal_img_Src: `${viewImgSrc}1IuhIsAWGpaIR-5GK4VjLCutdyuMqiwwM`,
      download_link: `${downloadImgSrc}1IuhIsAWGpaIR-5GK4VjLCutdyuMqiwwM`,
      tag: ["걱정","concerned"]
    },
    {
      id: 54,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "상기된 얼굴",
      ENG_title: "Face With Wide Open Eyes",
      thumnail_img_src: `${viewImgSrc}16VsimKteCe6IGvi52YK_HfLK_83GQaJM`,
      orginal_img_Src: `${viewImgSrc}16SWyF1Yyzf_0eaBe7rdkFuRxC1MG9ffl`,
      download_link: `${downloadImgSrc}16SWyF1Yyzf_0eaBe7rdkFuRxC1MG9ffl`,
      tag: ["걱정","concerned"]
    },
    {
      id: 55,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "애원하는 얼굴",
      ENG_title: "Pleading Face",
      thumnail_img_src: `${viewImgSrc}1MHds2XLKqs2b7F073TPtZDad7fFQEjdH`,
      orginal_img_Src: `${viewImgSrc}1ekI7E-URfAAhbWt5icR3IvnsDo9EcBRJ`,
      download_link: `${downloadImgSrc}1ekI7E-URfAAhbWt5icR3IvnsDo9EcBRJ`,
      tag: ["걱정","concerned"]
    },
    {
      id: 56,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "입벌리고 찌푸린 얼굴",
      ENG_title: "Frowning Face With Open Mouth",
      thumnail_img_src: `${viewImgSrc}1PckpIlpK8uOUP5yQMWSmhU5IT7iL7BhA`,
      orginal_img_Src: `${viewImgSrc}1dCTK1YdFgaU98YsZ5zJh8xu58kSnSg2j`,
      download_link: `${downloadImgSrc}1dCTK1YdFgaU98YsZ5zJh8xu58kSnSg2j`,
      tag: ["걱정","concerned"]
    },
    {
      id: 57,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "괴로워 하는 얼굴",
      ENG_title: "Anguished Face",
      thumnail_img_src: `${viewImgSrc}1tSJRHyGZEQmsuBKZ0cPYoxsyvsrZuuCh`,
      orginal_img_Src: `${viewImgSrc}1sIfKq9drLHKJYlvYs2PepPyAYt9ZYQ_v`,
      download_link: `${downloadImgSrc}1sIfKq9drLHKJYlvYs2PepPyAYt9ZYQ_v`,
      tag: ["걱정","concerned"]
    },
    {
      id: 58,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "두려워 하는 얼굴",
      ENG_title: "Fearful Face",
      thumnail_img_src: `${viewImgSrc}13zMb-NAJ1bywFMBSeAin1ktDf4TKkTbV`,
      orginal_img_Src: `${viewImgSrc}1A-9zkG4MT4-T4lcMeO9uPsNj5VVT_qpZ`,
      download_link: `${downloadImgSrc}1A-9zkG4MT4-T4lcMeO9uPsNj5VVT_qpZ`,
      tag: ["걱정","concerned"]
    },
    {
      id: 59,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "실망했지만 안도하는 얼굴",
      ENG_title: "Disappointed but Relieved Face",
      thumnail_img_src: `${viewImgSrc}1V54n0I5Cr-zWB99WONvf1Qg8TKS2N4k0`,
      orginal_img_Src: `${viewImgSrc}1ZQqc6Ay9wNFSSn7fIDRQdHEvxF1pfm4N`,
      download_link: `${downloadImgSrc}1ZQqc6Ay9wNFSSn7fIDRQdHEvxF1pfm4N`,
      tag: ["걱정","concerned"]
    },
    {
      id: 60,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "우는 얼굴",
      ENG_title: "Crying Face",
      thumnail_img_src: `${viewImgSrc}1tyW1YxvZUgJ0M_Xf1NCBznjJNGSlpWIP`,
      orginal_img_Src: `${viewImgSrc}1AL4F_5P1qWtTYD5sDYf32BCXNM4vy6V5`,
      download_link: `${downloadImgSrc}1AL4F_5P1qWtTYD5sDYf32BCXNM4vy6V5`,
      tag: ["걱정","concerned"]
    },
    {
      id: 61,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "글썽이는 얼굴",
      ENG_title: "Teary face",
      thumnail_img_src: `${viewImgSrc}1uptKPGo1OtXGsd7sErnOKQVp_RamcSGE`,
      orginal_img_Src: `${viewImgSrc}1-ACO78oGODs1oi5r9navfulGBR_ZWQAC`,
      download_link: `${downloadImgSrc}1-ACO78oGODs1oi5r9navfulGBR_ZWQAC`,
      tag: ["걱정","concerned"]
    },
    {
      id: 62,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "엉엉 우는 얼굴",
      ENG_title: "Loudly Crying Face",
      thumnail_img_src: `${viewImgSrc}1XbKGyi_mxP7p7k-uVZLRrlzAwK8Xwfot`,
      orginal_img_Src: `${viewImgSrc}1x2BjRXJ6Gwp7mbl0GOsUUYPpmRFoFywM`,
      download_link: `${downloadImgSrc}1x2BjRXJ6Gwp7mbl0GOsUUYPpmRFoFywM`,
      tag: ["걱정","concerned"]
    },
    {
      id: 63,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "당혹하는 얼굴",
      ENG_title: "Confounded Face",
      thumnail_img_src: `${viewImgSrc}102m6aghcQNs3LYHlA4gFjhM8TZkktakv`,
      orginal_img_Src: `${viewImgSrc}1scaAUYC6IFVOW7D1qKMKwBjmqIrJyP9E`,
      download_link: `${downloadImgSrc}1scaAUYC6IFVOW7D1qKMKwBjmqIrJyP9E`,
      tag: ["걱정","concerned"]
    },
    {
      id: 64,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "참아내는 얼굴",
      ENG_title: "Persevering Face",
      thumnail_img_src: `${viewImgSrc}1Tf5Pr0eZwX5-MykYuUXFrJqrWLH95wWm`,
      orginal_img_Src: `${viewImgSrc}1__CaDTsDT-EfGPJKjcI0YOV-jY3QbGEc`,
      download_link: `${downloadImgSrc}1__CaDTsDT-EfGPJKjcI0YOV-jY3QbGEc`,
      tag: ["걱정","concerned"]
    },
    {
      id: 65,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "실망한 얼굴",
      ENG_title: "Disappointed Face",
      thumnail_img_src: `${viewImgSrc}1uvQ0a0HsuE5ilai8_N4CT0MyPIWWbkVG`,
      orginal_img_Src: `${viewImgSrc}1CqGWCpTfuSuihWSNXWINipzhRjbjJ___`,
      download_link: `${downloadImgSrc}1CqGWCpTfuSuihWSNXWINipzhRjbjJ___`,
      tag: ["걱정","concerned"]
    },
    {
      id: 66,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "지친 얼굴",
      ENG_title: "Weary Face",
      thumnail_img_src: `${viewImgSrc}1Qs9u4Mm5X8h4zc92j1SaeJDxSxjxtVkP`,
      orginal_img_Src: `${viewImgSrc}1Vtp8vCEMJuUe5gTqoNhEX9i3YFMPRW0e`,
      download_link: `${downloadImgSrc}1Vtp8vCEMJuUe5gTqoNhEX9i3YFMPRW0e`,
      tag: ["걱정","concerned"]
    },
    {
      id: 67,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[9],
      KOR_title: "피곤한 얼굴",
      ENG_title: "Distraught Face",
      thumnail_img_src: `${viewImgSrc}17S73F2p2KEJ-M5vuDedXawVQqEMFtxeo`,
      orginal_img_Src: `${viewImgSrc}1XaaupS6RRMuBeeeQCf3C6CW8ux4Tb6gN`,
      download_link: `${downloadImgSrc}1XaaupS6RRMuBeeeQCf3C6CW8ux4Tb6gN`,
      tag: ["걱정","concerned"]
    },
    //01_표정과사람/11_얼굴-부정
    {
      id: 68,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[10],
      KOR_title: "화내며 씩씩거리는 얼굴",
      ENG_title: "Huffing With Anger Face",
      thumnail_img_src: `${viewImgSrc}1ITF0Sk0bNULxOIb7yCKQfJxnIWwDpx3M`,
      orginal_img_Src: `${viewImgSrc}1BUOjle368oclbHb-VH7zZgUZJS9wl3GA`,
      download_link: `${downloadImgSrc}1BUOjle368oclbHb-VH7zZgUZJS9wl3GA`,
      tag: ["부정","negative"]
    },
    {
      id: 69,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[10],
      KOR_title: "화난 얼굴",
      ENG_title: "Angry face",
      thumnail_img_src: `${viewImgSrc}18vlmmuwszUI4fcfnkehG4P1fJ2tkjAos`,
      orginal_img_Src: `${viewImgSrc}18RanH2lRRDkzX3ze-jplppAptCbsn2ev`,
      download_link: `${downloadImgSrc}18RanH2lRRDkzX3ze-jplppAptCbsn2ev`,
      tag: ["부정","negative"]
    },
    {
      id: 70,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[10],
      KOR_title: "욕하는 얼굴",
      ENG_title: "Face With Symbols Over Mouth",
      thumnail_img_src: `${viewImgSrc}1hTyYhCZnkyz1QPubYRZsiqd654ncEykB`,
      orginal_img_Src: `${viewImgSrc}1Y89n4iITvZUbJYxzHG8wAUFCr_Psq_Ce`,
      download_link: `${downloadImgSrc}1Y89n4iITvZUbJYxzHG8wAUFCr_Psq_Ce`,
      tag: ["부정","negative"]
    },
    {
      id: 71,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[10],
      KOR_title: "머리에 뿔이 달린 웃는 얼굴",
      ENG_title: "Smiling Face With Horns",
      thumnail_img_src: `${viewImgSrc}1Aqqh84EtaaPo7gHoRcey18eo_Cj9L0kf`,
      orginal_img_Src: `${viewImgSrc}19jkgXwmEbVdyWfPIVQriMsOmltZIPH7a`,
      download_link: `${downloadImgSrc}19jkgXwmEbVdyWfPIVQriMsOmltZIPH7a`,
      tag: ["부정","negative"]
    },
    {
      id: 72,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[10],
      KOR_title: "머리에 뿔이 달린 화난 얼굴",
      ENG_title: "Angry Face With Horns",
      thumnail_img_src: `${viewImgSrc}13-oum7qQswvWfLyvgzYCDJayE-nXQGUS`,
      orginal_img_Src: `${viewImgSrc}11HaXU_ryl8sWob1X1KDICCXAcuBAEHUF`,
      download_link: `${downloadImgSrc}11HaXU_ryl8sWob1X1KDICCXAcuBAEHUF`,
      tag: ["부정","negative"]
    },
    {
      id: 73,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[10],
      KOR_title: "해골 얼굴",
      ENG_title: "Skull",
      thumnail_img_src: `${viewImgSrc}1orUu3gbL55rY2sSZa8rJtRLsX9ZCacyH`,
      orginal_img_Src: `${viewImgSrc}1BNqR2hznKyF3fTpOZxt839hw0Dlb82vH`,
      download_link: `${downloadImgSrc}1BNqR2hznKyF3fTpOZxt839hw0Dlb82vH`,
      tag: ["부정","negative"]
    },
    //01_표정과사람/12_얼굴-커스텀
    {
      id: 74,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[11],
      KOR_title: "똥",
      ENG_title: "Pile of Poop",
      thumnail_img_src: `${viewImgSrc}1NrOyXF79zxw7hfu4C69_b9jeqh4BZlSl`,
      orginal_img_Src: `${viewImgSrc}1kMOiQ58m9NV1997rh2gPmcQ2R6Zos6s3`,
      download_link: `${downloadImgSrc}1kMOiQ58m9NV1997rh2gPmcQ2R6Zos6s3`,
      tag: ["커스텀","costume"]
    },
    {
      id: 75,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[11],
      KOR_title: "어릿광대 얼굴",
      ENG_title: "Clown Face",
      thumnail_img_src: `${viewImgSrc}1bznQVwiwna7xx3Uv_jZJUYd6c4GlEbBQ`,
      orginal_img_Src: `${viewImgSrc}1KnIlhVshv5myD-yl6MyGuEr09QgnRwoP`,
      download_link: `${downloadImgSrc}1KnIlhVshv5myD-yl6MyGuEr09QgnRwoP`,
      tag: ["커스텀","costume"]
    },
    {
      id: 76,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[11],
      KOR_title: "유령",
      ENG_title: "Ghost",
      thumnail_img_src: `${viewImgSrc}1rH0rEaSOBOe-H-wqBgbvcN6iufVfa6h9`,
      orginal_img_Src: `${viewImgSrc}1qGwqi5GWaHeNNDR9NmOZttycFR9QSCJ8`,
      download_link: `${downloadImgSrc}1qGwqi5GWaHeNNDR9NmOZttycFR9QSCJ8`,
      tag: ["커스텀","costume"]
    },
    {
      id: 77,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[11],
      KOR_title: "좀비",
      ENG_title: "Zombie",
      thumnail_img_src: `${viewImgSrc}1JV5-SrnJUI8Y64-ZlkuTfylHjy5S11Tu`,
      orginal_img_Src: `${viewImgSrc}14PWIg3VUu3VCFXxOnziEJsC-wwwm0eCW`,
      download_link: `${downloadImgSrc}14PWIg3VUu3VCFXxOnziEJsC-wwwm0eCW`,
      tag: ["커스텀","costume"]
    },
    //01_표정과사람/13_얼굴-고양이
    //null
    //01_표정과사람/14_얼굴-원숭이
    //null
    //01_표정과사람/15_감정
    {
      id: 78,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "번쩍이는 하트",
      ENG_title: "Sparkling Heart",
      thumnail_img_src: `${viewImgSrc}1iEfzrdzBYMuQbMRUMPYASZ1mO0AC3SkY`,
      orginal_img_Src: `${viewImgSrc}17mJfCVDWyTKehtH6FdqWKzWXxTU1uub3`,
      download_link: `${downloadImgSrc}17mJfCVDWyTKehtH6FdqWKzWXxTU1uub3`,
      tag: ["감정","emotion"]
    },
    {
      id: 79,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "빨간색 하트",
      ENG_title: "Red heart",
      thumnail_img_src: `${viewImgSrc}1GtXRszFZOZws8BeUI0Y2lo2l1jkyBz8u`,
      orginal_img_Src: `${viewImgSrc}1ffA3Jr33EqQwAkTTd0cYJ-mw2fBes0Ct`,
      download_link: `${downloadImgSrc}1ffA3Jr33EqQwAkTTd0cYJ-mw2fBes0Ct`,
      tag: ["감정","emotion"]
    },
    {
      id: 80,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "주황색 하트",
      ENG_title: "Orange heart",
      thumnail_img_src: `${viewImgSrc}1tJMr9v5NkhU-ZN1UUiWLrkOXRHY450_f`,
      orginal_img_Src: `${viewImgSrc}1ThHkKOw0FM2vilZtPNyJVPRhZFKJZ2FV`,
      download_link: `${downloadImgSrc}1ThHkKOw0FM2vilZtPNyJVPRhZFKJZ2FV`,
      tag: ["감정","emotion"]
    },
    {
      id: 81,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "노란색 하트",
      ENG_title: "Yellow heart",
      thumnail_img_src: `${viewImgSrc}1TwWgfIHoLJsy28oiHS_h7ovSndw4bAWT`,
      orginal_img_Src: `${viewImgSrc}1VPwlHcSA67MjelTNP2jcYqFvceEvyW2c`,
      download_link: `${downloadImgSrc}1VPwlHcSA67MjelTNP2jcYqFvceEvyW2c`,
      tag: ["감정","emotion"]
    },
    {
      id: 82,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "초록색 하트",
      ENG_title: "Green heart",
      thumnail_img_src: `${viewImgSrc}1Jm-w0cefKxDMcyfj_zar0RF5dmoPIFXg`,
      orginal_img_Src: `${viewImgSrc}1u9qwIn3K0qzpYvKgsgOpYFGhI8Ndxt4H`,
      download_link: `${downloadImgSrc}1u9qwIn3K0qzpYvKgsgOpYFGhI8Ndxt4H`,
      tag: ["감정","emotion"]
    },
    {
      id: 83,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "파란색 하트",
      ENG_title: "Blue heart",
      thumnail_img_src: `${viewImgSrc}1VFT5HukvBy-mnt3hole2ng1RJI9Minpa`,
      orginal_img_Src: `${viewImgSrc}1y6uf2nF02TPR7-HwLmOa-9EsvJSPcBx-`,
      download_link: `${downloadImgSrc}1y6uf2nF02TPR7-HwLmOa-9EsvJSPcBx-`,
      tag: ["감정","emotion"]
    },
    {
      id: 84,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "보라색 하트",
      ENG_title: "Purple heart",
      thumnail_img_src: `${viewImgSrc}1Bz6wAqT9GerEoDwH2p_5CF-vG0IbES_N`,
      orginal_img_Src: `${viewImgSrc}1OQY1mBfqyfAM8MxlK0SCfrcZV3CuWK5d`,
      download_link: `${downloadImgSrc}1OQY1mBfqyfAM8MxlK0SCfrcZV3CuWK5d`,
      tag: ["감정","emotion"]
    },
    {
      id: 85,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "갈색 하트",
      ENG_title: "Brown heart",
      thumnail_img_src: `${viewImgSrc}1jTvFjSQXjhh4fmDqhZfyiu8mjE0YSy8h`,
      orginal_img_Src: `${viewImgSrc}1EMRBYHCF_ZIZXl6pSfhqOZjmPMakc5PW`,
      download_link: `${downloadImgSrc}1EMRBYHCF_ZIZXl6pSfhqOZjmPMakc5PW`,
      tag: ["감정","emotion"]
    },
    {
      id: 86,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "검은색 하트",
      ENG_title: "Black heart",
      thumnail_img_src: `${viewImgSrc}1tm8VAYnunn6WJbEaXWs6adLUPLy9ODDc`,
      orginal_img_Src: `${viewImgSrc}14AAaGzO_Tok9iwh4pR5s3xhyxzPA7H4c`,
      download_link: `${downloadImgSrc}14AAaGzO_Tok9iwh4pR5s3xhyxzPA7H4c`,
      tag: ["감정","emotion"]
    },
    {
      id: 87,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "흰색 하트",
      ENG_title: "White heart",
      thumnail_img_src: `${viewImgSrc}1kqWbD-dmvqV2MqoKXNDQLILXjNN6cAXZ`,
      orginal_img_Src: `${viewImgSrc}1YvbPW2PusCWNNRNUBGQaDHFuercAOcqj`,
      download_link: `${downloadImgSrc}1YvbPW2PusCWNNRNUBGQaDHFuercAOcqj`,
      tag: ["감정","emotion"]
    },
    {
      id: 88,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "불",
      ENG_title: "Fire",
      thumnail_img_src: `${viewImgSrc}18g1K5lkpxusGdl8B4DV4ymhaqVhzRVnj`,
      orginal_img_Src: `${viewImgSrc}1QXc5o04Ls4Vxci9oke02KPx7Gz7XB8ia`,
      download_link: `${downloadImgSrc}1QXc5o04Ls4Vxci9oke02KPx7Gz7XB8ia`,
      tag: ["감정","emotion"]
    },
    {
      id: 89,
      main_category: mainCateory[0],
      sub_category: main01_subCategory[14],
      KOR_title: "번개",
      ENG_title: "Lightning",
      thumnail_img_src: `${viewImgSrc}1unmNEpCcHHubcePQCOo82FJ28dOgedP5`,
      orginal_img_Src: `${viewImgSrc}1DYY2foSbfNdOxd-jZKzjL7ygMJSlF4xc`,
      download_link: `${downloadImgSrc}1DYY2foSbfNdOxd-jZKzjL7ygMJSlF4xc`,
      tag: ["감정","emotion"]
    },
  ]