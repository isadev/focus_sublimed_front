import React, { useState } from "react";
import "./Header.css";
import Login from "./login/Login";
import logoPng from "./login/images/logo.png";
import loginIcon from "./login/images/login_icon.png";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Header() {
  const [jwt, setJwt] = useState("");

  const saveJwtLogin = (jwt: string) => {
    console.log(`El jwt ${jwt}`);
    setJwt(jwt);
  };

  return (
    // <div className="pos-f-t">
    //   <div className="collapse" id="navbarToggleExternalContent">
    //     <div className="bg-dark p-4">
    //       <h5 className="text-white h4">Collapsed content</h5>
    //       <span className="text-muted">Toggleable via the navbar brand.</span>
    //     </div>
    //   </div>
    //   <nav className="navbar navbar-dark bg-dark">
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarToggleExternalContent"
    //       aria-controls="navbarToggleExternalContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //   </nav>
    // </div>
    <Container fluid>
      <Row>
        <Col xs={4}>
          <nav className="navbar navbar-dark bg-dark">
            <button className="navbar-toggler">
              <span className="navbar-toggler-icon"></span>
            </button>
          </nav>
          {/* <a className="hamburguer_menu">Hamburguer</a> */}
        </Col>
        <Col xs={4} className="text-center">
          <Image id="logo" src={logoPng} alt="logo" height="15px" />
        </Col>
        <Col xs={4} className="text-end">
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
