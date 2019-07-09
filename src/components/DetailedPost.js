import React from "react";
import ReactDOM from "react-dom";
import { Comentario } from "./Comentario.js";

export class DetailedPost extends React.Component {
  render() {
    return (
      <div className="detailBox">
        <img
          className="imgDetails"
          onClick={() => this.props.return()}
          src={this.props.imgUrl}
        />

        <div className="detailBoxTop">
          <div className="autorDesc">
            <h3>{this.props.author}</h3>
          </div>

          <div className="dateDesc">
            <h3>{this.props.date}</h3>
          </div>

          <div id="descricaoPost" className="desc">
            {this.props.descricao}
          </div>
        </div>

        <div className="detailBoxBot">
          <div className="likesLogo">
            <h4>{this.props.nLikes} ❤️ </h4>
          </div>

          <div className="comentariosLogo">
            <h4>{this.props.nComentarios} 💬</h4>
          </div>

          <div className="comments">
            {this.showComentarios(this.props.comentarios)}
          </div>
        </div>
      </div>
    );
  }

  //função que retorna os mentarios do postdata do postdata devolve a lista de comentarios
  showComentarios = comentarios => {
    const postComment = [];
   
    for (let j = 0; j < comentarios.length; j++) {
      postComment.push(
        <Comentario
          author={comentarios[j][0]}
          date={comentarios[j][1]}
          coment={comentarios[j][2]}
        />
      );
    }
    return postComment;
  };
}
