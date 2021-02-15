import { useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { Button, ShareButtons } from '../components';
import { BASE_URL } from '../enum';
import Analytics from '../analyze/Analytics';
import MadeByIcon from '../assets/made_by.png';
import Test1 from '../assets/test1.png';
import Test2 from '../assets/test2.png';
import Test3 from '../assets/test3.png';

const introStyle = css({
  textAlign: 'center',
  width: '100%',
});

const testStyle = css({
  width: 335,
  cursor: 'pointer',
  '&:active': {
    opacity: 0.8,
  },
});

const Main = () => {
  const history = useHistory();
  const goToTestMain = (type) => {
    Analytics.sendEvent({
      category: 'Move page',
      action: 'Go to test main',
      label: 'Global main page',
    });
    history.push(`/${type}/main`);
  };
  return (
    <div css={introStyle}>
      <header css={{ textAlign: 'center', color: '#fff', marginTop: 100 }}>
        <h3 css={{ fontSize: 16 }}>
          인공지능 A.I 빅데이터를 활용해
          <br />
          과학적이고(싶고) 정확한(것을 추구하는)
        </h3>
        <h1 css={{ fontSize: 55, marginTop: 20, marginBottom: 75 }}>
          심리테스트
        </h1>
      </header>
      <div css={{ marginBottom: 32 }}>
        <img src={MadeByIcon} css={{ width: 123 }} />
      </div>
      <div>
        <div onClick={() => goToTestMain('tteokbokki')}>
          <img src={Test1} css={testStyle} />
        </div>
        <div>
          <img src={Test2} css={testStyle} />
        </div>
        <div>
          <img src={Test3} css={testStyle} />
        </div>
      </div>
      <ShareButtons
        url={BASE_URL}
        title={'심리 테스트'}
        desc={'심리 테스트 설명'}
      />
      <footer css={{ color: '#fff', fontFamily: 'Roboto', fontSize: 12 }}>
        <div css={{ color: '#fff' }}>
          광고 및 후원문의: ddangkong.studio@gmail.com
        </div>
        <div css={{ opacity: 0.5 }}>
          Copyright © 2021 ddangkong studio All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default Main;
