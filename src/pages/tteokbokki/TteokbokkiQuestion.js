import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';

import { questions } from '../../question';
import {
  Question,
  TteokbokkiContainer,
  BackgroundContainer,
  Loader,
} from '../../components';
import { KakaoTop, KakaoBottom } from '../../advertisement';
import Analytics from '../../analyze/Analytics';

const numberStyleWrapper = css({
  position: 'relative',
  top: -10,
  display: 'inline-block',
  color: '#d2363b',
  padding: '0 0 10px 35px',
});

const numberStyle = css({
  paddingBottom: 2,
  borderBottom: '2px solid #DA4C4A',
});

const currentNumberStyle = css({
  fontSize: 20,
});

const totalNumberStyle = css({
  opacity: 0.3,
  fontSize: 12,
});

const TOTAL_STEP = 12;

const TteokbokkiQuestion = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const paths = pathname.split('/').filter((path) => !!path);
  const service = paths[0] || '';

  const [step, setStep] = useState(0);
  const [result, setResult] = useState([0, 0, 0, 0]);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    Analytics.sendEvent({
      category: 'Move question',
      action: 'Go to next question',
      label: 'Question page',
    });

    setStep(step + 1);
  };

  const handleSelect = (ans) => {
    /* Record answer */
    const idx = Math.floor(step / 3);

    let increArray = [0, 0, 0, 0];
    if (ans === 1) {
      increArray[idx] += 1;
    }

    let newResult = [];
    for (let i = 0; i < 4; i++) {
      newResult.push(result[i] + increArray[i]);
    }
    setResult(newResult);
    handleNext();
  };

  useEffect(() => {
    if (step === TOTAL_STEP) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        handleGoResult(analyze(result));
      }, 3000);
    }
  }, [step, result]);

  const analyze = (result) => {
    const first = result[0] > 1 ? 'I' : 'E';
    const second = result[1] > 1 ? 'N' : 'S';
    const third = result[2] > 1 ? 'F' : 'T';
    const fourth = result[3] > 1 ? 'J' : 'P';
    return `${first}${second}${third}${fourth}`;
  };

  const handleGoResult = (type) => {
    Analytics.sendEvent({
      category: 'Move page',
      action: 'Go to result page',
      label: 'Question page',
    });
    history.push(`/${service}/result/${type}`);
  };

  const getStepLabel = (step) => {
    return step < 10 ? `0${step}` : step;
  };

  return (
    <>
      <BackgroundContainer backgroundColor={'#E5D6BC'}>
        <KakaoTop />
      </BackgroundContainer>
      {!loading ? (
        <TteokbokkiContainer>
          <div>
            <div css={numberStyleWrapper}>
              <div css={numberStyle}>
                <span css={currentNumberStyle}>{getStepLabel(step + 1)}</span>
                <span css={totalNumberStyle}>/ {TOTAL_STEP}</span>
              </div>
            </div>
            {step >= 0 && step < TOTAL_STEP && (
              <Question
                question={questions[step]}
                handleSelect={handleSelect}
              />
            )}
          </div>
        </TteokbokkiContainer>
      ) : (
        <BackgroundContainer backgroundColor={'#E5D6BC'}>
          <Loader />
        </BackgroundContainer>
      )}
      <BackgroundContainer
        backgroundColor={'#E5D6BC'}
        style={{ paddingTop: 15 }}
      >
        <div css={{ textAlign: 'center' }}>
          <KakaoBottom />
        </div>
      </BackgroundContainer>
    </>
  );
};

export default TteokbokkiQuestion;
