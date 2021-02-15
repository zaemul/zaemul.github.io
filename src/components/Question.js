import { css } from '@emotion/react';
import { Button } from '../components';

const containerStyle = css({
  textAlign: 'center',
  width: '80%',
  margin: '40px auto 0 auto',
});

const titleStyle = css({
  fontSize: 20,
  color: '#C8403E',
  whiteSpace: 'pre-line',
});

const optionWrapperStyle = css({
  marginTop: 33,
  marginBottom: 95,
});

const optBtnStyle = css({
  display: 'block',
  whiteSpace: 'pre-line',
  width: 260,
  minHeight: 80,
  padding: '18px 30px',
  margin: '15px auto',
  fontSize: 20,
});

const Question = ({ question, handleSelect }) => {
  const { title, options } = question || {};

  return (
    <div css={containerStyle}>
      <div css={titleStyle}>{title}</div>
      <div css={optionWrapperStyle}>
        <Button
          css={optBtnStyle}
          onClick={() => handleSelect(options[0].point)}
        >
          {options[0].content}
        </Button>
        <Button
          css={optBtnStyle}
          onClick={() => handleSelect(options[1].point)}
        >
          {options[1].content}
        </Button>
      </div>
    </div>
  );
};

export default Question;
