import React from "react";
import ReactDOM from "react-dom";

//Componente que cira a caixa de comentarios
export class Comentario extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.author}</h4>
        <p>{this.props.coment}</p>
        <p>{this.props.date}</p>
      </div>
    );
  }
}
