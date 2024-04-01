import React, { useState } from "react";
import "./Header.css";
import Login from "./login/Login";
import logoPng from "./login/images/logo.png";
import loginIcon from "./login/images/login_icon.png";
import { Navbar, Nav, Row, Col, Image, Container } from "react-bootstrap";

function Header() {
  const [jwt, setJwt] = useState("");
  const [hideLogin, setHideLogin] = useState(true);

  const saveJwtLogin = (jwt: string) => {
    console.log(`El jwt ${jwt}`);
    setJwt(jwt);
  };

  const handleClickLogin = () => {
    setHideLogin(!hideLogin ? true : false);
  };

  return (
    <>
      <Row className="header__principal_row">
        {/* Hamburguer menu */}
        <Col md={{ order: "2" }}>
          <Navbar collapseOnSelect expand="md">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="header__space_evenly">
              <li>About us</li>
              <li>FAQs</li>
              <li>Contact us</li>
            </Navbar.Collapse>
          </Navbar>
        </Col>

        {/* Logo */}
        <Col md={{ order: "1" }} className="text-left">
          <Image id="logo" src={logoPng} alt="logo" height="15px" />
        </Col>

        {/* Sign in */}
        <Col md={{ order: "3" }} className="text-end">
          <label htmlFor="sign_in">
            Sign in
            <Image
              id="loginIcon"
              src={loginIcon}
              alt="loginIcon"
              roundedCircle
              onClick={() => handleClickLogin()}
            />
          </label>
        </Col>
      </Row>

      {!hideLogin ? <Login saveJwt={saveJwtLogin} /> : ""}
    </>
  );
}

export default Header;
