import { Helmet } from 'react-helmet';

const Meta = () => {
  return (
    <Helmet>
      <title>심리테스트와 심심풀이땅콩</title>
      <link rel="main-url" href={window.location.href} />

      {/* <!-- Open Graph / Facebook --> */}
    </Helmet>
  );
};

export default Meta;
