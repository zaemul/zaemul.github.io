import { useState } from 'react';
import { css } from '@emotion/react';
import { questions } from '../question';
import { Question } from '../components';

const contentStyle = css({
  position: 'relative',
  height: '500px'
});

const introStyle = css({
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
});

const startButtonStyle = css({
  marginTop: 30
});

const buttonGroupStyle = css({
  position: 'absolute',
  bottom: 20,
  display: 'flex',
  justifyContent: 'center',
  width: '100%'
});

const buttonStyle = css({
  marginRight: 3
});

const TOTAL_STEP = 12;

const Content = () => {
  const [step, setStep] = useState(-1);

  const handleReset = () => setStep(-1);

  const handleNext = () => {
    if (step <= TOTAL_STEP) {
      setStep(step + 1);
    }
  };

  const handleSelect = (ans) => {
    /* Record answer */
    handleNext();
  };

  return (
    <div css={contentStyle}>
      {step === -1 && (
        <div css={introStyle}>
          <button onClick={handleNext} css={startButtonStyle}>시작하기</button>
        </div>
      )}
      {(step >= 0 && step < TOTAL_STEP) && (
        <div>
          <Question question={questions[step]} handleSelect={handleSelect}/>
        </div>
      )}
      {step === TOTAL_STEP && (
        <div>
          Result
          <div css={buttonGroupStyle}>
            {/*<button css={buttonStyle}>링크 복사</button>*/}
            <button onClick={handleReset} css={buttonStyle}>다시하기</button>
            {/*<button css={buttonStyle}>공유하기</button>*/}
            {/*<button css={buttonStyle}>이미지 저장하기</button>*/}
          </div>
        </div>
      )}
    </div>
  )
};

export default Content;