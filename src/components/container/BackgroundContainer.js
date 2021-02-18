import { css } from '@emotion/react';

const backgroundStyle = (color) => {
  return css({
    backgroundColor: color,
  });
};

const containerStyle = css({
  margin: '0 auto',
  maxWidth: 450,
  minWidth: 345,
});

const BackgroundContainer = ({ backgroundColor, children, style }) => {
  return (
    <div css={[backgroundStyle(backgroundColor), style]}>
      <div css={containerStyle}>{children}</div>
    </div>
  );
};

export default BackgroundContainer;
