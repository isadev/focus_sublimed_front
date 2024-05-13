import React from "react";
import "./Main.css";
import SuccessCase from "./success-case/SuccessCase";

function Main() {
  return (
    <>
      <div className="carousel">
        <SuccessCase />
      </div>
      <div className="container main"> cualquier texto</div>
    </>
  );
}

export default Main;
