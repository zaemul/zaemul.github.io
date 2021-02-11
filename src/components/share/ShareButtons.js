import KakaoShareButton from './KakaoShareButton';
import FacebookShareButton from './FacebookShareButton';
import TwitterShareButton from './TwitterShareButton';
import CopyUrlButton from './CopyUrlButton';
import { css } from '@emotion/react';

const buttonGroupStyle = css({
  marginTop: 80
});

const ShareButtons = ({ url }) => {
  return (
    <>
      <div css={buttonGroupStyle}>
        <CopyUrlButton url={url} />
        <TwitterShareButton url={url} />
        <KakaoShareButton url={url} />
        <FacebookShareButton url={url} />
      </div>
    </>
  )
};

export default ShareButtons;