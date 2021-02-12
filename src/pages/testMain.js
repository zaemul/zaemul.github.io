import { useLocation, useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { Button, Content, Header } from '../components';
import ShareButtons from '../components/share/ShareButtons';
import { BASE_URL } from '../enum';
import { BiRightArrowAlt } from 'react-icons/all';
import Logo from '../assets/tteokbokki.png';

const introStyle = css({
  width: '45%',
  margin: '60px auto 0 auto',
  textAlign: 'center'
});

const logoStyle = css({
  width: 156,
  height: 'auto'
});

const titleStyle = css({
  width: 137,
  color: '#C8403E',
  margin: '30px auto 16px auto',
  borderTop: '2px solid #DA4C4A',
  borderBottom: '2px solid #DA4C4A',
  padding: '5px 0',
  fontSize: 25
});

const descStyle = css({
  color: '#DA4C4A',
  fontSize: 20
});

const startBtnStyle = css({
  width: 200,
  height: 54,
  fontSize: 25,
  marginTop: 32
});

const TestMain = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const paths = pathname.split('/').filter(path => !!path);
  const service = paths[0] || '';
  const url = `${BASE_URL}/${service}/main`;

  const handleStart = () => {
    history.push(`/${service}/question`)
  };

  const handleGoToOtherTest = () => {
    history.push('/')
  };
  return (
    <div css={introStyle}>
      <img src={Logo} css={logoStyle} />
      <div css={{ margin: '0 auto' }}>
        <h1 css={titleStyle}>떡볶이 테스트</h1>
        <h2 css={descStyle}>나를 떡볶이로 표현한다면 어떤 떡볶이일까?</h2>
      </div>
      <div>
        <Button css={startBtnStyle} onClick={handleStart}>
          시작하기<BiRightArrowAlt css={{ color: '#fff', opacity: 0.5, verticalAlign: 'middle', marginLeft: 5 }}/>
        </Button>
      </div>
      {/*
      <div>
        <Button onClick={handleGoToOtherTest}>다른 테스트 하기</Button>
      </div>
      */}
      <ShareButtons url={url} title={'떡볶이 심리테스트'} desc={'떡볶이 심리테스트 설명'}/>
    </div>
  );
};

export default TestMain;