import React, { useState } from "react";
import "./Footer-blocks.css";
import { DescriptionBlock, DescriptionLabels } from "../Footer";
import { Row, Col, Image } from "react-bootstrap";

const getBlockLine = (labelText: DescriptionLabels) => {
  const elementBlock = [];

  if (labelText.icon) {
    let img = <Image src={labelText.icon}></Image>;

    if (labelText.joinLinkImg && labelText.link) {
      img = (
        <a href={labelText.link} target="_blank">
          <Image src={labelText.icon}></Image>
        </a>
      );
    }
    elementBlock.push(img);
  }
  elementBlock.push(<span>{labelText.text}</span>);
  if (!labelText.joinLinkImg && labelText.link) {
    elementBlock.push(<a href={labelText.link}>{labelText.link}</a>);
  }

  return elementBlock;
};

function FooterBlocks({ sectionTitle, labels }: DescriptionBlock) {
  return (
    <div>
      {sectionTitle ? <h3>{sectionTitle}</h3> : ""}
      {labels.map((labelText: DescriptionLabels) => {
        return (
          <Row>
            <Col>{getBlockLine(labelText)}</Col>
          </Row>
        );
      })}
    </div>
  );
}

export default FooterBlocks;
