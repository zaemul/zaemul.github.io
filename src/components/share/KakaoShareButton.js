import kakaoIcon from '../../assets/kakao.png'
import { css } from '@emotion/react';
import { BASE_URL } from '../../enum';

const imgStyle = css({
  width: 40,
  height: 40
});

const buttonObj = (url, title, desc) => {
  return {
    objectType: 'feed',
    content: {
      title,
      description: desc,
      imageUrl:
        'https://lh3.googleusercontent.com/proxy/G8OQOogC48SUUFL2yNJjMsMezkh4QR8hkuAZvmxWL3v9l5u0vhDPKu4dEaNdYgXQBTeMOwksgmEfI2tgtSG4hybMB4nwez7sj6NtU5G5',
      link: {
        mobileWebUrl: BASE_URL,
        webUrl: BASE_URL
      },
    },
    buttons: [
      {
        title: '테스트 하러가기',
        link: {
          mobileWebUrl: url,
          webUrl: url
        },
      }
    ]
  };
};

const KakaoShareButton = ({ url, title, desc }) => {
  const sendMessage = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('44567fe04f717ac081149b09264ae84e');
      }
      kakao.Link.sendDefault(buttonObj(url, title, desc));
    }
  }
  return (
    <button id="kakao-link-btn" onClick={sendMessage}>
      <img css={imgStyle} src='https://spti.snackpot.kr/images/share/share_kakao.svg' />
    </button>
  )
}
export default KakaoShareButton;
