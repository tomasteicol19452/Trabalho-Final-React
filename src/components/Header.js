import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { search: "" };
  }
  render() {
    console.log("Header");
    console.log(this.state.search);
    return (
      <div className="pageHeader">
        <h1 className="pageLogo">IPT-Gram</h1>
        <div className="searchBarDiv">
          <input
            className="searchBar"
            type="text"
            id="searchBar"
            placeholder="Search"
          />
          <button
            className="btn-search"
            type="button"
            onClick={evt => this.updateSearch(evt)}
          >
            🔎
          </button>
        </div>
      </div>
    );
  }
  updateSearch(evt) {
    let searchTxt = document.getElementById("searchBar").value;
    this.setState({ search: searchTxt });
  }
}
