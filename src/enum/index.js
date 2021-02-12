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
  'ESFP'
];

// https://hotissuefinder.tistory.com/149
export const MBTI_PERCENTAGE = {
  INTJ: 4,
  INTP: 3,
  INFJ: 2,
  INFP: 3,
  ISTJ: 25,
  ISTP: 9,
  ISFJ: 8,
  ISFP: 7,
  ENTJ: 2,
  ENTP: 2,
  ENFJ: 1,
  ENFP: 4,
  ESTJ: 15,
  ESTP: 6,
  ESFJ: 5,
  ESFP: 5
};

// https://hotissuefinder.tistory.com/149
export const MBTI_MATCH = {
  INTJ: { good: ['ESFP', 'ESTP'], bad: ['ESFJ', 'ISFJ'] },
  INTP: { good: ['ESFJ', 'ENFJ'], bad: ['ESFP', 'ISFP'] },
  INFJ: { good: ['ESTP', 'ESFP'], bad: ['ESTJ', 'ISTJ'] },
  INFP: { good: ['ESTJ', 'ENTJ'], bad: ['ESTP', 'ISTP'] },
  ISTJ: { good: ['ENFP', 'ENTP'], bad: ['ENFJ', 'INFJ'] },
  ISTP: { good: ['ENFJ', 'ESFJ'], bad: ['ENFP', 'INFP'] },
  ISFJ: { good: ['ENTP', 'ENFP'], bad: ['ENTJ', 'INTJ'] },
  ISFP: { good: ['ENTJ', 'ESTJ'], bad: ['ENTP', 'INTP'] },
  ENTJ: { good: ['ISFP', 'INFP'], bad: ['ISFJ', 'ESFJ'] },
  ENTP: { good: ['ISFJ', 'ISTJ'], bad: ['ISFP', 'ESFP'] },
  ENFJ: { good: ['ISTP', 'INTP'], bad: ['ISTJ', 'ESTJ'] },
  ENFP: { good: ['ISTJ', 'ISFJ'], bad: ['ISTP', 'ESTP'] },
  ESTJ: { good: ['INFP', 'ISFP'], bad: ['INFJ', 'ENFJ'] },
  ESTP: { good: ['INFJ', 'INTJ'], bad: ['INFP', 'ENFP'] },
  ESFJ: { good: ['INTP', 'ISTP'], bad: ['INTJ', 'ENTJ'] },
  ESFP: { good: ['INTJ', 'INFJ'], bad: ['INTP', 'ENTP'] }
};
