import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { css } from '@emotion/react';
import { Meta } from './components';
import Main from './pages/main';
import TestMain from './pages/testMain';
import TestQuestion from './pages/testQuestion';
import TestResult from './pages/testResult';
import ScrollToTop from './components/ScrollToTop';
import ScriptTag from 'react-script-tag';
import { MBTI } from './enum';
import '@kfonts/bm-euljiro';
import Logo from './assets/logo.png';

const containerStyle = css({
  margin: '0 auto',
  maxWidth: 450,
  minWidth: 345
});

const borderStyle = css({
  position: 'relative',
  border: '4px solid #DA4C4A',
  minWidth: 337,
  maxWidth: 442,
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

const App = () => {
  return (
    <div css={containerStyle}>
      <Meta />

      {/* Kakao Adfit Header */}
      <ins className="kakao_ad_area" style={{ display: 'none', marginBottom: 10 }}
           data-ad-unit="DAN-7n5IxE69Ihln4ayw"
           data-ad-width="320"
           data-ad-height="100"></ins>
      <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>

      <div css={borderStyle}>
        <div css={{ textAlign: 'center' }}>
          <img src={Logo} css={logoStyle}/>
        </div>
        <BrowserRouter basename="/test/">
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Main}></Route>
              {/* 떡볶이 테스트 */}
              <Route exact path="/tteokbokki/main" component={TestMain}></Route>
              <Route exact path="/tteokbokki/question" component={TestQuestion}></Route>
              {MBTI.map((type, index) => {
                const url = `/tteokbokki/result/${type}`
                return (
                  <Route exact key={index} path={url} component={() => <TestResult type={type}></TestResult>}></Route>
                )
              })}
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </div>

      {/* Kakao Adfit Footer */}
      <div>
        <ins className="kakao_ad_area" style={{ display: 'none', marginTop: 5 }}
             data-ad-unit="DAN-3umNJ81fMvTmKBjy"
             data-ad-width="320"
             data-ad-height="100"></ins>
        <ScriptTag type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></ScriptTag>
      </div>
    </div>
  );
};

export default App;
