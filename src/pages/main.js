import { useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { Button } from '../components';
import ShareButtons from '../components/share/ShareButtons';
import { BASE_URL } from '../enum';

const introStyle = css({
  textAlign: 'center',
  width: '100%'
});

const Main = () => {
  const history = useHistory();
  const goToTestMain = () => {
    history.push('/tteokbokki/main');
  };
  return (
    <div css={introStyle}>
      <header css={{ textAlign: 'center' }}>
        <h1>심리 테스트 목록</h1>
      </header>
      <div>
        <Button onClick={goToTestMain} css={{ width: 200, marginTop: 50 }}>1. 떡볶이 심리테스트</Button>
      </div>
      <div>
        <Button onClick={goToTestMain} css={{ width: 200, marginTop: 20 }}>2. ???</Button>
      </div>
      <div>
        <Button onClick={goToTestMain} css={{ width: 200, marginTop: 20 }}>3. ???</Button>
      </div>
      <ShareButtons url={BASE_URL} title={'심리 테스트'} desc={'심리 테스트 설명'}/>
    </div>
  );
};

export default Main;