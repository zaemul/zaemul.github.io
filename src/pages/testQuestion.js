import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { css } from '@emotion/react';
import { questions } from '../question';
import { Button, Header, Question } from '../components';

const contentStyle = css({
  position: 'relative',
  height: 300
});

const TOTAL_STEP = 12;

const TestQuestion = () => {
  const history = useHistory();
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
    history.push(`/tteokbokki/result/${type}`);
  };

  return (
    <>
      <Header />
      <div css={contentStyle}>
        {(step >= 0 && step < TOTAL_STEP) && (
          <Question question={questions[step]} handleSelect={handleSelect}/>
        )}
        <div css={{ textAlign: 'center' }}>
          <Button onClick={handleGoResult}>결과보기</Button>
        </div>
      </div>
    </>
  );
};

export default TestQuestion;