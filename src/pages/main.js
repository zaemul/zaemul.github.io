import { useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { Button } from '../components';
import ShareButtons from '../components/share/ShareButtons';

const containerStyle = css({
  height: 300
});

const introStyle = css({
  textAlign: 'center',
  width: '100%'
});

const Main = () => {
  const url = 'https://zaemul.github.io/test';
  const history = useHistory();
  const goToTestMain = () => {
    history.push('/tteokbokki/main');
  };
  return (
    <div css={containerStyle}>
      <div css={introStyle}>
        <Button onClick={goToTestMain} css={{ marginTop: 100 }}>1. 떡볶이 심리테스트</Button>
        <ShareButtons url={url} />
      </div>
    </div>
  );
};

export default Main;