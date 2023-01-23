import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { ButtonForm, Header, Input } from './Form.styled';

const Form = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState(null);
  const inputHandler = e => {
    setSearchQuery(state => e.target.value);
  };
  const submitHandler = (state, setState) => {
    setState(state => searchQuery);
  };
  return (
    <Header>
      <div className="container container-header">
        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit(submitHandler);
          }}
        >
          <Input
            onChange={inputHandler}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <ButtonForm>
            <FiSearch size={`24px`} vertical-align={`middle`} />
          </ButtonForm>
        </form>
      </div>
    </Header>
  );
};

export default Form;
