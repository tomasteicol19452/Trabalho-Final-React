import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
//=== React Components ===
import { Header } from "./components/Header.js";
import { Body } from "./components/Body.js";
import { Footer } from "./components/Footer.js";
//========================

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.searched = this.searched;
  }
  render() {
    console.log("App");
    return (
      <div class="App" className="app">
        <Header searched={this.searched} />
        <Body />
        <Footer />
      </div>
    );
  }
}
