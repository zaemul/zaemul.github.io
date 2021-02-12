import { useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { Button, Content, Header } from '../components';
import ShareButtons from '../components/share/ShareButtons';

const containerStyle = css({
  position: 'relative',
  height: '300px'
});

const introStyle = css({
  position: 'absolute',
  bottom: 30,
  textAlign: 'center',
  width: '100%'
});

const TestMain = () => {
  const url = 'https://zaemul.github.io/test/tteokbokki/main';
  const history = useHistory();

  const handleStart = () => {
    history.push('/tteokbokki/question')
  };

  const handleGoToOtherTest = () => {
    history.push('/')
  };
  return (
    <>
      <Header />
      <div css={containerStyle}>
        <div css={introStyle}>
          <h1 css={{ marginBottom: 30 }}>Main</h1>
          <Button onClick={handleStart}>시작하기</Button>
          <Button css={{ marginLeft: 30 }} onClick={handleGoToOtherTest}>다른 테스트 하기</Button>
          <ShareButtons url={url} />
        </div>
      </div>
    </>
  );
};

export default TestMain;