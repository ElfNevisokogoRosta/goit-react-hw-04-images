import React, { useState, useEffect } from 'react';
import Button from 'components/Button/Button';
import { List, Text } from './Gallery.styled';
import useImagesSearch from 'services/useImagesSearch';
import Loader from 'components/Loader/Loader';
import GalleryItem from '../GalleryItem/GalleryItem';

const Gallery = ({ searchQuery, func }) => {
  const [query, setQuery] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);
  const { loading, error, images, hasMore } = useImagesSearch(
    query,
    pageNumber
  );

  const pageHandler = func => {
    func(pageNumber, setPageNumber);
  };

  if (images.length > 0) {
    return (
      <div className="container">
        <List>
          <GalleryItem images={images} func={func} />
        </List>
        {loading ? <Loader /> : ''}
        {hasMore ? <Button onClick={pageHandler} /> : ''}
      </div>
    );
  }

  if (error || images.length === 0) {
    return <Text>Cant find images with your request</Text>;
  }
};

export default Gallery;
