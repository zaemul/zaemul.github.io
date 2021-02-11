import twitterIcon from '../../assets/twitter.png'
import { css } from "@emotion/react";

const imgStyle = css({
  width: 40,
  height: 40
});

const TwitterShareButton = ({ url }) => {
  const twitterDataObj = {
    baseUrl: 'http://twitter.com/share',
    text: '떡볶이 심리테스트',
    hashTags: 'test,mbti,떡볶이'
  };

  const { baseUrl, text, hashTags } = twitterDataObj;
  const twitterUrl = `${baseUrl}?text=${text}&url=${url}&hashtags=${hashTags}`;

  return (
    <a target='_blank' href={twitterUrl}>
      <img css={imgStyle} src='https://spti.snackpot.kr/images/share/share_twitter.svg' />
    </a>
  )
};

export default TwitterShareButton;