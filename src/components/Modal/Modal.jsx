import React from 'react';
import { Backdrop, ModalBody } from './Modal.styled';

const Modal = ({ data, func }) => {
  return (
    <Backdrop
      onClick={() => {
        func((state, setState) => {
          setState(false);
        });
      }}
    >
      <ModalBody>
        <img src={data.largeImageURL} alt={data.tags} loading="lazy" />
      </ModalBody>
    </Backdrop>
  );
};
export default Modal;
