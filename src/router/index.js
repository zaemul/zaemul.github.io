import { Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import TteokbokkiMain from '../pages/tteokbokki/TteokbokkiMain';
import TteokbokkiQuestion from '../pages/tteokbokki/TteokbokkiQuestion';
import { MBTI } from '../enum';
import TteokbokkiResult from '../pages/tteokbokki/TteokbokkiResult';
import GoogleAnalytics from '../analyze/GoogleAnalytics';

const Routes = () => {
  GoogleAnalytics();
  return (
    <Switch>
      <Route exact path="/" component={Main}></Route>
      {/* 떡볶이 테스트 */}
      <Route exact path="/tteokbokki/main" component={TteokbokkiMain}></Route>
      <Route
        exact
        path="/tteokbokki/question"
        component={TteokbokkiQuestion}
      ></Route>
      {MBTI.map((type, index) => {
        const url = `/tteokbokki/result/${type}`;
        return (
          <Route
            exact
            key={index}
            path={url}
            component={() => <TteokbokkiResult type={type}></TteokbokkiResult>}
          ></Route>
        );
      })}
    </Switch>
  );
};

export default Routes;
