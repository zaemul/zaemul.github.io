import { useLocation, useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { Button, TteokbokkiContainer, ShareButtons } from '../components';
import { BASE_URL } from '../enum';
import Logo from '../assets/tteokbokki.png';
import ArrowIcon from '../assets/arrow.png';
import Analytics from '../analyze/Analytics';

const introStyle = css({
  margin: '60px auto 0 auto',
  textAlign: 'center',
});

const logoStyle = css({
  width: 156,
  height: 'auto',
});

const titleStyle = css({
  width: 137,
  color: '#C8403E',
  margin: '30px auto 16px auto',
  borderTop: '2px solid #DA4C4A',
  borderBottom: '2px solid #DA4C4A',
  padding: '5px 0',
  fontSize: 25,
});

const descStyle = css({
  color: '#DA4C4A',
  whiteSpace: 'pre-line',
  fontSize: 20,
});

const startBtnStyle = css({
  width: 200,
  height: 54,
  fontSize: 25,
  marginTop: 32,
});

const TestMain = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const paths = pathname.split('/').filter((path) => !!path);
  const service = paths[0] || '';
  const url = `${BASE_URL}/${service}/main`;

  const handleStart = () => {
    Analytics.sendEvent({
      category: 'Move page',
      action: 'Go to question page',
      label: 'Main page',
    });
    history.push(`/${service}/question`);
  };

  return (
    <TteokbokkiContainer>
      <div css={introStyle}>
        <img src={Logo} css={logoStyle} />
        <div css={{ width: '55%', margin: '0 auto' }}>
          <h1 css={titleStyle}>떡볶이 테스트</h1>
          <h2 css={descStyle}>
            나를 떡볶이로 표현한다면{'\n'}어떤 떡볶이일까?
          </h2>
        </div>
        <div css={{ margin: '0 auto' }}>
          <Button css={startBtnStyle} onClick={handleStart}>
            시작하기
            <img
              src={ArrowIcon}
              css={{
                verticalAlign: 'middle',
                marginLeft: 5,
                width: 32,
                height: 32,
              }}
            />
          </Button>
        </div>
        <ShareButtons
          url={url}
          title={'떡볶이 심리테스트'}
          desc={'떡볶이 심리테스트 설명'}
        />
      </div>
    </TteokbokkiContainer>
  );
};

export default TestMain;
