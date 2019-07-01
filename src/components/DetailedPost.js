import React from "react";
import ReactDOM from "react-dom";
import { Comentario } from "./Comentario.js";

export class DetailedPost extends React.Component {
  render() {
    return (
      <div className="detailBox">
        <table>
          <tr>
            <td rowspan="2" colspan="2">
              <img
                onClick={() => this.props.return()}
                src={this.props.imgUrl}
              />
            </td>
            <td>
              <h3>Autor: {this.props.author}</h3>
            </td>
            <td>
              <h3>{this.props.date}</h3>
            </td>
          </tr>
          <tr colspan="2">
            <td>
              <div id="descricaoPost" className="desc">
                {this.props.descricao}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h4>{this.props.nComentarios} Comentarios</h4>
            </td>
            <td>
              <h4>{this.props.nLikes} Likes</h4>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div className="comments">
                {this.showComentarios(this.props.comentarios)}
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
  //função que pelo id do item do postdata devolve a lista de comentarios
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
