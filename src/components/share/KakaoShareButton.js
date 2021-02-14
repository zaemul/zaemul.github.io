import KakaoIcon from '../../assets/kakao.png';
import { css } from '@emotion/react';
import { BASE_URL } from '../../enum';
import Analytics from '../../analyze/Analytics';

const imgStyle = css({
  width: 32,
  height: 32,
  marginRight: 4,
  marginLeft: 4,
});

const buttonObj = (url, imgUrl, title, desc) => {
  const buttons = url.includes('result')
    ? [
        {
          title: '결과보기',
          link: { mobileWebUrl: url, webUrl: url },
        },
        {
          title: '테스트하기',
          link: { mobileWebUrl: BASE_URL, webUrl: BASE_URL },
        },
      ]
    : [
        {
          title: '테스트하기',
          link: { mobileWebUrl: BASE_URL, webUrl: BASE_URL },
        },
      ];
  return {
    objectType: 'feed',
    content: {
      title,
      description: desc,
      imageUrl: imgUrl,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    },
    buttons,
  };
};

const KakaoShareButton = ({ url, imgUrl, title, desc }) => {
  const sendMessage = () => {
    Analytics.sendEvent({
      category: 'Share',
      action: 'Share Kakaotalk',
      label: 'Share button',
    });
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('44567fe04f717ac081149b09264ae84e');
      }
      kakao.Link.sendDefault(buttonObj(url, imgUrl, title, desc));
    }
  };
  return (
    <button id="kakao-link-btn" onClick={sendMessage}>
      <img css={imgStyle} src={KakaoIcon} />
    </button>
  );
};
export default KakaoShareButton;
