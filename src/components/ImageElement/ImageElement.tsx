import React from 'react';
import { Image } from '../App';
import { ImgContainer, Img } from './ImageElement.styled';
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
      <ImgContainer onClick={() => modalHandler(onClickHandler)}>
        <Img src={image.webformatURL} alt={image.tags} />
      </ImgContainer>
    </>
  );
};
