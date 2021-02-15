import { Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import TestMain from '../pages/TestMain';
import TestQuestion from '../pages/TestQuestion';
import { MBTI } from '../enum';
import TestResult from '../pages/TestResult';
import GoogleAnalytics from '../analyze/GoogleAnalytics';

const Routes = () => {
  GoogleAnalytics();
  return (
    <Switch>
      <Route exact path="/" component={Main}></Route>
      {/* 떡볶이 테스트 */}
      <Route exact path="/tteokbokki/main" component={TestMain}></Route>
      <Route exact path="/tteokbokki/question" component={TestQuestion}></Route>
      {MBTI.map((type, index) => {
        const url = `/tteokbokki/result/${type}`;
        return (
          <Route
            exact
            key={index}
            path={url}
            component={() => <TestResult type={type}></TestResult>}
          ></Route>
        );
      })}
    </Switch>
  );
};

export default Routes;
