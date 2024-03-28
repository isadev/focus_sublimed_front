import React from "react";
import "./Social-media.css";
import { DescriptionBlock, DescriptionLabels } from "../Footer";
import { Image, Col } from "react-bootstrap";

const imagesWithLink = (labelText: DescriptionLabels) => {
  return (
    <a href={labelText.link} target="_blank">
      <Image src={labelText.icon}></Image>
    </a>
  );
};

function SocialMediaBlock({ labels }: DescriptionBlock) {
  return (
    <>
      {labels.map((labelText: DescriptionLabels) => {
        return (
          <Col xs={1} style={{ textAlign: "center" }}>
            {imagesWithLink(labelText)}
          </Col>
        );
      })}
    </>
  );
}

export default SocialMediaBlock;
