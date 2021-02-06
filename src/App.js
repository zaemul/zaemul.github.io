import './App.css';
import logo from './tteokbokki.png';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <>
      <Helmet>
        <title>떡볶이 취향 분석 테스트</title>
        <meta name="title" content="떡볶이 취향 테스트" />
        <meta name="description" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 떡볶이 취향 테스트" data-react-helmet />
        <link rel="main-url" href={window.location.href} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://zaemul.github.io/"/>
        <meta property="og:title" content="떡볶이 취향 테스트"/>
        <meta property="og:description" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 떡볶이 취향 테스트"/>
        <meta property="og:image" content="https://dl.dropboxusercontent.com/s/n9pr74fbv6gdiub/main-header.png?dl=0"/>
        <meta property="og:image:alt" content="떡볶이 취향 테스트" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://zaemul.github.io/"/>
        <meta property="twitter:title" content="떡볶이 취향 테스트"/>
        <meta property="twitter:description" content="진짜 내 모습을 찾아가는 심리 분석 테스트 : 떡볶이 취향 테스트"/>
        <meta property="twitter:image" content="https://dl.dropboxusercontent.com/s/n9pr74fbv6gdiub/main-header.png?dl=0"/>
        <meta property="twitter:image:alt" content="떡볶이 취향 테스트" />
      </Helmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" />
        </header>
      </div>
    </>
  );
}

export default App;
