import facebookIcon from '../../assets/facebook.png'
import { css } from '@emotion/react';

const imgStyle = css({
  width: 40,
  height: 40
});

const FacebookShareButton = ({ url }) => {
  const twitterDataObj = {
    baseUrl: 'https://www.facebook.com/sharer/sharer.php',
    quote: '떡볶이 심리테스트'
  };

  const { baseUrl, quote } = twitterDataObj;
  const facebookUrl = `${baseUrl}?quote=${quote}&u=${url}`;

  return (
    <a target='_blank' href={facebookUrl}>
      <img css={imgStyle} src='https://spti.snackpot.kr/images/share/share_facebook.svg' />
    </a>
  )
};

export default FacebookShareButton;