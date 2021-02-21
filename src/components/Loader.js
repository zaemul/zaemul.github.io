import { css, keyframes } from '@emotion/react';
import ddangkong from '../assets/ddangkong.png';

const opacity = keyframes`
  0% { opacity: 0; }
  10% { opacity: 0.1; }
  20% { opacity: 0.2; }
  30% { opacity: 0.3; }
  40% { opacity: 0.4; }
  50% { opacity: 0.5; }
  60% { opacity: 0.6; }
  70% { opacity: 0.7; }
  80% { opacity: 0.8; }
  90% { opacity: 0.9; }
  100% { opacity: 1; }
`;

const containerStyle = css({
  textAlign: 'center',
  paddingTop: 200,
  paddingBottom: 500,
  animationName: opacity,
  animationDuration: '1s',
  animationIterationCount: 100,
  animationDirection: 'alternate',
});

const imgWrapper = css({
  width: 100,
  height: 100,
  borderRadius: 50,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  margin: '0 auto 0 auto',
});

const ddangkongImgStyle = css({
  width: 58,
  height: 58,
  padding: 20,
});

const loaderDescStyle = css({
  fontFamily: 'Roboto',
  fontSize: 14,
});

const Loader = () => {
  return (
    <div css={containerStyle}>
      <div css={imgWrapper}>
        <img src={ddangkong} css={ddangkongImgStyle} />
      </div>
      <div css={{ marginTop: 27 }}>
        <div css={loaderDescStyle}>땅콩이 열심히 분석중..</div>
        <div css={loaderDescStyle}>잠시만 기다려주세요</div>
      </div>
    </div>
  );
};

export default Loader;
