import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
