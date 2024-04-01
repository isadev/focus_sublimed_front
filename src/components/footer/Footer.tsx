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
  mastercardIcon,
  visaIcon,
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
              <Image alt="contactUs" src={locationIcon}></Image>
              <span>Panama</span>
            </Col>
            <Col>
              <Image alt="callUs" src={phoneIcon}></Image>
              <span>11225565</span>
            </Col>
            <Col>
              <Image alt="mailUs" src={mailIcon}></Image>
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
                <Image alt="facebookPage" src={facebookIcon}></Image>
              </a>
            </Col>
            <Col xs={2} lg={1}>
              <a
                aria-label="twitter"
                href="https://twitter.com/focus_sublimed"
                target="_blank"
              >
                <Image alt="twitterPage" src={twitterIcon}></Image>
              </a>
            </Col>
            <Col xs={2} lg={1}>
              <a
                aria-label="instagram"
                href="https://instagram.com/focus_sublimed"
                target="_blank"
              >
                <Image alt="instagramPage" src={instagramIcon}></Image>
              </a>
            </Col>
          </Row>
        </Col>

        {/* Copyright */}
        <Row className="footer__second_row" xs={1} lg={2}>
          <Col xm={12} lg={{ span: 6 }} style={{ textAlign: "start" }}>
            <span>© 2024 Focus ecommerce. All Rights Reserved</span>
          </Col>
          <Col xm={12} lg={{ span: 6 }} style={{ textAlign: "end" }}>
            <Image alt="payWithVisa" src={visaIcon}></Image>
            <Image alt="payWithMastercard" src={mastercardIcon}></Image>
          </Col>
        </Row>
      </Row>
    </>
  );
}

export default Footer;
