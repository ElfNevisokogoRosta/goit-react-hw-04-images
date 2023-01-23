import React from 'react';
import { Img, ListElement } from './GalleryItem.styled';
const GalleryItem = ({ images, func }) => {
  return images.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <ListElement
        key={id}
        onClick={() => {
          func((state, setState) => {
            setState({ largeImageURL, tags });
          });
        }}
      >
        <Img
          src={webformatURL}
          alt={tags}
          largeImageURL={largeImageURL}
          loading="lazy"
        />
      </ListElement>
    );
  });
};

export default GalleryItem;
