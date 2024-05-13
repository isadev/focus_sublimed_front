import React from "react";
import "./SuccessCase.css";
import Carousel from "react-bootstrap/Carousel";
import LayoutCarrousel from "../carrousel/Carrousel";
import CarrouselText from "../carrousel-text/CarrouselText";

function SuccessCase() {
  return (
    <>
      <Carousel interval={null} controls={false}>
        <Carousel.Item>
          <CarrouselText
            title="Diseña tu camisa"
            subtitle="Conviertete en alguien con diseños únicos"
            styles={{
              position: "absolute",
              color: "white",
              sub_color: "white",
            }}
            buttons={[{ type: "login" }, { type: "cotizacion" }]}
          />
          <LayoutCarrousel imageName="t-shirt" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <CarrouselText
            title="Crea tu juego de toalla"
            subtitle="Sorprende a tu pareja con estas toallas personalizadas"
            buttons={[{ type: "login" }, { type: "cotizacion" }]}
            styles={{
              position: "absolute",
              color: "black",
              sub_color: "white",
            }}
          />
          <LayoutCarrousel imageName="towel" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <CarrouselText
            title="Imagina tus cuadernos"
            subtitle="Transformalos con tu propio estilo"
            buttons={[{ type: "login" }, { type: "cotizacion" }]}
            styles={{ position: "absolute", color: "white", sub_color: "" }}
          />
          <LayoutCarrousel imageName="book" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <CarrouselText
            title="Profesionaliza tus accesorios"
            subtitle="Viste a tus colegas con el logo de tu empresa"
            buttons={[{ type: "login" }, { type: "cotizacion" }]}
            styles={{ position: "absolute", color: "white", sub_color: "" }}
          />
          <LayoutCarrousel imageName="clothes" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default SuccessCase;
