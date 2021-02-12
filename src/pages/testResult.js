import { Button, Header } from '../components';
import { css } from '@emotion/react';
import { useHistory } from 'react-router-dom';
import ShareButtons from '../components/share/ShareButtons';

const containerStyle = css({
  position: 'relative',
  height: '300px'
});

const resultStyle = css({
  position: 'absolute',
  bottom: 30,
  textAlign: 'center',
  width: '100%'
});

const TestResult = ({ type = '' }) => {
  const url = 'https://zaemul.github.io/test/tteokbokki/result';
  const history = useHistory();

  const handleGoToMain = () => {
    history.push('/tteokbokki/main');
  };

  const handleGoToOtherTest = () => {
    history.push('/')
  };

  return (
    <>
      <Header />
      <div css={containerStyle}>
        <div css={resultStyle}>
          <h1 css={{ marginBottom: 30 }}>{type}</h1>
          <Button onClick={handleGoToMain}>다시하기</Button>
          <Button css={{ marginLeft: 30 }} onClick={handleGoToOtherTest}>다른 테스트 하기</Button>
          <ShareButtons url={url} />
        </div>
      </div>
    </>
  );
};

export default TestResult;