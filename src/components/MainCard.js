import { css } from '@emotion/react';
import Analytics from '../analyze/Analytics';
import { useHistory } from 'react-router-dom';

const containerStyle = (bgColor, img) => {
  return css({
    position: 'relative',
    cursor: 'pointer',
    margin: '0 auto',
    width: 335,
    height: 210,
    backgroundColor: bgColor,
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 200,
    backgroundPositionX: 120,
    backgroundPositionY: 20,
    borderRadius: 15,
    border: '2px solid #333',
    marginBottom: 20,
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
    '&:active': {
      opacity: 0.7,
    },
  });
};

const contentWrapper = css({
  textAlign: 'left',
  color: '#fff',
});

const disableStyle = css({
  position: 'absolute',
  top: -2,
  left: -2,
  borderRadius: 15,
  fontSize: 50,
  width: 335,
  height: 210,
  color: '#bbb',
  backgroundColor: '#555',
  border: '2px solid rgba(0, 0, 0, 0.5)',
  opacity: 0.8,
});

const imageStyle = css({
  width: 200,
  height: 150,
  display: 'none',
});

const numberStyle = css({
  fontFamily: 'Roboto',
  fontWeight: 'bold',
  fontSize: 20,
  padding: 20,
  marginBottom: 52,
});

const titleStyle = css({
  fontSize: 30,
  paddingLeft: 20,
  marginBottom: 5,
});

const descStyle = css({
  fontFamily: 'Roboto',
  fontSize: 15,
  paddingLeft: 20,
  whiteSpace: 'pre-line',
});

const MainCard = ({
  backgroundColor,
  number,
  title,
  desc,
  path,
  logo,
  disabled,
}) => {
  const history = useHistory();

  const goToTestMain = (type) => {
    Analytics.sendEvent({
      category: 'Move page',
      action: 'Go to test main',
      label: 'Global main page',
    });
    if (type) history.push(`/${type}/main`);
  };

  return (
    <section
      css={containerStyle(backgroundColor, logo)}
      onClick={() => {
        if (!disabled) {
          goToTestMain(path);
        }
      }}
    >
      <div css={contentWrapper}>
        <img src={logo} css={imageStyle} />
        <div css={numberStyle}>{number}</div>
        <div css={titleStyle}>{title}</div>
        <div css={descStyle}>{desc}</div>
      </div>
      {disabled && (
        <div css={disableStyle}>
          <p css={{ marginTop: 75, marginLeft: 20 }}>준비중...</p>
        </div>
      )}
    </section>
  );
};

export default MainCard;
