import { Button, Header } from '../components';
import { css } from '@emotion/react';
import { useLocation, useHistory } from 'react-router-dom';
import ShareButtons from '../components/share/ShareButtons';
import { BASE_URL, MBTI_PERCENTAGE, MBTI_MATCH } from '../enum';
import ResultImage from '../assets/result.png';
import {BiRightArrowAlt} from "react-icons/all";

const resultImageStyle = css({
  position: 'relative',
  top: -55,
  left: -5,
  minWidth: 350,
  maxWidth: 450
});

const descStyle = css({
  fontFamily: 'Roboto',
  fontSize: 12
})

const combiStyle = css({
  display: 'inline-block',
  width: 165,
  height: 120,
  border: '2px solid #d2363b',
  color: '#C8403E',
  textAlign: 'center',
  paddingTop: 20,
  fontSize: 15
});

const restartBtnStyle = css({
  width: 230,
  height: 54,
  fontSize: 25,
  marginTop: 10,
  marginBottom: 40
});

const TestResult = ({ type = '' }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const paths = pathname.split('/').filter(path => !!path);
  const service = paths[0] || '';
  const url = `${BASE_URL}/${service}/result/${type}`;

  const handleGoToMain = () => {
    history.push(`/${service}/main`);
  };

  const handleGoToOtherTest = () => {
    history.push('/')
  };

  const percentage = MBTI_PERCENTAGE[type] || 0;
  const good = MBTI_MATCH[type].good || [];
  const bad = MBTI_MATCH[type].bad || [];

  return (
    <>
      <div>
        <img src={ResultImage} css={resultImageStyle}/>

        <div css={{ width: '80%', margin: '-40px auto 50px auto' }}>
          <h4 css={{ color: '#d2363b' }}>당신의 성격</h4>
          <div css={descStyle}>어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라</div>
          <h4 css={{ color: '#d2363b' }}>조심하세요</h4>
          <div css={descStyle}>어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라</div>
          <h4 css={{ color: '#d2363b' }}>당신의 성격</h4>
          <div css={descStyle}>어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라</div>
        </div>

        <div css={{ width: '80%', margin: '50px auto' }}>
          <div css={[combiStyle, { marginRight: 15 }]}>
            최고의 궁합 떡볶이
          </div>
          <div css={combiStyle}>
            최악의 궁합 떡볶이
          </div>
        </div>
        <div css={{ textAlign: 'center', margin: '0 auto' }}>
          <ShareButtons url={url} title={`당신의 타입은 ${type}`} desc={`${type}에 대한 설명~`} />
        </div>

        <div css={{ textAlign: 'center' }}>
          <Button css={restartBtnStyle} onClick={handleGoToMain}>
            테스트 다시하기<BiRightArrowAlt css={{ color: '#fff', opacity: 0.5, verticalAlign: 'middle', marginLeft: 5 }}/>
          </Button>
        </div>
        {/*
        <div css={resultStyle}>
        <h1 css={{ marginBottom: 30 }}>{type}</h1>
        <div css={{ marginBottom: 40 }}>
          <div css={textStyle}>
            <h4 css={{ marginBottom: 5 }}>잘맞는사람</h4>
            {good.map((item, index) => <span key={index}>{item} </span>)}
          </div>
          <div css={textStyle}>
            <h4 css={{ marginBottom: 5 }}>안맞는사람</h4>
            {bad.map((item, index) => <span key={index}>{item} </span>)}
          </div>
          <h4 css={textStyle}>대한민국의 {percentage}%</h4>
        </div>
        <div>
          <Button onClick={handleGoToMain}>다시하기</Button>
        </div>
        <div>
          <Button css={{ marginTop: 20 }} onClick={handleGoToOtherTest}>다른 테스트 하기</Button>
        </div>
        <ShareButtons url={url} title={`당신의 타입은 ${type}`} desc={`${type}에 대한 설명~`} />
      </div>
        */}
      </div>
    </>
  );
};

export default TestResult;