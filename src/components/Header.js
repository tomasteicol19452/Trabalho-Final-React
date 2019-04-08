import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

export class Header extends React.Component {
  render() {
    return (
      <div className="pageHeader">
        <h1 className="pageLogo">IPT-Gram</h1>
        <div className="searchBarDiv">
          <input className="searchBar" type="text" placeholder="Search" />
          <button className="btn-search" type="button">
            🔎
          </button>
        </div>
      </div>
    );
  }
}
//react.CreateElemente(div, classname="pageheader", null)
