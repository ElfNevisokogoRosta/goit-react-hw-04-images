import React, { useEffect } from 'react';
import { ModalWraper, ModalContainer, Img, Btn } from './Modal.styled';
interface ModalProps {
  imageInfo: {
    largeImageURL: string;
    tags: string;
  };
  closeModal: (
    func: (
      arg0: boolean,
      arg1: React.Dispatch<React.SetStateAction<boolean>>
    ) => void
  ) => void;
}
export const Modal: React.FC<ModalProps> = ({ imageInfo, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  const modalClose = (
    state: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setState(false);
  };
  return (
    <ModalWraper
      onClick={(e: React.PointerEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
          closeModal(modalClose);
        }
      }}
    >
      <ModalContainer>
        <Btn onClick={() => closeModal(modalClose)}>X</Btn>
        <Img src={imageInfo.largeImageURL} alt={imageInfo.tags} />
      </ModalContainer>
    </ModalWraper>
  );
};
