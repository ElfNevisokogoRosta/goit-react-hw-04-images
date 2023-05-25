import React from 'react';
import { ImageElement } from '../ImageElement/ImageElement';
import { Image } from '../App';
import { List, Btn } from './ImageList.styled';
interface ImageListProps {
  images: Image[];
  total: number;
  pageHandler: (
    func: (
      arg0: number,
      arg1: React.Dispatch<React.SetStateAction<number>>
    ) => void
  ) => void;
  modalHandler: (
    func: (
      arg0: {
        largeImageURL: string;
        tags: string;
      },
      arg1: React.Dispatch<
        React.SetStateAction<{ largeImageURL: string; tags: string }>
      >
    ) => void
  ) => void;
}

export const ImagesList: React.FC<ImageListProps> = ({
  images,
  total,
  pageHandler,
  modalHandler,
}) => {
  const nextPage = (
    state: number,
    setState: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setState(prevState => prevState + 1);
  };
  console.log(total, images.length);
  return (
    <>
      <List className="list">
        {images &&
          images.map((image, id: number) => {
            return (
              <ImageElement
                key={`${image.id}-${id}`}
                image={image}
                modalHandler={modalHandler}
              />
            );
          })}
      </List>
      {total > images.length && images.length !== 0 ? (
        <Btn onClick={() => pageHandler(nextPage)}>Next page</Btn>
      ) : (
        ''
      )}
    </>
  );
};
