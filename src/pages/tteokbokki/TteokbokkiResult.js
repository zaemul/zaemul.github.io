import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { css } from '@emotion/react';

import { BASE_URL, MBTI_INFO } from '../../enum';
import Analytics from '../../analyze/Analytics';
import {
  Button,
  ShareButtons,
  TteokbokkiContainer,
  BackgroundContainer,
  Loader,
} from '../../components';

import { KakaoTop, KakaoMiddle, KakaoBottom } from '../../advertisement';

import ArrowIcon from '../../assets/arrow.png';
import DownloadIcon from '../../assets/download.png';

const resultImageContainerStyle = css({
  textAlign: 'center',
  backgroundColor: '#E5D6BC',
});

const resultImageStyle = css({
  position: 'relative',
  width: '100%',
  maxWidth: 450,
  minWidth: 345,
});

const titleStyle = css({
  margin: '0 auto 10px auto',
  fontSize: 18,
  color: '#C8403E',
});

const descStyle = css({
  fontFamily: 'Roboto',
  marginLeft: 3,
  color: '#333',
  fontSize: 14,
  marginBottom: 22,
  whiteSpace: 'pre-line',
  wordBreak: 'keep-all',
});

const combiBoxStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 auto 35px auto',
});

const combiContentStyle = css({
  height: 75,
  marginTop: -5,
});

const combiStyle = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '47%',
  height: 170,
  border: '1px solid #DA4C4A',
  color: '#C8403E',
  textAlign: 'center',
  fontSize: 15,
  cursor: 'pointer',
});

const percentBorderStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90%',
  margin: '35px auto 10px auto',
  height: 47,
  color: '#fff',
  backgroundColor: '#DA4C4A',
});

const percentContentStyle = css({
  width: '95%',
  textAlign: 'center',
  padding: '8px 1px',
  margin: '20px 0',
  fontSize: 17,
  border: '1px solid rgb(221, 129, 130)',
});

const combiTitleStyle = css({
  paddingTop: 8,
  fontSize: 16,
  height: 26,
  color: '#fff',
  backgroundColor: '#DA4C4A',
});

const combiDescStyle = css({
  margin: '0 auto 5px auto',
  wordBreak: 'keep-all',
  width: '80%',
  fontSize: 16,
  marginBottom: 5,
});

const restartBtnStyle = css({
  width: 250,
  height: 54,
  fontSize: 25,
});

const btnIconStyle = css({
  verticalAlign: 'middle',
  marginLeft: 5,
  marginBottom: 2,
  width: 25,
  height: 25,
});

const shareTextStyle = css({
  textAlign: 'center',
  paddingTop: 35,
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

const TteokbokkiResult = ({ type = '' }) => {
  const { pathname } = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  const paths = pathname.split('/').filter((path) => !!path);
  const service = paths[0] || '';
  const url = `${BASE_URL}/${service}/result/${type}`;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  const handleGoToMain = () => {
    Analytics.sendEvent({
      category: 'Move page',
      action: 'Go to main page',
      label: 'Result page',
    });
    history.push(`/${service}/main`);
  };

  const handleMovePage = (type) => {
    history.push(`/${service}/result/${type}`);
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
  const bestType = MBTI_INFO[type].best || '';
  const bestObj = MBTI_INFO[bestType] || {};
  const worstType = MBTI_INFO[type].worst || '';
  const worstObj = MBTI_INFO[worstType] || {};

  return (
    <>
      <div css={resultImageContainerStyle}>
        <KakaoTop />
        <img src={resultObj.imgUrl} css={resultImageStyle} />
      </div>

      <div css={{ textAlign: 'center', backgroundColor: '#E5D6BC' }}>
        <KakaoMiddle />
      </div>
      <TteokbokkiContainer useIcon={false}>
        <div css={{ width: '90%', margin: '25px auto 0 auto' }}>
          <h4 css={titleStyle}>당신의 성격</h4>
          <div css={descStyle}>{resultObj.personality}</div>
          <div css={[descStyle, { marginTop: 30 }]}>
            {resultObj.detail.map((desc, index) => {
              return (
                <p key={index} css={{ margin: '0 0 3px 0' }}>
                  - {desc}
                </p>
              );
            })}
          </div>
        </div>

        <div css={percentBorderStyle}>
          <div css={percentContentStyle}>
            한국인 중 당신과 같은 떡볶이 입맛 {percentage}%
          </div>
        </div>

        <div css={[{ width: '90%' }, combiBoxStyle]}>
          <div css={combiStyle} onClick={() => handleMovePage(bestType)}>
            <div css={combiTitleStyle}>같이 먹으면 환상궁합</div>
            <div css={combiDescStyle}>{bestObj.name}</div>
            <div>
              <img src={bestObj.icon} css={combiContentStyle} />
            </div>
          </div>
          <div css={combiStyle} onClick={() => handleMovePage(worstType)}>
            <div css={combiTitleStyle}>같이 먹으면 배탈궁합</div>
            <div css={combiDescStyle}>{worstObj.name}</div>
            <div>
              <img src={worstObj.icon} css={combiContentStyle} />
            </div>
          </div>
        </div>
      </TteokbokkiContainer>
      <BackgroundContainer backgroundColor={'#E5D6BC'}>
        <div css={shareTextStyle}>
          <div css={shareLineStyle}></div>
          <h2 css={{ display: 'inline-block', margin: '0 12px' }}>공유하기</h2>
          <div css={shareLineStyle}></div>
        </div>
        <div css={{ textAlign: 'center', margin: '0 auto' }}>
          <ShareButtons
            url={url}
            imgUrl={resultObj.imgUrl}
            title={`당신은 "${resultObj.name}!"`}
            desc={'내가 무슨 떡볶이인지 궁금하다면?'}
          />
          <Button css={[{ marginBottom: 15, marginTop: 40 }, restartBtnStyle]}>
            <a
              target="_blank"
              css={{ textDecoration: 'none', color: '#fff' }}
              download
              href={resultObj.imgUrl}
            >
              이미지 저장하기
              <img src={DownloadIcon} css={btnIconStyle} />
            </a>
          </Button>
          <Button
            css={[{ marginBottom: 15 }, restartBtnStyle]}
            onClick={handleGoToMain}
          >
            테스트 다시하기
            <img src={ArrowIcon} css={btnIconStyle} />
          </Button>
          <Button
            css={[{ marginBottom: 40 }, restartBtnStyle]}
            onClick={handleGoToGlobalMain}
          >
            더 많은 테스트
            <img src={ArrowIcon} css={btnIconStyle} />
          </Button>
        </div>
        <div css={{ textAlign: 'center' }}>
          <KakaoBottom />
        </div>
      </BackgroundContainer>
    </>
  );
};

export default TteokbokkiResult;
