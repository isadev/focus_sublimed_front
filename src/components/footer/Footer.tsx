import React, { useState } from "react";
import "./Footer.css";
import { Row, Col, Image, Container } from "react-bootstrap";
import {
  locationIcon,
  phoneIcon,
  mailIcon,
  facebookIcon,
  instagramIcon,
  twitterIcon,
} from "./images";

function Footer() {
  return (
    <>
      <Row className="footer__principal_row" xs={1} sm={2} md={3}>
        {/* Information */}
        <Col
          className="footer__principal_row__col_section"
          sm={12}
          md={6}
          lg={4}
        >
          <Row style={{ flexDirection: "column" }}>
            <Col>
              <h3>Information</h3>
              <span>My order</span>
            </Col>
            <Col>
              <span>Refunds</span>
            </Col>
            <Col>
              <span>Returns</span>
            </Col>

            <Col>
              <span>FAQ</span>
            </Col>
          </Row>
        </Col>

        {/* Contact us */}
        <Col
          className="footer__principal_row__col_section"
          sm={12}
          md={6}
          lg={4}
        >
          <Row style={{ flexDirection: "column" }}>
            <Col>
              <h3>Contact us</h3>
              <Image src={locationIcon}></Image>
              <span>Panama</span>
            </Col>
            <Col>
              <Image src={phoneIcon}></Image>
              <span>11225565</span>
            </Col>
            <Col>
              <Image src={mailIcon}></Image>
              <span>example@mail.com</span>
            </Col>
          </Row>
        </Col>

        {/* Working Time */}
        <Col
          className="footer__principal_row__col_section"
          sm={12}
          md={6}
          lg={4}
        >
          <Row style={{ flexDirection: "column" }}>
            <Col>
              <h3>Working time</h3>
              <span>Monday to Friday: 8 am - 8 pm</span>
            </Col>
            <Col>
              <span>Saturday: 8 am - 3 pm</span>
            </Col>
            <Col>
              <span>Sunday: closed</span>
            </Col>
          </Row>
        </Col>

        {/* Social Media */}
        <Col sm={12} md={6} lg={{ span: 12 }}>
          <Row className="footer__social_media">
            <Col xs={2} lg={1}>
              <a
                aria-label="facebook"
                href="https://facebook.com/focus_sublimed"
                target="_blank"
              >
                <Image src={facebookIcon}></Image>
              </a>
            </Col>
            <Col xs={2} lg={1}>
              <a
                aria-label="twitter"
                href="https://twitter.com/focus_sublimed"
                target="_blank"
              >
                <Image src={twitterIcon}></Image>
              </a>
            </Col>
            <Col xs={2} lg={1}>
              <a
                aria-label="instagram"
                href="https://instagram.com/focus_sublimed"
                target="_blank"
              >
                <Image src={instagramIcon}></Image>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
