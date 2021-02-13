import { css } from '@emotion/react';

const defaultBtnStyle = css({
  width: 180,
  minHeight: 60,
  fontSize: 20,
  padding: '10px 15px',
  color: '#fff',
  backgroundColor: '#DA4C4A',
  borderRadius: 40,
  border: '2px solid #000',
  whiteSpace: 'normal',
  '&:active': {
    backgroundColor: '#B04140'
  }
});

const Button = (props) => {
  return <button css={defaultBtnStyle} {...props}></button>
};

export default Button;