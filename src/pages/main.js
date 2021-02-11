import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const containerStyle = css({
  position: 'relative',
  height: '500px'
});

const introStyle = css({
  textAlign: 'center',
  width: '100%'
});

const linkStyle = css({
  display: 'block',
  marginTop: 100
});

const Main = () => {
  return (
    <div css={containerStyle}>
      <div css={introStyle}>
        <Link to={'/test/tteokbokki'} css={linkStyle}>TEST 1 (떡볶이)</Link>
        <Link to={'/test/tteokbokki'} css={linkStyle}>TEST 2 (???)</Link>
        <Link to={'/test/tteokbokki'} css={linkStyle}>TEST 3 (???)</Link>
      </div>
    </div>
  );
};

export default Main;