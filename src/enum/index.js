export const BASE_URL = 'https://zaemul.github.io/test';

export const MBTI = [
  'INTJ',
  'INTP',
  'INFJ',
  'INFP',
  'ISTJ',
  'ISTP',
  'ISFJ',
  'ISFP',
  'ENTJ',
  'ENTP',
  'ENFJ',
  'ENFP',
  'ESTJ',
  'ESTP',
  'ESFJ',
  'ESFP',
];

// https://hotissuefinder.tistory.com/149
export const MBTI_INFO = {
  INTJ: {
    name: '민트초코 떡볶이(FIXME)',
    desc: '용의주도한전략가',
    good: ['ESFP', 'ESTP'],
    bad: ['ESFJ', 'ISFJ'],
    percentage: 4,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png', // FIXME
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  INTP: {
    name: '끔찍한 혼종 민트초코 떡볶이',
    desc: '논리적사색가',
    good: ['ESFJ', 'ENFJ'],
    bad: ['ESFP', 'ISFP'],
    percentage: 3,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png',
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png',
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  INFJ: {
    name: '딱 1인분, 추억의 학교앞 컵떡볶이',
    desc: '선의의 옹호자',
    good: ['ESTP', 'ESFP'],
    bad: ['ESTJ', 'ISTJ'],
    percentage: 2,
    imgUrl: 'https://images2.imgbox.com/37/04/PLY7tJIP_o.png',
    iconUrl: 'https://images2.imgbox.com/bb/85/HCtnWcCy_o.png',
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  INFP: {
    name: '고기는 사양해요 비건떡볶이',
    desc: '열정적인 중재자',
    good: ['ESTJ', 'ENTJ'],
    bad: ['ESTP', 'ISTP'],
    percentage: 3,
    imgUrl: 'https://images2.imgbox.com/46/aa/gogmGNuV_o.png',
    iconUrl: 'https://images2.imgbox.com/41/02/oTzGPBlo_o.png',
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ISTJ: {
    name: '민트초코 떡볶이(FIXME)',
    desc: '논리주의자',
    good: ['ENFP', 'ENTP'],
    bad: ['ENFJ', 'INFJ'],
    percentage: 25,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png', // FIXME
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ISTP: {
    name: '민트초코 떡볶이(FIXME)',
    desc: '만능 재주꾼',
    good: ['ENFJ', 'ESFJ'],
    bad: ['ENFP', 'INFP'],
    percentage: 9,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png', // FIXME
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ISFJ: {
    name: '민트초코 떡볶이(FIXME)',
    desc: '용감한 수호자',
    good: ['ENTP', 'ENFP'],
    bad: ['ENTJ', 'INTJ'],
    percentage: 8,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png', // FIXME
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ISFP: {
    name: '민트초코 떡볶이(FIXME)',
    desc: '호기심 예술가',
    good: ['ENTJ', 'ESTJ'],
    bad: ['ENTP', 'INTP'],
    percentage: 7,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png', // FIXME
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ENTJ: {
    name: '내가 왕이될 상인가 궁중떡볶이',
    desc: '대담한 통솔자',
    good: ['ISFP', 'INFP'],
    bad: ['ISFJ', 'ESFJ'],
    percentage: 2,
    imgUrl: 'https://images2.imgbox.com/05/b1/fXRD8vXG_o.png',
    iconUrl: 'https://images2.imgbox.com/ca/61/C80SCXTg_o.png',
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ENTP: {
    name: '민트초코 떡볶이(FIXME)',
    desc: '뜨거운 논쟁 변론가',
    good: ['ISFJ', 'ISTJ'],
    bad: ['ISFP', 'ESFP'],
    percentage: 2,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png', // FIXME
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ENFJ: {
    name: '민트초코 떡볶이(FIXME)',
    desc: '정의로운 사회운동가',
    good: ['ISTP', 'INTP'],
    bad: ['ISTJ', 'ESTJ'],
    percentage: 1,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png', // FIXME
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ENFP: {
    name: '민트초코 떡볶이(FIXME)',
    desc: '재기발랄한 활동가',
    good: ['ISTJ', 'ISFJ'],
    bad: ['ISTP', 'ESTP'],
    percentage: 4,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png', // FIXME
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ESTJ: {
    name: '민트초코 떡볶이(FIXME)',
    desc: '엄격한 관리자',
    good: ['INFP', 'ISFP'],
    bad: ['INFJ', 'ENFJ'],
    percentage: 15,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png', // FIXME
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ESTP: {
    name: '민트초코 떡볶이(FIXME)',
    desc: '모험 즐기는 사업가',
    good: ['INFJ', 'INTJ'],
    bad: ['INFP', 'ENFP'],
    percentage: 6,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png', // FIXME
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ESFJ: {
    name: '다 드루와 토핑가득 김치치즈떡볶이피자',
    desc: '사교적인 외교관',
    good: ['INTP', 'ISTP'],
    bad: ['INTJ', 'ENTJ'],
    percentage: 5,
    imgUrl: 'https://images2.imgbox.com/98/0e/Nlxf3AaA_o.png',
    iconUrl: 'https://images2.imgbox.com/8b/11/cFJeGT20_o.png',
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
  ESFP: {
    name: '민트초코 떡볶이(FIXME)',
    desc: '자유로운 연예인',
    good: ['INTJ', 'INFJ'],
    bad: ['INTP', 'ENTP'],
    percentage: 5,
    imgUrl: 'https://images2.imgbox.com/c5/5b/ySkVKRHt_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/9a/a8/6MMmxie4_o.png', // FIXME
    personality: '',
    careful: '',
    matchGoodWith: '',
  },
};
