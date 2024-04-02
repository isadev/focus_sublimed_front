import React, { useState } from "react";
import "./SuccessCase.css";
import Carousel from "react-bootstrap/Carousel";
import ImageCarousel from "./image-carousel/ImageCarousel";

function SuccessCase() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <ImageCarousel text="First slide" imageName="camisa" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default SuccessCase;
