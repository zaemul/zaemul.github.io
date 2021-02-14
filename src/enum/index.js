export const BASE_URL = 'https://ddangkong.me';

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
    name: '추억의 학교앞 컵떡볶이', // FIXME
    desc: '용의주도한전략가',
    good: ['ESFP', 'ESTP'],
    bad: ['ESFJ', 'ISFJ'],
    percentage: 4,
    imgUrl: 'https://images2.imgbox.com/37/04/PLY7tJIP_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/bb/85/HCtnWcCy_o.png', // FIXME
    personality:
      '행동과 사고에 있어 독창적입니다. 내적인 신념과 비전은 산이라도 움직일 만큼 강합니다. 16가지 유형 중에서 가장 독립적이고 단호합니다. 때때로 어떤 문제에 대하여 아주 고집에 셉니다. 자신이 가진 영감과 목적을 실현시키려는 의지와 결단력과 인내심을 가지고 있습니다. 자신과 타인의 능력을 중요시하며, 목적달성을 위하여 온 시간과 노력을 다 바쳐 일합니다. 직관력과 통찰력이 활용되는 분야에서 능력을 발휘하는 편입니다.',
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
    personality:
      '조용하고 과묵하나 관심이 있는 분야에 대해서는 말을 잘합니다. 사람들을 중심으로 한 가치보다는 아이디어에 관심이 많으며 매우 분석적이고 논리적이며 객관적 비평을 잘합니다. 일의 원리와 아이디어에 관심이 많으며, 실체보다는 실체가 안고 있는 가능성에 관심이 많습니다. 이해가 빠르고 높은 직관력으로 통찰하는 재능과 지적 관심이 많습니다. 개인적인 인간관계나 파티 혹은 잡담 등에는 흥미가 별로 없습니다. 사람을 사귀는 데 있어서 그들은 보통 아이디어를 토론하고 나누는 소수의 가까운 사람들을 주위에 두고 있습니다. 때로 어떤 아이디어에 몰입하여 주위에서 돌아가고 있는 일을 모를 때가 많습니다.',
    careful: '',
    matchGoodWith: '',
  },
  INFJ: {
    name: '딱 1인분 추억의 학교앞 컵떡볶이',
    desc: '선의의 옹호자',
    good: ['ESTP', 'ESFP'],
    bad: ['ESTJ', 'ISTJ'],
    percentage: 2,
    imgUrl: 'https://images2.imgbox.com/37/04/PLY7tJIP_o.png',
    iconUrl: 'https://images2.imgbox.com/bb/85/HCtnWcCy_o.png',
    personality:
      '창의력과 통찰력이 뛰어납니다. 강한 직관력으로 의미와 진실된 관계를 추구합니다. 뛰어난 영감으로 말없이 타인에게 영향력을 끼칩니다. 독창성과 사적인 독립심이 강합니다. 또한 확고한 신념과 뚜렷한 원리원칙을 생활 속에 가지고 있으면서 공동의 이익을 가져오는 일에 심혈을 기울입니다. 인화와 동료애를 중시하는 경향으로 존경을 받고 사람들이 따릅니다. 열정과 신념으로 자신들이 믿는 영감을 구현 시켜 나갈 때 위대한 정신적 지도자들이 이 유형에서 많이 나옵니다.  남에게 강요하기보다 행동과 권유로 사람들의 마음을 움직여 따르게 만드는 지도력이 있습니다.',
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
    personality:
      '마음이 따뜻하나, 상대방을 잘 알기 전에는 표현을 잘하지 않습니다. 조용하며, 자신이 관계하는 사람이나 일에 대하여 강하고 성실합니다. 또한 자신이 지향하는 이상에 대하여는 정열적인 신념을 지니고 있습니다.',
    careful: '',
    matchGoodWith: '',
  },
  ISTJ: {
    name: '추억의 학교앞 컵떡볶이', // FIXME
    desc: '논리주의자',
    good: ['ENFP', 'ENTP'],
    bad: ['ENFJ', 'INFJ'],
    percentage: 25,
    imgUrl: 'https://images2.imgbox.com/37/04/PLY7tJIP_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/bb/85/HCtnWcCy_o.png', // FIXME
    personality:
      '매우 신뢰성이 있고, 사실에 대한 완전하고, 현실적이고, 실용적인 면을 가지고 있습니다. 어떠한 분량의 사실이라도 몰두하고, 기억하며, 이용하고, 정확도에 대해 매우 세심합니다. 위기상황에 대처할 때에도 차분하며 안정되어 있습니다. 그들이 어떤 사람인가를 아는 데는 상당한 시간이 걸립니다. 그들은 외면적으로 볼 때 차분하게 보이지만, 내면적으로는 상당히 바쁩니다.',
    careful: '',
    matchGoodWith: '',
  },
  ISTP: {
    name: '떡보다 고기가 많은 차돌박이 떡볶이',
    desc: '만능 재주꾼',
    good: ['ENFJ', 'ESFJ'],
    bad: ['ENFP', 'INFP'],
    percentage: 9,
    imgUrl: 'https://images2.imgbox.com/37/04/PLY7tJIP_o.png',
    iconUrl: 'https://images2.imgbox.com/ab/83/Otu5ghr9_o.png',
    personality:
      '조용하고 말이 없으며 논리적이고 분석적이고 객관적으로 인생을 관찰하는 유형입니다. 사실적인 정보를 조직하기 좋아하는 반면 일과 관계 되지 않는 이상 자신을 개방하지 않는 편입니다.  그래서 가까운 친구들 외에는 대체로 사람들과 사귀지 않는 편입니다. 일상생활에 있어 매우 적응력이 강합니다.',
    careful: '',
    matchGoodWith: '',
  },
  ISFJ: {
    name: '추억의 학교앞 컵떡볶이', // FIXME
    desc: '용감한 수호자',
    good: ['ENTP', 'ENFP'],
    bad: ['ENTJ', 'INTJ'],
    percentage: 8,
    imgUrl: 'https://images2.imgbox.com/37/04/PLY7tJIP_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/bb/85/HCtnWcCy_o.png', // FIXME
    personality:
      '책임감이 강하고 온정적이며 헌신적입니다. 세부적이고 치밀성과 반복을 요하는 일을 끝까지 해 나가는 인내력이 높습니다. 이들이 가진 침착성과 인내력은 가정이나 집단에 안정성을 가져다줍니다. 다른 사람의 사정을 고려하며 자신과 타인의 감정의 흐름에 민감합니다. 일처리에 있어 현실감각을 가지고 실제적이고 조직적으로 이행합니다. 경험을 통해서 자신이 틀렸다고 인정하기까지 어떠한 난관이 있어도 꾸준히 밀고 나가는 유형입니다. 온순하고 차분합니다.',
    careful: '',
    matchGoodWith: '',
  },
  ISFP: {
    name: '남들이 떡볶이를 외쳐도 떡꼬치',
    desc: '호기심 예술가',
    good: ['ENTJ', 'ESTJ'],
    bad: ['ENTP', 'INTP'],
    percentage: 7,
    imgUrl: 'https://images2.imgbox.com/6a/81/izcs7YCD_o.png',
    iconUrl: 'https://images2.imgbox.com/ee/9d/coLDL3Xf_o.png',
    personality:
      '말보다는 행동으로 따뜻함을 나타내며, 마음이 따뜻하고 동정적입니다. 마치 양털안감을 넣은 오버코트처럼 속마음이 따뜻한 사람들입니다. 그러나 상대방을 잘 알게 될 때까지 이 따뜻함을 잘 드러내지 않는 경향이 있습니다.',
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
    personality:
      '활동적이며 행정적인 일과 장기계획을 선호하며 논리적이고 분석적입니다. 사전 준비를 철저히 하며 계획하고 조직하고 체계적으로 목적달성을 추진시키는 지도자들이 많습니다. 비능률적이거나 확실치 않는 상황에 대해서는 별로 인내심이 없습니다. 그러나 상황이 필요로 할 때는 강하게 대처합니다. 솔직하고 결정력과 통솔력이 있으며, 거시적 안목으로 일을 밀고 나갑니다. 관념 자체에 집중하는 경향이 있으며, 관념 이면의 사람에게는 관심이 별로 없습니다.',
    careful: '',
    matchGoodWith: '',
  },
  ENTP: {
    name: '추억의 학교앞 컵떡볶이', // FIXME
    desc: '뜨거운 논쟁 변론가',
    good: ['ISFJ', 'ISTJ'],
    bad: ['ISFP', 'ESFP'],
    percentage: 2,
    imgUrl: 'https://images2.imgbox.com/37/04/PLY7tJIP_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/bb/85/HCtnWcCy_o.png', // FIXME
    personality:
      '독창적인 혁신가이며, 창의력이 풍부하고 항상 새로운 가능성을 찾고 새로운 시도를 즐기는 유형입니다. 넓은 안목을 가지고 있으며 다방면에 재능이 있습니다. 풍부한 상상력과 어떤 프로젝트를 시도하는 솔선력이 강합니다. 민첩하고 여러 가지 일에 재능을 발휘하며 자신감이 넘쳐 납니다. 사람들의 동향에 대해 기민하고 박식한 편입니다. 다른 사람을 판단하기보다 이해하려고 노력합니다.',
    careful: '',
    matchGoodWith: '',
  },
  ENFJ: {
    name: '지중해식 랍스타 떡볶이',
    desc: '정의로운 사회운동가',
    good: ['ISTP', 'INTP'],
    bad: ['ISTJ', 'ESTJ'],
    percentage: 1,
    imgUrl: 'https://images2.imgbox.com/8a/86/X15okjUe_o.png',
    iconUrl: 'https://images2.imgbox.com/27/f4/5qPs1brr_o.png',
    personality:
      '동정심과 동료애가 많으며, 친절하고 재치 있습니다. 민첩하고 참을성이 많고 성실합니다. 사람들과의 인화를 중요시 여기며, 다른 사람들의 의견을 존중하고 그 가치를 봅니다. 공동의 선(善)을 위해서는 대체로 상대방 의견에 동의하는 경향이 있습니다. 새로운 아이디어에 대한 호기심이 많습니다. 쓰기 보다는 말로써 생각을 잘 표현합니다. 편안하고 능란하게 계획을 제시하거나 조직을 이끌어 가는 능력이 있습니다.',
    careful: '',
    matchGoodWith: '',
  },
  ENFP: {
    name: '떡볶이는 거들뿐 치맥 떡볶이',
    desc: '재기발랄한 활동가',
    good: ['ISTJ', 'ISFJ'],
    bad: ['ISTP', 'ESTP'],
    percentage: 4,
    imgUrl: 'https://images2.imgbox.com/4c/09/7SqprLgo_o.png',
    iconUrl: 'https://images2.imgbox.com/76/f4/ak84kQS8_o.png',
    personality:
      '풍부한 상상력과 영감을 가지고 새로운 프로젝트를 잘 시작합니다. 풍부한 충동적 에너지를 가지고 즉흥적으로 일을 재빠르게 해결하는 솔선수범력과 상상력이 있습니다. 관심이 있는 일이면 무엇이든 척척 해내는 열성파입니다. 뛰어난 통찰력으로 그 사람 안에 있는 성장 발전할 가능성을 들여다봅니다. 또한 자신의 열성으로 다른 사람들도 어떤 프로젝트에 흥미를 가지게 하고 다른 사람을 잘 도와줍니다.',
    careful: '',
    matchGoodWith: '',
  },
  ESTJ: {
    name: '추억의 학교앞 컵떡볶이', // FIXME
    desc: '엄격한 관리자',
    good: ['INFP', 'ISFP'],
    bad: ['INFJ', 'ENFJ'],
    percentage: 15,
    imgUrl: 'https://images2.imgbox.com/37/04/PLY7tJIP_o.png', // FIXME
    iconUrl: 'https://images2.imgbox.com/bb/85/HCtnWcCy_o.png', // FIXME
    personality:
      '일을 조직하고 프로젝트를 계획하고 출범시키는 능력이 뛰어납니다. 현실적이고 사실적이며 체계적, 논리적으로 사업이나 조직체를 이끌어가는 타고난 재능을 가졌기 때문입니다. 혼돈스러운 상태나 불분명한 상태 또는 실용성이 없는 분야에는 큰 흥미가 없습니다. 그러나 필요시에는 언제나 응용하는 힘이 있습니다. 분명한 규칙을 중요시하고 그에 따라 행동하고 일을 추진하고 완성해 나갑니다. 어떤 계획이나 결정을 내릴 때 확고한 사실에 바탕을 두고 이행합니다. 대체로 결과를 현재 볼 수 있는 일을 즐기는 편입니다.',
    careful: '',
    matchGoodWith: '',
  },
  ESTP: {
    name: '새콤달콤 과즙팡팡 과일떡볶이',
    desc: '모험 즐기는 사업가',
    good: ['INFJ', 'INTJ'],
    bad: ['INFP', 'ENFP'],
    percentage: 6,
    imgUrl: 'https://images2.imgbox.com/4d/f0/PV4IFaIA_o.png',
    iconUrl: 'https://images2.imgbox.com/e1/81/YNkbBYlC_o.png',
    personality:
      '관대하고 느긋하며 어떤 사람이나 사건에 대해서 별로 선입관을 갖지 않으며 개방적입니다. 자신에게나 타인에게 있어 관용적이며, 일을 있는 그대로 보고 받아들입니다. 그래서 갈등이나 긴장이 일어나는 상황을 잘 무마하는 능력이 있습니다. ‘꼭 이렇게 되어야 하고, 저렇게 되어야 된다.’라는 규범을 적용하기보다 누구나 만족할 수 있는 해결책을 모색합니다. 또한 타협하고 적응하는 능력이 있습니다. 주의집중을 현재 상황에 맞추고, 현실을 있는 그대로 보는 이 유형의 자연스러운 경향으로 인해 현실적으로 야기되는 문제 해결에 뛰어난 능력을 발휘하기도 합니다.',
    careful: '',
    matchGoodWith: '',
  },
  ESFJ: {
    name: '토핑가득 김치치즈떡볶이피자',
    desc: '사교적인 외교관',
    good: ['INTP', 'ISTP'],
    bad: ['INTJ', 'ENTJ'],
    percentage: 5,
    imgUrl: 'https://images2.imgbox.com/98/0e/Nlxf3AaA_o.png',
    iconUrl: 'https://images2.imgbox.com/8b/11/cFJeGT20_o.png',
    personality:
      '유난히 동정심과 동료애가 많습니다. 친절하고 재치가 있으며, 다른 사람들에게 관심을 쏟고 인화를 도모하는 일을 중요하게 여깁니다. 양심적이고 정리정돈을 잘합니다. 참을성이 많고 다른 사람들을 잘 돕습니다. 또한 다른 사람들의 지지를 받으면 일에 열중합니다. 그러나 다른 사람들의 무관심한 태도에는 민감합니다.',
    careful: '',
    matchGoodWith: '',
  },
  ESFP: {
    name: '그때그때 달라요 냉털 떡볶이',
    desc: '자유로운 연예인',
    good: ['INTJ', 'INFJ'],
    bad: ['INTP', 'ENTP'],
    percentage: 5,
    imgUrl: 'https://images2.imgbox.com/58/4e/4M8w8Qf7_o.png',
    iconUrl: 'https://images2.imgbox.com/f9/35/sbMMq2x0_o.png',
    personality:
      '친절하고 수용적이며 현실적이고 실제적입니다. 어떤 상황에도 잘 적응하며 타협적입니다. 선입견이 별로 없으며 개방적이고 관용적이며 대체로 사람들을 잘 받아들입니다. 주위에서 진행되고 있는 일들을 알고자 하고 또한 열심히 참견하고 끼어들곤 합니다. 다른 사람의 일이나 활동에 관심이 많으며 새로운 사건 혹은 물건에도 관심과 호기심이 많기 때문입니다. 이론이나 책을 통해 배우기보다 경험 등의 실생활을 통해 배우는 것을 선호합니다.',
    careful: '',
    matchGoodWith: '',
  },
};
