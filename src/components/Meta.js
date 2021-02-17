import { Helmet } from 'react-helmet';

const Meta = () => {
  return (
    <Helmet>
      <title>심리테스트와 심심풀이땅콩</title>
      <meta name="title" content="심리테스트와 심심풀이땅콩" />
      <meta
        name="description"
        content="인공지능 A.I 빅데이터를 이용해 과학적이고(싶고) 정확한(것을 추구하는) 심리테스트와 심심풀이땅콩"
        data-react-helmet
      />
      <link rel="main-url" href={window.location.href} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:url" content="https://ddangkong.me" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="심리테스트와 심심풀이땅콩" />
      <meta
        property="og:description"
        content="인공지능 A.I 빅데이터를 이용해 과학적이고(싶고) 정확한(것을 추구하는) 심리테스트와 심심풀이땅콩"
      />
      <meta
        property="og:image"
        content="https://tteokbokki.s3.ap-northeast-2.amazonaws.com/main.png"
      />
      <meta property="og:image:alt" content="심리테스트와 심심풀이땅콩" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ddangkong.me" />
      <meta property="twitter:title" content="심리테스트와 심심풀이땅콩" />
      <meta
        property="twitter:description"
        content="인공지능 A.I 빅데이터를 이용해 과학적이고(싶고) 정확한(것을 추구하는) 심리테스트와 심심풀이땅콩"
      />
      <meta
        property="twitter:image"
        content="https://tteokbokki.s3.ap-northeast-2.amazonaws.com/main.png"
      />
      <meta property="twitter:image:alt" content="심리테스트와 심심풀이땅콩" />
    </Helmet>
  );
};

export default Meta;
