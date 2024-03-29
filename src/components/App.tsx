/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { usePixabayAPI } from '../utils/usePixabayAPI';
import { Modal } from './Modal/Modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImagesList } from './ImagesList/ImagesList';
import { Header } from './Header/Header';
import { Container, SearchFor, MainTitle } from './App.styled';
import { Triangle } from 'react-loader-spinner';

export interface Image {
  id: string;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [modal, setModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<{
    largeImageURL: string;
    tags: string;
  }>({ largeImageURL: '', tags: '' });
  const submitHandler = (
    func: (
      arg0: string,
      arg1: React.Dispatch<React.SetStateAction<string>>
    ) => void
  ) => {
    func(query, setQuery);
    setPage(1);
  };
  useEffect(() => {
    setImages([]);
  }, [query]);
  const [response, total, loading, error] = usePixabayAPI(query, page);
  useEffect(() => {
    if (response.length === 0) {
      return;
    }
    setImages(prevState => [...prevState, ...response]);
  }, [response]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    if ((total === 0 && !loading) || query.trim() === '') {
      toast.error("We couldn't find any results for this query");
    } else if (!loading) {
      toast.success(`We found ${total} results`);
    }
  }, [total]);
  const modalHandler = (
    func: (
      arg0: {
        largeImageURL: string;
        tags: string;
      },
      arg1: React.Dispatch<
        React.SetStateAction<{ largeImageURL: string; tags: string }>
      >
    ) => void
  ) => {
    setModal(true);
    func(modalContent, setModalContent);
  };
  const pageHandler = (
    func: (
      arg0: number,
      arg1: React.Dispatch<React.SetStateAction<number>>
    ) => void
  ) => {
    func(page, setPage);
  };
  const closeModal = (
    func: (
      arg0: boolean,
      arg1: React.Dispatch<React.SetStateAction<boolean>>
    ) => void
  ) => {
    func(modal, setModal);
  };
  if (error) {
    return <>Something going wrong</>;
  }
  return (
    <Container>
      <MainTitle>Image searcher</MainTitle>
      <Header submitHandler={submitHandler} />
      {query !== '' && <SearchFor>You search {query}</SearchFor>}

      <ImagesList
        images={images}
        total={total}
        pageHandler={pageHandler}
        modalHandler={modalHandler}
      />
      {loading && query !== '' ? <Triangle /> : ''}
      {modal && <Modal imageInfo={modalContent} closeModal={closeModal} />}
      <ToastContainer />
    </Container>
  );
};

export default App;
