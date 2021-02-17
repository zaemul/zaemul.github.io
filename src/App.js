import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Meta, ScrollToTop } from './components';
import '@kfonts/bm-euljiro';
import Routes from './router';

const App = () => {
  return (
    <div>
      <Meta />
      <BrowserRouter basename="/">
        <ScrollToTop>
          <Routes />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default App;
