import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { css } from '@emotion/react';
import { Meta, Advertisement } from './components';
import Main from './pages/main';
import TestMain from './pages/testMain';
import TestQuestion from './pages/testQuestion';
import TestResult from './pages/testResult';
import ScrollToTop from './components/ScrollToTop';

const containerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 400,
  maxWidth: 600,
  margin: '0 auto'
});

const App = () => {
  return (
    <div css={containerStyle}>
      <Meta />
      <Advertisement />
      <BrowserRouter basename="/test/">
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            {/* 떡볶이 테스트 */}
            <Route exact path="/tteokbokki/main" component={TestMain}></Route>
            <Route exact path="/tteokbokki/question" component={TestQuestion}></Route>
            <Route exact path="/tteokbokki/result" component={TestResult}></Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
      <Advertisement />
    </div>
  );
};

export default App;
