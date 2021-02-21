import enfj_icon from '../assets/tteokbokki/enfj_icon.png';
import enfp_icon from '../assets/tteokbokki/enfp_icon.png';
import entj_icon from '../assets/tteokbokki/entj_icon.png';
import entp_icon from '../assets/tteokbokki/entp_icon.png';
import esfj_icon from '../assets/tteokbokki/esfj_icon.png';
import esfp_icon from '../assets/tteokbokki/esfp_icon.png';
import estj_icon from '../assets/tteokbokki/estj_icon.png';
import estp_icon from '../assets/tteokbokki/estp_icon.png';
import infj_icon from '../assets/tteokbokki/infj_icon.png';
import infp_icon from '../assets/tteokbokki/infp_icon.png';
import intj_icon from '../assets/tteokbokki/intj_icon.png';
import intp_icon from '../assets/tteokbokki/intp_icon.png';
import isfj_icon from '../assets/tteokbokki/isfj_icon.png';
import isfp_icon from '../assets/tteokbokki/isfp_icon.png';
import istj_icon from '../assets/tteokbokki/istj_icon.png';
import istp_icon from '../assets/tteokbokki/istp_icon.png';

export const BASE_URL = 'https://ddangkong.me';
export const S3_IMAGE_URL_PREFIX =
  'https://tteokbokki.s3.ap-northeast-2.amazonaws.com';

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
    name: '너좀낯설다 김치 아보카도 떡볶이',
    desc: '용의주도한전략가',
    best: 'ESFP',
    worst: 'ESFJ',
    percentage: 4,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/intj.png`,
    icon: intj_icon,
    personality:
      '이런 떡볶이가 지금까지 맛있었으니까 이렇게 해야지는 재미 없지. 몸에 좋은 김치와 아보카도를 적절하게 섞고.. (많은 테스트 후) 영양도 좋고 맛도 좋은 아보카도 떡볶이를 발명했어!',
    detail: [
      '지식을 축적하기보다 기존에 알고 있던 것들을 다양한 관점으로 합성하는 것에 뛰어나요',
      '나무보다 숲을 보는 사람!',
      '어떤 것이든 신중히 분석하고 숨은 이면의 의미를 생각해 보려는 경향이 있어요',
      '다른 사람에게는 없는 미래에 대한 혁신적인 통찰력이 있으니 주의깊게 들어주세요.',
      '예외가 많은 체계를 싫어하고, 일을 할때 완벽함을 추구해요. 적당히 넘어가는 융통성을 기르는 것은 어떨까요?',
      '멍청한 사람을 정말정말 싫어해요',
    ],
  },
  INTP: {
    name: '끔찍한 혼종 민트초코 떡볶이',
    desc: '논리적사색가',
    best: 'ESFJ',
    worst: 'ESFP',
    percentage: 3,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/intp.png`,
    icon: intp_icon,
    personality:
      '그냥 평범한 떡볶이는 재미 없지. 좀 더 특별한 것이 없을까? (대애충) 요즘 유행하는 민트초코를 넣으면 모두가 좋아하겠지? 짠~~',
    detail: [
      '이해가 빠르고 지적 호기심 만땅!',
      '분석적이고 논리적이라 누구나 인정하는 똑똑이에요',
      '하지만 잘 하는것을 알면서도 너~~무나 게으른 천재',
      '어려운 문제를 해결하고 답을 찾는 걸 좋아하지만 막상 그 해결책을 적용하는 것에는 관심이 없어요',
      '주어진 것을 그대로 수행하기보다는 즉흥적 활동을 통하여 자기 역량을 효과적으로  발휘하는데 뛰어나요',
      '틀에박힌 사회적 통념을 싫어해요',
      "'잘 모르겠다', '나쁘지 않다' 등의 애매한 대답을 한다면 결국 싫다는 것! 자의식이 강해서 찬성하는 것도 싫고, 그렇다고 반대하면 피곤해져서 이도저도 아닌 답을 해요",
    ],
  },
  INFJ: {
    name: '딱 1인분 추억의 학교앞 컵떡볶이',
    desc: '선의의 옹호자',
    best: 'ESTP',
    worst: 'ESTJ',
    percentage: 2,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/infj.png`,
    icon: infj_icon,
    personality:
      '나는 나 혼자 다 잘할수 있어! 나만의 세계가 있다구. 컵떡볶이면 충분해 ',
    detail: [
      '독창성과 내적 독립심이 강하고 확고한 신념을 가지고 있어요',
      '목적이 생기면 그것에만 몰두해서 주변에 소홀하기도 해요',
      '처음 봤을때 말이 없는 것 같지만 친한 친구 앞에서는 미래에 대한 각종 상상을 이야기해요.',
      '친해지고 나면 첫인상과 정말 다르다는 이야기를 많이 들어요',
      '사람이나 일에 있어 호불호가 분명해요.',
      '고운 말을 좋아해서 거친말, 욕, 막말을 하지 않아요. 거친말을 했다면 정말정말 화나게 했다는 것!',
      '부정을 저지르지 않아요. 부당함에 따르지 않는 올곧은 사람!',
      '풍부하고 감성적인 면도 있어요',
    ],
  },
  INFP: {
    name: '고기는 사양해요 비건떡볶이',
    desc: '열정적인 중재자',
    best: 'ESTJ',
    worst: 'ESTP',
    percentage: 3,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/infp.png`,
    icon: infp_icon,
    personality:
      '떡볶이가 아무리 맛있어도, 안좋은 재료를 쓰고 환경을 해치는건 참을 수 없지! 환경에도 부담이 덜가고, 건강에도 좋은 비건 떡볶이가 최고!',
    detail: [
      '내적신념이 깊고 마음이 따뜻한 사람들. 이해심이 많고 관대한 보기드문 착한 사람이에요',
      '밖이 아무리 경쟁이 치열해도 그 경쟁에 끼어들고 싶지 않아요. 그 경쟁에 끼어서 뭣할소냐~',
      '노동의 대가를 넘어서 자신이 하는 일에 의미를 더 두어요. 돈보다는 신념, 열정, 세상을 바꾸고자 하는 의미!',
      '이 열정과 신념을 이용하는 사람들이 있을지도 모르니 주의하세요',
      '나는 남들과는 달라! 자신이 특별한 존재라고 생각해요. 보통 나를 너무 사랑하지만, 때로는 자신을 남들보다 못하다고 여기고 자신을 제일 싫어하기도 하는 역설적인 모습도 있어요',
    ],
  },
  ISTJ: {
    name: '계량은 곧 생명 프렌차이즈 떡볶이',
    desc: '논리주의자',
    best: 'ENFP',
    worst: 'ENFJ',
    percentage: 25,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/istj.png`,
    icon: istj_icon,
    personality:
      '‘거, 레시피 대로 좀 합시다!” 고춧가루 두 스푼, 설탕 한 스푼, 떡 100g,,, 한 치의 오차도 허용하지 않지만, ‘내가 아는 그 맛’ 보장하는 프렌차이즈 떡볶이',
    detail: [
      '뭐든 매뉴얼대로 해야 직성이 풀려요. (보라고 만든 매뉴얼이잖아요.)',
      '계획에 진심인 편. 약속장소 갈 때 걸리는 시간 역순으로 계산해요.',
      '흥선대원군도 울고갈 유교걸, 유교보이',
      '폰에 이름 석자로 저장했다고 서운해 마세요. 모든 사람이 다 그렇거든요.',
      '뱃사공 많은 팀플은 정말 극혐. 혼자하는 작업이면 편-안',
      '주말에도 외출보다, 내 방 청소가 더 재밌어요.',
    ],
  },
  ISTP: {
    name: '떡보다 고기가 많은 차돌박이 떡볶이',
    desc: '만능 재주꾼',
    best: 'ENFJ',
    worst: 'ENFP',
    percentage: 9,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/istp.png`,
    icon: istp_icon,
    personality:
      '떡 네댓 개만 들어가도 그게 떡볶이죠 뭐.(애초에 떡에 관심 없음) 전 제가 좋아하는 고기에 올인할게요.',
    detail: [
      '사는 게 너무 귀찮아요. 귀차니즘 끝판왕',
      '근데 한 번 꽂히면, 지구 끝까지 따라가는 반전 열정러.',
      '의외로 재미만 있다면야, 위험한 일도 감수하죠 (남들눈엔 ★펀.쿨.섹★)',
      '친구나 가족한테 애정 표현 잘 못해요. 멀쩡한 사람, 섭섭이, 쪼잔이 만들어요.',
      '자발적 아싸. 혼밥, 혼술이 편해요. (나 좀 찾지마,,,)',
      '극한의 효율성과 깜짝놀랄 융통성을 추구하는 현실주의자!',
    ],
  },
  ISFJ: {
    name: '문득 땡기는 맛 엄마가 만든 떡볶이',
    desc: '용감한 수호자',
    best: 'ENTP',
    worst: 'ENTJ',
    percentage: 8,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/isfj.png`,
    icon: isfj_icon,
    personality:
      '어떤 재료가 들어갔을줄 알고 떡볶이를 밖에서 사먹어? 집에서 가족들과 하하호호 맘편하게 먹는 엄마표 떡볶이가 최고!',
    detail: [
      '낯선 환경이 싫어요. 새로운 곳보다는 편한곳에서 내 사람들과 보내는 시간이 좋아요.',
      '인싸들과 있을때는 말없는 쭈구리, 아싸들과 있을때는 내가 바로 핵인싸!',
      '순해보인다고 나를 만만하게 봤다간 큰코다칠걸요?',
      '감정기복이 많은 편은 아니라 차분하고 안정적이라는 이야기를 많이 들어요',
      '생각은 많지만 생각을 남들에게 말해주거나 표현하기가 너무 두려워요',
    ],
  },
  ISFP: {
    name: '남들이 떡볶이를 외쳐도 떡꼬치',
    desc: '호기심 예술가',
    best: 'ENTJ',
    worst: 'ENTP',
    percentage: 7,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/isfp.png`,
    icon: isfp_icon,
    personality:
      '왜 떡볶이 중에 골라야 돼? 나는 떡꼬치의 길을 간다.어디로 튈지 모르는 고독한 미식가. 함께 있다가도 훌쩍 떠나버리지만, 이내 짠 하고 돌아오는 떡꼬치 맛집.',
    detail: [
      '가끔 너무 말이 없어서 무슨 생각하는지 잘 모르겠어요.',
      '그래도 위로가 필요한 사람에겐, 말 없이 따뜻한 커피를 건네는 츤데레.',
      '게임할 때도 주로 힐러(치유자) 역할을 선호해요.',
      '싸우기 싫어서 주로 입을 닫고 있어요. (그러니까 너도 1절만해,,,,라고 속으로 생각함)',
      '혼자 있고 싶지만, 또 혼자 있긴 싫어요. (다 공감하죠?)',
      '의외로 얼리어답터가 많아요. 새로운 일엔 항상 초롱초롱 eyes 장착!',
    ],
  },
  ENTJ: {
    name: '내가 왕이될 상인가 궁중떡볶이',
    desc: '대담한 통솔자',
    best: 'ISFP',
    worst: 'ISFJ',
    percentage: 2,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/entj.png`,
    icon: entj_icon,
    personality:
      '대빵이 체질. 전생에 궁중떡볶이만 오조오억번 먹은 귀하신 분. 가끔씩 너무 쟈가워 보이지만, 이 사람 말 잘 들으면 손해볼 건 없어요.',
    detail: [
      '‘계획이 다 있는’ 큰 그림 전문가',
      '간신배여도 일만 잘하면 뭐,,,(같은 맥락으로 일 못하는 충신 필요 없음)',
      '사탄이 친구하자고 하는 팩폭러(악의는 없어요)',
      '한 번 결정한 일을 추진할 때는 마치 like 뻥 뚫린 8차선 고속도로',
      '쌈박질? 핵꿀잼. 승률 100%의 타고난 파이터',
      '‘어제와 똑같은 내일은 없다!’ 항상 새로운 일을 찾아 돌아다녀요.',
    ],
  },
  ENTP: {
    name: '김치가 땡기는 까르보나라 떡볶이',
    desc: '뜨거운 논쟁 변론가',
    best: 'ISFJ',
    worst: 'ISFP',
    percentage: 2,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/entp.png`,
    icon: entp_icon,
    personality:
      '맨날 똑같은 떡볶이보다 다른 떡볶이가 끌려요. 독창성을 인정해 달라구! 난 특별해! ',
    detail: [
      '독창적이면서 창의력이 풍부해요',
      '풍부한 상상력을 가지고 새로운 일을 시도하는 걸 좋아해요. 그러면서 논리력도 있어요.',
      '새로운 문제나 복잡한 문제에 해결 능력이 뛰어나서 사람들이 많이 찾아요',
      '관심을 갖고 있는 분야에서는 엄청난 능력을 보이지만, 새로운 도전이 없는 일상적인 일에는 흥미를 가지지 못해요',
      "같은 이야기를 반복해 듣는 것을 극도로 싫어해요. 하지만 관심 없는 분야라도 '처음' 듣는다면 지식을 넓히는 일이라고 생각해 잘 주워들어요.",
      '가까운 사이거나 오랫동안 알고 지내왔어도 대화가 통하지 않는 사람이라고 판단하면 언제라도 인연을 끊는 무서운 사람..!',
      '남들과 차별화되기를 원해서, 남들이 하는 것을 보고 맞춰가는 걸 싫어해요',
    ],
  },
  ENFJ: {
    name: '지중해식 랍스타 떡볶이',
    desc: '정의로운 사회운동가',
    best: 'ISTP',
    worst: 'ISTJ',
    percentage: 1,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/enfj.png`,
    icon: enfj_icon,
    personality:
      '나를 찾는 사람이 너무나 많아서 피곤하다~ 나는 모두가 좋아하는 랍스타같은 사람이라네',
    detail: [
      '따뜻하고 책임감이 강하며 사교성이 풍부해요',
      '동정심이 많고 이타적이라 누구에게나 좋은 사람이에요',
      '다른 사람들의 생각이나 의견에 관심이 많고, 공동을 위해 다른 사람의 의견에 대체로 동의해요',
      '현재보다는 미래의 가능성을 추구하고, 편안하게 집단을 이끌 줄 알아서 리더에도 제격이에요!',
      '갈등을 싫어해서 본인이 어려움에 처했을 때, 도움을 요청하지 못하는 경우가 많아요. 본인이 사랑하는 사람에게 짐을 지우기를 싫어하기 때문이에요',
      '싫어하는 사람들에게도 쓴소리를 못해 비판도 조심스럽게 하곤 해요',
      '이 사람이 싫어하는 사람은 거의 없어요. 싫어하는 사람이 있나면 마땅한 이유가 있어요. 꼰대, 이기적인 사람, 공감못하는 사람, 못된 말을 한다거나!',
    ],
  },
  ENFP: {
    name: '떡볶이는 거들뿐 치맥 떡볶이',
    desc: '재기발랄한 활동가',
    best: 'ISTJ',
    worst: 'ISTP',
    percentage: 4,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/enfp.png`,
    icon: enfp_icon,
    personality:
      '사실, 떡볶이보다 떡볶이를 안주 삼은 술자리가 더 좋아요. 떡볶이랑 치킨이 그렇게 환상궁합이라던데. 거기에 맥주, + 좋아하는 사람들만 있으면 극락 체험 가능',
    detail: [
      '땅에 발 딛고 살기보단 뜬 구름 따라 떠 다니는 편.',
      '시작도 쉽고, 포기도 빨라요. 뭐든 즐거워야 되잖아요!',
      '신묘한 방법으로, 막혀 있는 길 뚫기 전문이에요.',
      '‘장기플랜이 뭐야? 먹는 거야?’ 뭐든 길어지면 지루해요.',
      '궁금한 건 못 참고, 힘든 사람은 못 지나쳐요.',
      '왠지 모르는데, 이 사람들 옆에 있으면 웃게 돼요.',
    ],
  },
  ESTJ: {
    name: '입에 불나는 매운맛 불닭떡볶이',
    desc: '엄격한 관리자',
    best: 'INFP',
    worst: 'INFJ',
    percentage: 15,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/estj.png`,
    icon: estj_icon,
    personality:
      '떡볶이의 본질은 매운 맛이라고요. 맵찔이들은 떡볶이 먹을 자격이 없어요.(심한말) 이왕 맵게 가는 거 화끈하게 불닭 맛으로 가즈아!',
    detail: [
      '“아들아, 너는 계획이 다 있구나?” (그럼요 있고, 말고요.)',
      '인생은 모 아니면 도. 한 번 시작한 일은 끝장을 봐야 속이 편해요.',
      '친구의 감정적인 하소연이 우는 소리로 들릴 때가 많아요. 이해가 잘 안되거든요.',
      '싸우는 건 싫지만, 싸운다면 최후의 승자는 아마 저 일 거에요ㅋ',
      '학교 공부든, 회사 일이든 빡세야 내가 뭘 좀 하긴 하는 구나 느껴져요.',
      '의외로 자기 사람들에겐 기댈 수 있는 넓은 어깨를 내어주는 어깨깡패',
    ],
  },
  ESTP: {
    name: '새콤달콤 과즙팡팡 과일떡볶이',
    desc: '모험 즐기는 사업가',
    best: 'INFJ',
    worst: 'INFP',
    percentage: 6,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/estp.png`,
    icon: estp_icon,
    personality:
      '떡볶이에 과일이 웬말이냐고요? 아니 내가 먹겠다는데! (큰소리) 언제 어디서나 당당하게 마이웨이를 시전하는 유니크한 입맛에 과일 떡볶이',
    detail: [
      '“내 이름은 탐정, 코난이죠!” 기억력이 좋고 상황 분석력도 좋은 해결사!',
      '선입견이 없어요. “그게 뭐 어쨌는데?” 라는 말을 많이 해요. (찐노상관)',
      '말보다 행동이 먼저인 성격. 그만큼 에너지도 엄청나요.',
      '늘어져서 쉬는 호캉스보다, 액티비티 뿌실 수 있는 바다가 더 좋아요.',
      '직관적으로 얘기하는 걸 좋아해요. 이중메세지 극혐!',
      '미적 센스가 있는 편이고, 옷도 곧 잘입어요. 말그대로 과즙미 팡팡',
    ],
  },
  ESFJ: {
    name: '토핑가득 김치치즈떡볶이피자',
    desc: '사교적인 외교관',
    best: 'INTP',
    worst: 'INTJ',
    percentage: 5,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/esfj.png`,
    icon: esfj_icon,
    personality:
      '뭐든 토핑이 많이 들어가야 제맛 아닌가요? 떡볶이 재료만 넣기 아쉬워서, 이것저것 다넣다가 피자가 되버린 포용력 최고 핵인싸.',
    detail: [
      '남의 일에 관심이 참 많아요. 순도 200%의 따뜻한 오지라퍼',
      '남 얘기 듣는 것만큼, 얘기하는 것도 좋아하는 재간둥이.',
      '단톡에서 급번개하자는 사람들도, 다 이 사람들일걸요?',
      '은근히 감투쓰는 거 좋아해요. 모임에서 한자리 하라고 하면 절대 거절 안함!',
      '대신 칭찬은 필수에요. 칭찬해주면 더 열심히 하는 거 안비밀!',
      '일단 저지르고 보는 타입이니, 주변에서 함께 케어해주세요.',
    ],
  },
  ESFP: {
    name: '그때그때 달라요 냉털 떡볶이',
    desc: '자유로운 연예인',
    best: 'INTJ',
    worst: 'INTP',
    percentage: 5,
    imgUrl: `${S3_IMAGE_URL_PREFIX}/esfp.png`,
    icon: esfp_icon,
    personality:
      '그때그때 삘 받아서 산 식재료가 냉장고에 한 가득. 겨우 냉장고 털어서 다 만든 떡볶이 두고, 친구가 차였다고 하면 달려나가는 ‘냉털 떡볶이’',
    detail: [
      '하기 싫은 일은 내일의 내가 할 거예요.',
      '재밌는 얘기하는 자리엔 절대 안 빠지지만, 왜 때문에 갠톡은 안읽씹..?',
      '최신 유행템에 빠삭해요. 트렌드 척척 박사.',
      '의외로 호불호가 강한 편이라, 가끔 주변 사람들이 놀라기도 해요.',
      '잘 먹고, 잘 자고 단순 그 자체. (응애에요,,,)',
      '남들은 관종이라는데 나는 잘 모르겠어요.',
    ],
  },
};
