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
    this.home = this.home.bind(this); //função quue vai mudar o state da search de novo para neutro
  }

  render() {
    return (
      <div className="app">
        <Header filter={this.search} home={this.home} />
        <Body filter={this.state.filter} />
        <Footer />
      </div>
    );
  }

  //Função que retorna o valor da procura na caixa de texto e altera o state para filtrar os posts utilizados
  search() {
    let searchTxt = document.getElementById("searchBar").value;
    this.setState({ filter: searchTxt });
  }

  //Funação que "limpa" o filtro para fazer o display de todos os posts
  home() {
    this.setState({ filter: "" });
  }
}
