import React, { useState } from "react";
import "./ImageCarousel.css";
import {
  camisaMobile,
  cuadernoMobile,
  ropaMobile,
  toallaMobile,
} from "../../../api/images";
import { Image } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IImageText {
  text: string;
  imageName: string;
}

function ImageCarousel({ text }: IImageText) {
  const getImageByText = (imageName: string) => {
    let imgSource = camisaMobile;
    switch (imageName) {
      case "camisa":
        imgSource = camisaMobile;
        break;

      default:
        break;
    }
    return imgSource;
  };

  return (
    <>
      <LazyLoadImage
        src={getImageByText(text)}
        alt={text}
        placeholderSrc={text}
      ></LazyLoadImage>
      {/* <Image src={cuadernoMobile}></Image> */}

      {/* <Image src={ropaMobile}>{text}</Image>
      <Image src={toallaMobile}>{text}</Image> */}
    </>
  );
}

export default ImageCarousel;
