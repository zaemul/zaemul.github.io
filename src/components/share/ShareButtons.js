import {
  KakaoShareButton,
  FacebookShareButton,
  TwitterShareButton,
  CopyUrlButton,
  SaveImageButton,
} from '../../components';
import { css } from '@emotion/react';

const buttonGroupStyle = css({
  marginTop: 20,
  marginBottom: 20,
});

const ShareButtons = ({ url, imgUrl, title, desc, useImageBtn = false }) => {
  return (
    <div css={buttonGroupStyle}>
      {useImageBtn && <SaveImageButton url={url} />}
      <CopyUrlButton url={url} />
      <KakaoShareButton url={url} imgUrl={imgUrl} title={title} desc={desc} />
      <TwitterShareButton url={url} />
      <FacebookShareButton url={url} />
    </div>
  );
};

export default ShareButtons;
