import React from "react";
import "./Footer.css";
import { Row, Col, Image } from "react-bootstrap";
import {
  locationIcon,
  phoneIcon,
  mailIcon,
  facebookIcon,
  instagramIcon,
  twitterIcon,
  mastercardIcon,
  visaIcon,
  logoIcon,
} from "../api/images";

function Footer() {
  return (
    <div className="footer__principal_row">
      <Row style={{ textAlign: "center" }}>
        <Col>
          <Image src={logoIcon} alt="logo" />
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3}>
        {/* Information */}
        <Col
          className="footer__principal_row__col_section"
          sm={12}
          md={6}
          lg={4}
        >
          <Row style={{ flexDirection: "column" }}>
            <Col>
              <p className="p-semi">Information</p>
              <span className="span-small-normal">My order</span>
            </Col>
            <Col>
              <span className="span-small-normal">Refunds</span>
            </Col>
            <Col>
              <span className="span-small-normal">Returns</span>
            </Col>

            <Col>
              <span className="span-small-normal">FAQ</span>
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
              <p className="p-semi">Contact us</p>
              <Image
                style={{ paddingRight: ".5em" }}
                alt="contactUs"
                src={locationIcon}
              ></Image>
              <span className="span-small-normal">Panama</span>
            </Col>
            <Col>
              <Image
                style={{ paddingRight: ".5em" }}
                alt="callUs"
                src={phoneIcon}
              ></Image>
              <span className="span-small-normal">11225565</span>
            </Col>
            <Col>
              <Image
                style={{ paddingRight: ".5em" }}
                alt="mailUs"
                src={mailIcon}
              ></Image>
              <span className="span-small-normal">example@mail.com</span>
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
              <p className="p-semi">Working time</p>
              <span className="span-small-normal">
                Monday to Friday: 8 am - 8 pm
              </span>
            </Col>
            <Col>
              <span className="span-small-normal">Saturday: 8 am - 3 pm</span>
            </Col>
            <Col>
              <span className="span-small-normal">Sunday: closed</span>
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
                rel="noreferrer"
              >
                <Image alt="facebookPage" src={facebookIcon}></Image>
              </a>
            </Col>
            <Col xs={2} lg={1}>
              <a
                aria-label="twitter"
                href="https://twitter.com/focus_sublimed"
                target="_blank"
                rel="noreferrer"
              >
                <Image alt="twitterPage" src={twitterIcon}></Image>
              </a>
            </Col>
            <Col xs={2} lg={1}>
              <a
                aria-label="instagram"
                href="https://instagram.com/focus_sublimed"
                target="_blank"
                rel="noreferrer"
              >
                <Image alt="instagramPage" src={instagramIcon}></Image>
              </a>
            </Col>
          </Row>
        </Col>

        {/* Copyright */}
        <Row
          className="footer__second_row"
          xs={1}
          lg={2}
          style={{ textAlign: "center" }}
        >
          <Col xm={12} lg={{ span: 6 }}>
            <span className="right-reserved span-small-semi">
              © 2024 Focus ecommerce. All Rights Reserved
            </span>
          </Col>
          <Col xm={12} lg={{ span: 6 }}>
            <Image alt="payWithVisa" src={visaIcon}></Image>
            <Image alt="payWithMastercard" src={mastercardIcon}></Image>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Footer;
