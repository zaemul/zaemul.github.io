import { css } from '@emotion/react';
import { useLocation, useHistory } from 'react-router-dom';
import ScriptTag from 'react-script-tag';
import { BASE_URL, MBTI_INFO } from '../enum';
import ResultImage from '../assets/infj.png';
import ArrowIcon from '../assets/arrow.png';
import Analytics from '../analyze/Analytics';
import { Button, ShareButtons, TteokbokkiContainer } from '../components';

const resultImageStyle = css({
  position: 'relative',
  width: '100%',
});

const titleStyle = css({
  margin: '10px auto 10px auto',
  fontSize: 15,
  color: '#C8403E',
});

const descStyle = css({
  fontFamily: 'Roboto',
  fontSize: 12,
  marginBottom: 42,
});

const combiBoxStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto 35px auto',
});

const combiContentStyle = css({
  height: 75,
});

const combiStyle = css({
  display: 'inline-block',
  width: '45%',
  height: 130,
  border: '2px solid #d2363b',
  color: '#C8403E',
  textAlign: 'center',
  fontSize: 15,
});

const combiTitleStyle = css({
  paddingTop: 13,
});

const combiDescStyle = css({
  fontSize: 11,
});

const restartBtnStyle = css({
  width: 230,
  height: 54,
  fontSize: 25,
});

const shareTextStyle = css({
  textAlign: 'center',
  marginTop: 35,
  color: '#C8403E',
  fontSize: 25,
});

const shareLineStyle = css({
  position: 'relative',
  display: 'inline-block',
  width: 40,
  bottom: 10,
  border: '1px solid #DA4C4A',
});

const TestResult = ({ type = '' }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const paths = pathname.split('/').filter((path) => !!path);
  const service = paths[0] || '';
  const url = `${BASE_URL}/${service}/result/${type}`;

  const handleGoToMain = () => {
    Analytics.sendEvent({
      category: 'Move page',
      action: 'Go to main page',
      label: 'Result page',
    });
    history.push(`/${service}/main`);
  };

  const handleGoToGlobalMain = () => {
    Analytics.sendEvent({
      category: 'Move page',
      action: 'Go to global main page',
      label: 'Result page',
    });
    history.push(`/`);
  };

  const resultObj = MBTI_INFO[type] || {};
  const percentage = resultObj.percentage || 0;
  const goodType = MBTI_INFO[type].good[0] || '';
  const goodObj = MBTI_INFO[goodType] || {};
  const badType = MBTI_INFO[type].bad[0] || '';
  const badObj = MBTI_INFO[badType] || {};

  return (
    <>
      <img src={resultObj.imgUrl} css={resultImageStyle} />

      {/* Kakao Adfit Header */}
      <ins
        className="kakao_ad_area"
        style={{ display: 'none', marginBottom: 10 }}
        data-ad-unit="DAN-3umNJ81fMvTmKBjy"
        data-ad-width="320"
        data-ad-height="100"
      ></ins>
      <ScriptTag
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
      ></ScriptTag>

      <TteokbokkiContainer useIcon={false}>
        <div css={{ width: '80%', margin: '40px auto 0 auto' }}>
          <h4 css={titleStyle}>당신의 성격</h4>
          <div css={descStyle}>
            어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라
            어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라
          </div>
          <h4 css={titleStyle}>조심하세요</h4>
          <div css={descStyle}>
            어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라
            어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라
          </div>
          <h4 css={titleStyle}>이런 사람이랑 잘맞아요</h4>
          <div css={descStyle}>
            어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라
            어쩌구 저쩌구 블라블라 어쩌구 저쩌구 블라블라
          </div>
        </div>

        <div css={[{ width: '80%' }, combiBoxStyle]}>
          <div css={combiStyle}>
            <div css={combiTitleStyle}>최고의 궁합 떡볶이</div>
            <img src={goodObj.iconUrl} css={combiContentStyle} />
            {/*<div css={{ marginTop: 30 }}>{goodObj.imgUrl}</div>*/}
            <div css={combiDescStyle}>{goodObj.name}</div>
          </div>
          <div css={combiStyle}>
            <div css={combiTitleStyle}>최악의 궁합 떡볶이</div>
            <img src={badObj.iconUrl} css={combiContentStyle} />
            {/*<div css={{ marginTop: 30 }}>{badObj.imgUrl}</div>*/}
            <div css={combiDescStyle}>{badObj.name}</div>
          </div>
        </div>
      </TteokbokkiContainer>
      <div css={shareTextStyle}>
        <div css={shareLineStyle}></div>
        <h2 css={{ display: 'inline-block', margin: '0 12px' }}>공유하기</h2>
        <div css={shareLineStyle}></div>
      </div>
      <div css={{ textAlign: 'center', margin: '0 auto' }}>
        <ShareButtons
          url={url}
          title={`당신의 타입은 ${type}`}
          desc={`${type}에 대한 설명~`}
        />
        <Button
          css={[{ marginTop: 10, marginBottom: 20 }, restartBtnStyle]}
          onClick={handleGoToMain}
        >
          테스트 다시하기
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
        <Button
          css={[{ marginBottom: 40 }, restartBtnStyle]}
          onClick={handleGoToGlobalMain}
        >
          다른 테스트하기
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
    </>
  );
};

export default TestResult;
