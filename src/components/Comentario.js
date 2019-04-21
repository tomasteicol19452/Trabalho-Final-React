import React from "react";
import ReactDOM from "react-dom";

export class Comentario extends React.Component {
  render() {
    return (
      <div>
        <h5>{this.props.author}</h5>
        <p>{this.props.coment}</p>
        <p>{this.props.date}</p>
      </div>
    );
  }
}
