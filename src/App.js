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
    this.state = { filter: "" };
    this.search = this.search.bind(this); //função que é passada como prop para actualizar o estado do compoente pai
  }
  render() {
    console.log("App");
    return (
      <div class="App" className="app">
        <Header filter={this.search} />
        <Body filter={this.state.filter} />
        <Footer />
      </div>
    );
  }
  search() {
    let searchTxt = document.getElementById("searchBar").value;
    this.setState({ filter: searchTxt });
  }
}
