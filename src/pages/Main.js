import { useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { Button, TteokbokkiContainer, ShareButtons } from '../components';
import { BASE_URL } from '../enum';
import Analytics from '../analyze/Analytics';

const introStyle = css({
  textAlign: 'center',
  width: '100%',
});

const Main = () => {
  const history = useHistory();
  const goToTestMain = () => {
    Analytics.sendEvent({
      category: 'Move page',
      action: 'Go to test main',
      label: 'Global main page',
    });
    history.push('/tteokbokki/main');
  };
  return (
    <TteokbokkiContainer>
      <div css={introStyle}>
        <header css={{ textAlign: 'center' }}>
          <h1>심리 테스트 목록</h1>
        </header>
        <div>
          <Button
            onClick={goToTestMain}
            css={{ width: 200, marginTop: 40, marginBottom: 30 }}
          >
            1. 떡볶이 심리테스트
          </Button>
        </div>
        <ShareButtons
          url={BASE_URL}
          title={'심리 테스트'}
          desc={'심리 테스트 설명'}
        />
      </div>
    </TteokbokkiContainer>
  );
};

export default Main;
