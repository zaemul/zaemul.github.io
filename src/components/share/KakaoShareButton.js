import kakaoIcon from '../../assets/kakao.png'
import { css } from '@emotion/react';

const imgStyle = css({
  width: 40,
  height: 40
});

const KakaoShareButton = ({ url }) => {
  const sendMessage = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('44567fe04f717ac081149b09264ae84e');
      }
      kakao.Link.sendCustom({ templateId: 47221 });
    }
  }
  return (
    <button id="kakao-link-btn" onClick={sendMessage}>
      <img css={imgStyle} src='https://spti.snackpot.kr/images/share/share_kakao.svg' />
    </button>
  )
}
export default KakaoShareButton;
