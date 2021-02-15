import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { css } from '@emotion/react';
import { Meta, ScrollToTop } from './components';
import ScriptTag from 'react-script-tag';
import '@kfonts/bm-euljiro';
import Routes from './router';
const backgroundStyle = (color = '#dfcdae') => {
  return css({
    backgroundColor: color,
    paddingBottom: 20,
  });
};

const containerStyle = css({
  margin: '0 auto',
  maxWidth: 450,
  minWidth: 345,
});

const App = () => {
  return (
    <div css={backgroundStyle('#dfcdae')}>
      <div css={containerStyle}>
        <Meta />

        {/* Kakao Adfit Header */}
        <ins
          className="kakao_ad_area"
          style={{ display: 'none', marginBottom: 10 }}
          data-ad-unit="DAN-xE7Cmclmill5YLGg"
          data-ad-width="320"
          data-ad-height="100"
        />
        <ScriptTag
          type="text/javascript"
          src="//t1.daumcdn.net/kas/static/ba.min.js"
          async
        />

        <BrowserRouter basename="/">
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
