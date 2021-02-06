import { css } from '@emotion/react';
import logo from '../tteokbokki.png';

const headerStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#eee'
});

const logoStyle = css({
  width: '100px',
  height: '100px'
});

const Header = () => {
  return (
    <header css={headerStyle}>
      <img css={logoStyle} src={logo} alt='logo' />
      <div>떡볶이 심리 테스트</div>
    </header>
  );
};

export default Header;