import { css } from '@emotion/react';

const adStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100px',
  backgroundColor: 'yellow',
  color: 'blue'
});

const Advertisement = () => {
  return (
    <div css={adStyle}>
      ADVERTISEMENT
    </div>
  )
};

export default Advertisement;