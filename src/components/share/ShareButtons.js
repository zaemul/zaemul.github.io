import KakaoShareButton from './KakaoShareButton';
import FacebookShareButton from './FacebookShareButton';
import TwitterShareButton from './TwitterShareButton';
import CopyUrlButton from './CopyUrlButton';
import { css } from '@emotion/react';

const buttonGroupStyle = css({
  marginTop: 30,
  marginBottom: 30
});

const ShareButtons = ({ url, title, desc }) => {
  return (
    <>
      <div css={buttonGroupStyle}>
        <CopyUrlButton url={url} />
        <TwitterShareButton url={url} />
        <KakaoShareButton url={url} title={title} desc={desc} />
        <FacebookShareButton url={url} />
      </div>
    </>
  )
};

export default ShareButtons;