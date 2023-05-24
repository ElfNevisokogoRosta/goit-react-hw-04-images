import React from 'react';
interface ModalProps {
  imageInfo: {
    largeImageURL: string;
    tags: string;
  };
}
export const Modal: React.FC<ModalProps> = ({ imageInfo }) => {
  return (
    <div>
      <img src={imageInfo.largeImageURL} alt={imageInfo.tags} />
    </div>
  );
};
