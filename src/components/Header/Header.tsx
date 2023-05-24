import React, { useState } from 'react';
import { toast } from 'react-toastify';

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
  };
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(pervState => e.target.value.trim());
  };
  return (
    <div>
      {' '}
      <form
        action=""
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          submitHandler(onSubmit);
        }}
      >
        <input type="text" name="query" onChange={inputHandler} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
