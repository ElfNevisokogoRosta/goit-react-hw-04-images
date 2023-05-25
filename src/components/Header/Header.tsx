import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { HeaderContainer, Form, Input, Btn } from './Header.styled';
interface HeaderProps {
  submitHandler: (
    func: (
      arg0: string,
      arg1: React.Dispatch<React.SetStateAction<string>>
    ) => void
  ) => void;
}

export const Header: React.FC<HeaderProps> = ({ submitHandler }) => {
  const [query, setQuery] = useState<string>('');
  const onSubmit = (
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (query === '') {
      toast.error('Enter search query');
      return;
    }
    setState(query);
    setQuery('');
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(pervState => e.target.value.trim());
    console.log(e.target.value);
  };
  return (
    <HeaderContainer>
      {' '}
      <Form
        action=""
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          submitHandler(onSubmit);
          e.currentTarget.reset();
        }}
      >
        <Input
          type="text"
          name="query"
          onChange={inputHandler}
          placeholder="Enter searh query"
        />
        <Btn type="submit">Search</Btn>
      </Form>
    </HeaderContainer>
  );
};
