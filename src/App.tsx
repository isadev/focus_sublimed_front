import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="App">
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
