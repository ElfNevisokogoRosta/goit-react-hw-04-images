import React, { useState } from 'react';
import Form from './Form/Form';
import Gallery from './Gallery/Gallery';
import Modal from './Modal/Modal';
const App = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const onSubmit = func => {
    func(searchQuery, setSearchQuery);
  };
  const onImageClick = func => {
    func(modalData, setModalData);
    setShowModal(true);
  };
  const onModalClose = func => {
    func(showModal, setShowModal);
  };
  return (
    <div>
      <Form onSubmit={onSubmit} />
      {!searchQuery ? (
        <div className="container placeholder">Find some images</div>
      ) : (
        <Gallery searchQuery={searchQuery} func={onImageClick} />
      )}
      {showModal ? <Modal data={modalData} func={onModalClose} /> : ''}
    </div>
  );
};

export default App;
