import React, { useState } from "react";
import "./Header.css";
import Login from "./login/Login";
import logoPng from "./login/images/logo.png";
import loginIcon from "./login/images/login_icon.png";
import { Navbar, Nav, Row, Col, Image, Container } from "react-bootstrap";

function Header() {
  const [jwt, setJwt] = useState("");

  const saveJwtLogin = (jwt: string) => {
    console.log(`El jwt ${jwt}`);
    setJwt(jwt);
  };

  return (
    <Container fluid>
      <Row>
        <Col md={{ order: "2" }}>
          <Navbar collapseOnSelect expand="md">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="separate-items">
              <li>About us</li>
              <li>FAQs</li>
              <li>Contact us</li>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col md={{ order: "1" }} className="text-center">
          <Image id="logo" src={logoPng} alt="logo" height="15px" />
        </Col>
        <Col md={{ order: "3" }} className="text-end">
          <Image id="loginIcon" src={loginIcon} alt="loginIcon" roundedCircle />
        </Col>
      </Row>
      {/* <div className="header"> */}
      {/* Hamburguer menu */}
      {/* Logo */}
      {/* Sign in */}

      {/* <Login saveJwt={saveJwtLogin} /> */}
      {/* </div> */}
    </Container>
  );
}

export default Header;
