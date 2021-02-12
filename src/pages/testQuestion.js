import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';
import { questions } from '../question';
import { Button, Header, Question } from '../components';

const numberStyleWrapper = css({
  position: 'relative',
  top: -10,
  display: 'inline-block',
  color: '#d2363b',
  padding: '0 0 10px 35px'
});

const numberStyle = css({
  paddingBottom: 5,
  borderBottom: '2px solid #DA4C4A'
});

const currentNumberStyle = css({
  fontSize: 20
});

const TOTAL_STEP = 12;

const TestQuestion = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const paths = pathname.split('/').filter(path => !!path);
  const service = paths[0] || '';

  const [step, setStep] = useState(0);
  const [result, setResult] = useState([0, 0, 0, 0]);

  const handleNext = () => setStep(step + 1);

  const handleSelect = (ans) => {
    /* Record answer */
    const idx = Math.floor(step / 3);

    let increArray = [0, 0, 0, 0];
    if (ans === 1) { increArray[idx] += 1; }

    let newResult = [];
    for (let i = 0; i < 4; i++) {
      newResult.push(result[i] + increArray[i]);
    }
    setResult(newResult);
    handleNext();
  };

  useEffect(() => {
    if (step === TOTAL_STEP) {
      handleGoResult(analyze(result));
    }
  }, [step, result]);

  const analyze = (result) => {
    const first = result[0] > 2 ? 'I' : 'E';
    const second = result[1] > 2 ? 'N' : 'S';
    const third = result[2] > 2 ? 'F' : 'T';
    const fourth = result[3] > 2 ? 'J' : 'P';
    return `${first}${second}${third}${fourth}`
  }

  const handleGoResult = (type) => {
    history.push(`/${service}/result/${type}`);
  };

  const getStepLabel = (step) => {
    return step < 10 ? `0${step}` : step;
  }

  return (
    <>
      <div>
        <div css={numberStyleWrapper}>
          <div css={numberStyle}>
            <span css={currentNumberStyle}>{getStepLabel(step+1)}</span>
            <span css={{ opacity: 0.3 }}>/ {TOTAL_STEP}</span>
          </div>
        </div>
        {(step >= 0 && step < TOTAL_STEP) && (
          <Question question={questions[step]} handleSelect={handleSelect}/>
        )}
        {/*
        <div css={{ textAlign: 'center' }}>
          <Button onClick={() => handleGoResult('ISFP')}>결과보기</Button>
        </div>
        */}
      </div>
    </>
  );
};

export default TestQuestion;