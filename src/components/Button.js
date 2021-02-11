import { css } from '@emotion/react';

const defaultBtnStyle = css({
  padding: '10px 15px',
  color: '#fff',
  backgroundColor: '#194bdc',
  borderRadius: 5,
  border: '1px solid #194bdc',
  '&:hover': {
    backgroundColor: '#1745CA'
  }
});

const Button = (props) => {
  return <button css={defaultBtnStyle} {...props}></button>
};

export default Button;