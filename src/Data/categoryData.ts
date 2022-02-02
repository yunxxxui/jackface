//카테고리 선언
interface ICategory {
    id: number,
    ENG_title: string,
    KOR_title: string,
}

//메인 카테고리
export const mainCateory: ICategory[] = [
    {
      id: 1,
      ENG_title: "Emotion and People",
      KOR_title: "표정과 사람",
    },
    {
      id:2,
      ENG_title: "Animals and Nature",
      KOR_title: "동물과 자연",
    },
    {
      id:3,
      ENG_title: "Food and Drink",
      KOR_title: "음식과 음료",
    },
    {
      id:4,
      ENG_title: "Activities",
      KOR_title: "활동",
    },
    {
      id:5,
      ENG_title: "Travel and Places",
      KOR_title: "여행과 장소",
    },
    {
      id:6,
      ENG_title: "Objects and Symbols",
      KOR_title: "사물과 기호",
    },
]

//메인 카테고리01_ 서브 카테고리
export const main01_subCategory: ICategory[] = [
    {
      id: 10001,
      ENG_title: "face-smiling",
      KOR_title: "얼굴-미소",
    },
    {
      id: 10002,
      ENG_title: "face-affection",
      KOR_title: "얼굴-애정",
    },
    {
      id: 10003,
      ENG_title: "face-tongue",
      KOR_title: "얼굴-혀",
    },
    {
      id: 10004,
      ENG_title: "face-hand",
      KOR_title: "얼굴-손",
    },
    {
      id: 10005,
      ENG_title: "face-neutral",
      KOR_title: "얼굴-중립",
    },
    {
      id: 10006,
      ENG_title: "face-sleepy",
      KOR_title: "얼굴-졸린",
    },
    {
      id: 10007,
      ENG_title: "face-unwell",
      KOR_title: "얼굴-나쁜",
    },
    {
      id: 10008,
      ENG_title: "face-hat",
      KOR_title: "얼굴-모자",
    },
    {
      id: 10009,
      ENG_title: "face-glasses",
      KOR_title: "얼굴-안경",
    },
    {
      id: 10010,
      ENG_title: "face-concerned",
      KOR_title: "얼굴-걱정",
    },
    {
      id: 10011,
      ENG_title: "face-negative",
      KOR_title: "얼굴-부정",
    },
    {
      id: 10012,
      ENG_title: "face-custume",
      KOR_title: "얼굴-커스텀",
    },
    {
      id: 10013,
      ENG_title: "face-cat",
      KOR_title: "얼굴-고양이",
    },
    {
      id: 10014,
      ENG_title: "face-monkey",
      KOR_title: "얼굴-원숭이",
    },
    {
      id: 10015,
      ENG_title: "emtion",
      KOR_title: "감정",
    }
  ]