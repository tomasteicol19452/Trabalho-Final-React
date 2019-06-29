import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("Header");
    return (
      <div className="pageHeader">
        <h1 onClick={this.props.home} className="pageLogo">
          IPT-Gram
        </h1>
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
            onClick={this.props.filter}
          >
            🔎
          </button>
        </div>
      </div>
    );
  }
}
