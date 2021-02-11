import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { css } from '@emotion/react';
import { Meta, Advertisement, Content, Header } from './components';
import Tteokbokki from './pages/tteokbokki';
import Main from './pages/main';

const containerStyle = css({
  margin: '0 auto'
});

const App = () => {
  return (
    <div css={containerStyle}>
      <Meta />
      <Advertisement />
      <Route exact path="/test" component={Main}></Route>
      <Route exact path="/test/tteokbokki" component={Tteokbokki}></Route>
      <Advertisement />
    </div>
  );
};

export default App;
