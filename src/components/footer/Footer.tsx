import React, { useState } from "react";
import "./Footer.css";
import { Row, Col, Container } from "react-bootstrap";
import FooterBlocks from "./footer-blocks/Footer-blocks";
import {
  locationIcon,
  phoneIcon,
  mailIcon,
  facebookcon,
  instagramIcon,
  twitterIcon,
} from "./images";
import SocialMediaBlock from "./social-media/Social-media";

export interface DescriptionLabels {
  text?: string;
  icon?: string;
  link?: string;
  joinLinkImg?: boolean;
}

export interface DescriptionBlock {
  sectionTitle?: string;
  labels: Array<DescriptionLabels>;
}

const sections: Array<DescriptionBlock> = [
  {
    sectionTitle: "Information",
    labels: [
      { text: "My order" },
      { text: "Refunds" },
      { text: "Returns" },
      { text: "FAQ" },
    ],
  },
  {
    sectionTitle: "Contact us",
    labels: [
      { text: "Panama", icon: locationIcon },
      { text: "11225565", icon: phoneIcon },
      { text: "example@mail.com", icon: mailIcon },
    ],
  },
  {
    sectionTitle: "Working time",
    labels: [
      { text: "Monday to Friday: 8 am - 8 pm" },
      { text: "Saturday: 8 am - 3 pm" },
      { text: "Sunday: closed" },
    ],
  },
];

const socialMedia = [
  {
    labels: [
      {
        icon: facebookcon,
        link: "https://facebook.com/focus_sublimed",
        joinLinkImg: true,
      },
      {
        icon: instagramIcon,
        link: "https://instagram.com/focus_sublimed",
        joinLinkImg: true,
      },
      {
        icon: twitterIcon,
        link: "https://twitter.com/focus_sublimed",
        joinLinkImg: true,
      },
    ],
  },
];

function Footer() {
  return (
    <Container fluid>
      <Row
        row-cols-1
        row-cols-sm-2
        row-cols-md-3
        /* style={{ position: "fixed", bottom: 0 }} */
      >
        {sections.map((section) => (
          <Col sm={12} md={6} lg={4}>
            <FooterBlocks
              labels={section.labels}
              sectionTitle={section.sectionTitle}
            ></FooterBlocks>
          </Col>
        ))}
        {socialMedia.map((social) => (
          <SocialMediaBlock labels={social.labels}></SocialMediaBlock>
        ))}
      </Row>
    </Container>
  );
}

export default Footer;
