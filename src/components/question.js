import { css } from '@emotion/react';

const containerStyle = css({
  textAlign: 'center'
});

const titleStyle = css({
  fontSize: 20,
  marginTop: 40,
  fontWeight: 'bold'
});

const optionWrapperStyle = css({
  marginTop: 40
});

const optionStyle = css({
  display: 'block',
  textAlign: 'center',
  width: 300,
  padding: 10,
  margin: '20px auto',
  fontSize: 16,
  border: '1px solid #ccc',
  borderRadius: 10
});

const Question = ({ question, handleSelect }) => {
  const { idx, title, options } = question || {};

  return (
    <div css={containerStyle}>
      <div css={titleStyle}>{idx + 1}. {title}</div>
      <div css={optionWrapperStyle}>
        <button css={optionStyle} onClick={() => handleSelect(0)}>{options[0]}</button>
        <button css={optionStyle} onClick={() => handleSelect(1)}>{options[1]}</button>
      </div>
    </div>
  )
};

export default Question;