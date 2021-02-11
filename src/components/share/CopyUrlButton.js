import { useCallback } from 'react';
import { useClipboard } from "use-clipboard-copy";
import copyIcon from '../../assets/copy.png'
import { css } from "@emotion/react";

const imgStyle = css({
  width: 40,
  height: 40
});

const CopyUrlButton = ({ url }) => {
  const clipboard = useClipboard();

  const handleCopy = useCallback(
    (url) => clipboard.copy(url),
    [clipboard.copy, url]
  );

  return (
    <button onClick={() => handleCopy(url)}>
      <img css={imgStyle} src='https://spti.snackpot.kr/images/share/share_url.svg' />
    </button>
  )
};

export default CopyUrlButton;