import { css } from '@emotion/react';
import Analytics from '../analyze/Analytics';
import { useHistory } from 'react-router-dom';

const containerStyle = (bgColor, img) => {
  return css({
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
    '&:active': {
      opacity: 0.7,
    },
  });
};

const contentWrapper = css({
  textAlign: 'left',
  color: '#fff',
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

const MainCard = ({ backgroundColor, number, title, desc, path, logo }) => {
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
      onClick={() => goToTestMain(path)}
    >
      <div css={contentWrapper}>
        <img src={logo} css={imageStyle} />
        <div css={numberStyle}>{number}</div>
        <div css={titleStyle}>{title}</div>
        <div css={descStyle}>{desc}</div>
      </div>
    </section>
  );
};

export default MainCard;
