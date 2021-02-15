import TwitterIcon from '../../assets/twitter.png';
import { css } from '@emotion/react';
import Analytics from '../../analyze/Analytics';

const imgStyle = css({
  width: 32,
  height: 32,
  marginRight: 4,
  marginLeft: 4,
});

const TwitterShareButton = ({ url }) => {
  const twitterDataObj = {
    baseUrl: 'http://twitter.com/share',
    text: '떡볶이 테스트',
    hashTags: 'test,mbti,떡볶이,심리테스트',
  };

  const { baseUrl, text, hashTags } = twitterDataObj;
  const twitterUrl = `${baseUrl}?text=${text}&url=${url}&hashtags=${hashTags}`;

  const handleClick = () => {
    Analytics.sendEvent({
      category: 'Share',
      action: 'Share Twitter',
      label: 'Share button',
    });
  };

  return (
    <a target="_blank" href={twitterUrl} onClick={handleClick}>
      <img css={imgStyle} src={TwitterIcon} />
    </a>
  );
};

export default TwitterShareButton;
