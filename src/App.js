import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { css } from '@emotion/react';
import { Meta, ScrollToTop } from './components';
import ScriptTag from 'react-script-tag';
import '@kfonts/bm-euljiro';
import Routes from './router';

const containerStyle = css({
  margin: '0 auto',
  maxWidth: 450,
  minWidth: 345,
});

const App = () => {
  return (
    <div css={containerStyle}>
      <Meta />

      {/* Kakao Adfit Header */}
      <ins
        className="kakao_ad_area"
        style={{ display: 'none', marginBottom: 10 }}
        data-ad-unit="DAN-7n5IxE69Ihln4ayw"
        data-ad-width="320"
        data-ad-height="100"
      ></ins>
      <ScriptTag
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
      ></ScriptTag>

      <BrowserRouter basename="/">
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
