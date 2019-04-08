import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";
//=== React Components ===
import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Footer } from "./Footer.js";
//========================

export class App extends React.Component {
  render() {
    return (
      <div class="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}
