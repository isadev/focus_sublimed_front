import React from "react";
import "./ImageContainer.css";
import {
  camisaMobile,
  cuadernoMobile,
  ropaMobile,
  toallaMobile,
} from "../../api/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IImageText {
  imageName: string;
}

function ImageCarousel({ imageName }: IImageText) {
  const getImageByText = (imageName: string) => {
    let imgSource = "";
    switch (imageName) {
      case "t-shirt":
        imgSource = camisaMobile;
        break;
      case "towel":
        imgSource = toallaMobile;
        break;
      case "book":
        imgSource = cuadernoMobile;
        break;
      case "clothes":
        imgSource = ropaMobile;
        break;
      default:
        imgSource = camisaMobile;
        break;
    }
    return imgSource;
  };

  return (
    <>
      <LazyLoadImage
        src={getImageByText(imageName)}
        alt={imageName}
        placeholderSrc={imageName}
        className="image-container"
      ></LazyLoadImage>
    </>
  );
}

export default ImageCarousel;
