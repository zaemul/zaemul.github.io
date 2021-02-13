import FacebookIcon from '../../assets/facebook.png';
import { css } from '@emotion/react';
import Analytics from '../../analyze/Analytics';

const imgStyle = css({
  width: 32,
  height: 32,
  marginRight: 4,
  marginLeft: 4,
});

const FacebookShareButton = ({ url }) => {
  const twitterDataObj = {
    baseUrl: 'https://www.facebook.com/sharer/sharer.php',
    quote: '떡볶이 심리테스트',
  };

  const { baseUrl, quote } = twitterDataObj;
  const facebookUrl = `${baseUrl}?quote=${quote}&u=${url}`;

  const handleClick = () => {
    Analytics.sendEvent({
      category: 'Share',
      action: 'Share Facebook',
      label: 'Share button',
    });
  };

  return (
    <a target="_blank" href={facebookUrl} onClick={handleClick}>
      <img css={imgStyle} src={FacebookIcon} />
    </a>
  );
};

export default FacebookShareButton;
