import React from 'react';
import { Image } from '../App';
interface ImageElementProps {
  image: Image;
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
export const ImageElement: React.FC<ImageElementProps> = ({
  image,
  modalHandler,
}) => {
  const { largeImageURL, tags } = image;
  const onClickHandler = (
    state: { largeImageURL: string; tags: string },
    setState: React.Dispatch<
      React.SetStateAction<{
        largeImageURL: string;
        tags: string;
      }>
    >
  ) => {
    setState({ largeImageURL: largeImageURL, tags: tags });
  };
  return (
    <>
      <li onClick={() => modalHandler(onClickHandler)}>
        <img src={image.webformatURL} alt={image.tags} />
      </li>
    </>
  );
};
