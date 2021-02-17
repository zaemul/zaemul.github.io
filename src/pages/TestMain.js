import { useLocation, useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { Button, TteokbokkiContainer, ShareButtons } from '../components';
import { BASE_URL } from '../enum';
import Logo from '../assets/tteokbokki/tteokbokki.png';
import ArrowIcon from '../assets/arrow.png';
import MadeByIcon from '../assets/made_by.png';
import Analytics from '../analyze/Analytics';

const introStyle = css({
  margin: '40px auto 0 auto',
  textAlign: 'center',
});

const logoStyle = css({
  width: 182,
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
  fontSize: 18,
});

const startBtnStyle = css({
  width: 200,
  height: 54,
  fontSize: 25,
  marginTop: 5,
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
        <div css={{ width: '65%', margin: '0 auto' }}>
          <h1 css={titleStyle}>떡볶이 테스트</h1>
          <h2 css={descStyle}>
            떡볶이로 알아보는 당신의 심리{'\n'}당신을 떡볶이로 표현한다면?
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
          imgUrl="https://tteokbokki.s3.ap-northeast-2.amazonaws.com/main.png"
          title={'떡볶이 테스트'}
          desc={'떡볶이로 알아보는 당신의 심리. 당신을 떡볶이로 표현한다면?'}
        />
        <div>
          <img
            src={MadeByIcon}
            css={{ width: 110, marginTop: -10, marginBottom: 15 }}
          />
        </div>
      </div>
    </TteokbokkiContainer>
  );
};

export default TestMain;
