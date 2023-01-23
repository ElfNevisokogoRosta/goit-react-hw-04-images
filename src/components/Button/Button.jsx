import React from 'react';
import { LoadMoreBtn, BtnWraper } from './Button.styled';

const Button = ({ onClick }) => {
  const clickHandler = (state, setState) => {
    setState(state + 1);
  };
  return (
    <div className="container">
      <BtnWraper>
        <LoadMoreBtn
          onClick={() => {
            onClick(clickHandler);
          }}
        >
          Load more
        </LoadMoreBtn>
      </BtnWraper>
    </div>
  );
};

export default Button;
