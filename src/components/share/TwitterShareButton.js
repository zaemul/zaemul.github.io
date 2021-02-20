import TwitterIcon from '../../assets/twitter.png';
import { css } from '@emotion/react';
import Analytics from '../../analyze/Analytics';

const imgStyle = css({
  width: 45,
  height: 45,
  marginRight: 8,
  marginLeft: 8,
});

const TwitterShareButton = ({ url }) => {
  const twitterDataObj = {
    baseUrl: 'http://twitter.com/share',
    text:
      '인공지능 A.I 빅데이터를 이용해 과학적이고(싶고) 정확한(것을 추구하는) 심리테스트와 심심풀이땅콩',
    hashTags: '심리테스트,심심풀이땅콩',
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
