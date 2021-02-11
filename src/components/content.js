import { useState } from 'react';
import { css } from '@emotion/react';
import { questions } from '../question';
import { Question } from '../components';
import { useHistory } from 'react-router-dom';

const contentStyle = css({
  position: 'relative',
  height: 300
});

const TOTAL_STEP = 12;

const Content = () => {
  const history = useHistory();
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step < TOTAL_STEP - 1) {
      setStep(step + 1);
    } else if (step === TOTAL_STEP - 1) {
      history.push('/tteokbokki/result');
    }
  };

  const handleSelect = (ans) => {
    /* Record answer */
    handleNext();
  };

  return (
    <div css={contentStyle}>
      {(step >= 0 && step < TOTAL_STEP) && (
        <Question question={questions[step]} handleSelect={handleSelect}/>
      )}
    </div>
  )
};

export default Content;