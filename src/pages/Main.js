import { css } from '@emotion/react';

import { MainCard, ShareButtons } from '../components';
import { BASE_URL } from '../enum';
import { KakaoTop, KakaoBottom } from '../advertisement';
import { BackgroundContainer } from '../components';

import TteokbokkiLogo from '../assets/tteokbokki/tteokbokki.png';
import OceanLogo from '../assets/ocean/ocean.png';
import CoronaLogo from '../assets/corona/corona.png';
import Main1 from '../assets/main_1.png';
import Main2 from '../assets/main_2.png';
import Main3 from '../assets/main_3.png';
import Main4 from '../assets/main_4.png';

const introStyle = css({
  textAlign: 'center',
  width: '100%',
});

const headerStyle = css({
  textAlign: 'center',
  color: '#fff',
  paddingTop: 60,
  backgroundImage: `url(${Main1}), url(${Main2}), url(${Main3}), url(${Main4})`,
  backgroundSize: '104px, 70px, 74px, 116px',
  backgroundRepeat: 'no-repeat',
  backgroundPositionX: '270px, 0px, 53px, 250px',
  backgroundPositionY: '0px, 30px, 330px, 250px',
});

const Services = [
  {
    number: '#.01',
    title: '떡볶이 테스트',
    desc: '떡볶이로 알아보는 당신의 심리\n당신을 떡볶이로 표현한다면?',
    backgroundColor: '#BFA372',
    path: 'tteokbokki',
    logo: TteokbokkiLogo,
  },
  {
    number: '#.02',
    title: '바닷속전생찾기',
    desc: '당신은 전생에 바닷속에서\n용왕이었을까? 물고기였을까?',
    backgroundColor: '#90D8F9',
    path: '',
    logo: OceanLogo,
    disabled: true,
  },
  {
    number: '#.03',
    title: '코로나 끝나면 어디갈까',
    desc: '코로나가 끝나면 바로 떠나요\n당신에게 딱 맞는 여행지는?',
    backgroundColor: '#5888E5',
    path: '',
    logo: CoronaLogo,
    disabled: true,
  },
];

const Main = () => {
  return (
    <BackgroundContainer backgroundColor={'#4CB0DB'}>
      <div css={introStyle}>
        <KakaoTop />
        <header css={headerStyle}>
          <h3 css={{ fontSize: 16, lineHeight: 1.3 }}>
            인공지능 A.I 빅데이터를 활용해
            <br />
            과학적이고(싶고)
            <br />
            정확한(것을 추구하는)
          </h3>
          <h1
            css={{
              wordBreak: 'keep-all',
              fontSize: 55,
              marginTop: 28,
              marginBottom: 66,
            }}
          >
            심리테스트와 심심풀이땅콩
          </h1>
          <div
            css={{
              paddingBottom: 32,
              color: '#fff',
              opacity: 0.5,
              fontSize: 13,
            }}
          >
            Made by. 땅콩스튜디오
          </div>
        </header>
        <div>
          {Services.map((service) => {
            const {
              backgroundColor,
              number,
              title,
              desc,
              path,
              logo,
              disabled,
            } = service;
            return (
              <MainCard
                backgroundColor={backgroundColor}
                title={title}
                number={number}
                desc={desc}
                path={path}
                logo={logo}
                disabled={disabled}
              />
            );
          })}
        </div>
        {/*
        <ShareButtons
          url={BASE_URL}
          title={'심리 테스트'}
          desc={'심리 테스트 설명'}
        />
        */}
        <footer
          css={{
            color: '#fff',
            fontFamily: 'Roboto',
            fontSize: 12,
            paddingBottom: 30,
            marginTop: 60,
          }}
        >
          <div css={{ color: '#fff', marginBottom: 10 }}>
            광고 및 후원문의: ddangkong.studio@gmail.com
          </div>
          <div css={{ opacity: 0.5 }}>
            Copyright © 2021 ddangkong studio All rights reserved
          </div>
        </footer>

        <div css={{ textAlign: 'center' }}>
          <KakaoBottom />
        </div>
      </div>
    </BackgroundContainer>
  );
};

export default Main;
