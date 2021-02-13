import { css } from '@emotion/react';
import Logo from '../assets/logo.png';

const borderStyle = css({
  position: 'relative',
  border: '4px solid #DA4C4A',
  minWidth: 337,
  maxWidth: 442,
  marginBottom: 15,
  '&:before': {
    border: '1px solid #DA4C4A',
    content: '""',
    display: 'block',
    position: 'absolute',
    top: 6,
    left: 6,
    right: 6,
    bottom: 6,
    pointerEvents: 'none'
  }
});

const logoStyle = css({
  position: 'relative',
  top: -10,
  width: 100,
  height: 40
});

const TteokbokkiContainer = ({ useIcon = true, children }) => {
  return (
    <div css={borderStyle}>
      { useIcon && (
        <div css={{ textAlign: 'center' }}>
          <img src={Logo} css={logoStyle} />
        </div>
      )}
      {children}
    </div>
  )
};

export default TteokbokkiContainer;