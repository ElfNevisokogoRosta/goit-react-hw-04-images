import React from 'react';
import { ImageElement } from '../ImageElement/ImageElement';
import { Image } from '../App';
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
  return (
    <ul className="list">
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
      {total > images.length ? (
        <button onClick={() => pageHandler(nextPage)}>Next page</button>
      ) : (
        ''
      )}
    </ul>
  );
};
