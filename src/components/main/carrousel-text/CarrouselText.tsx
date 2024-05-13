import React from "react";
import "./CarrouselText.css";
import { Button } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Image } from "react-bootstrap";
enum BUTTON_VARIATION {
  LOGIN_BTN = "login",
  REQUEST_BTN = "cotizacion",
}

interface IStyles {
  position: string;
  color: string;
  sub_color: string;
}

interface IButton {
  type: string;
}
interface IImageText {
  title: string;
  subtitle: string;
  buttons: IButton[];
  styles: IStyles;
}

const handleLogin = () => {};

const handleUserRequest = () => {};

const getButtons = (buttons: IButton[]) => {
  return buttons.map((button, index) => {
    if (button.type === BUTTON_VARIATION.LOGIN_BTN) {
      return (
        <Button
          key={button.type + index}
          onClick={handleLogin}
          aria-label="login-btn"
          aria-haspopup="true"
          className="me-5 principal-btn"
        >
          <FaUser />
          <label style={{ paddingLeft: ".5rem" }}>Login</label>
        </Button>
      );
    }
    return (
      <Button
        key={button.type + index}
        className="second-btn transparent-bg"
        onClick={handleUserRequest}
        aria-label="user-request-btn"
      >
        <label>Cotización</label>
      </Button>
    );
  });
};

function CarrouselText({ title, subtitle, styles, buttons }: IImageText) {
  return (
    <div className="img-over-container">
      <>
        <h1 className="font-mid img-text-title" aria-label="title">
          {title}
        </h1>

        <h5
          className="font-low img-text-subtitle"
          style={{ color: styles.sub_color }}
        >
          {subtitle}
        </h5>
      </>

      <div className="btn-container"> {getButtons(buttons)} </div>
    </div>
  );
}
export default CarrouselText;
