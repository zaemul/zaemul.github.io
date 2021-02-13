import {
  KakaoShareButton,
  FacebookShareButton,
  TwitterShareButton,
  CopyUrlButton,
  SaveImageButton
} from '../../components'
import { css } from '@emotion/react';

const buttonGroupStyle = css({
  marginTop: 20,
  marginBottom: 30
});

const ShareButtons = ({ url, title, desc, useImageBtn = false }) => {
  return (
    <div css={buttonGroupStyle}>
      {useImageBtn && <SaveImageButton url={url} />}
      <CopyUrlButton url={url} />
      <KakaoShareButton url={url} title={title} desc={desc} />
      <TwitterShareButton url={url} />
      <FacebookShareButton url={url} />
    </div>
  )
};

export default ShareButtons;