import './App.css';
import { css } from '@emotion/react';
import { Meta, Advertisement, Content, Header } from './components';

const containerStyle = css({
  margin: '0 auto'
});

const App = () => {
  return (
    <div css={containerStyle}>
      <Meta />
      <Advertisement />
      <Header />
      <Content />
      <Advertisement />
    </div>
  );
};

export default App;
