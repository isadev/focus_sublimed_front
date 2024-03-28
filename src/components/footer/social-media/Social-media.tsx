import React from "react";
import "./Social-media.css";
import { DescriptionBlock, DescriptionLabels } from "../Footer";
import { Image, Col, Row } from "react-bootstrap";

const imagesWithLink = (labelText: DescriptionLabels) => {
  return (
    <a href={labelText.link} target="_blank">
      <Image src={labelText.icon}></Image>
    </a>
  );
};

function SocialMediaBlock({ labels }: DescriptionBlock) {
  return (
    <Row>
      {labels.map((labelText: DescriptionLabels) => {
        return <Col xs={2}>{imagesWithLink(labelText)}</Col>;
      })}
    </Row>
  );
}

export default SocialMediaBlock;
