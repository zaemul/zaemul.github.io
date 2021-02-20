import { useCallback } from 'react';
import { useClipboard } from 'use-clipboard-copy';
import CopyIcon from '../../assets/copy.png';
import { css } from '@emotion/react';
import Analytics from '../../analyze/Analytics';

const imgStyle = css({
  width: 45,
  height: 45,
  marginRight: 8,
  marginLeft: 8,
});

const CopyUrlButton = ({ url }) => {
  const clipboard = useClipboard();

  const handleCopy = useCallback(
    (url) => {
      Analytics.sendEvent({
        category: 'Share',
        action: 'Copy URL',
        label: 'Share button',
      });
      alert('링크가 복사되었습니다!');
      clipboard.copy(url);
    },
    [clipboard.copy, url]
  );

  return (
    <button onClick={() => handleCopy(url)}>
      <img css={imgStyle} src={CopyIcon} />
    </button>
  );
};

export default CopyUrlButton;
