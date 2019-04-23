import React from "react";
import ReactDOM from "react-dom";
import { Comentario } from "./Comentario.js";
import postData from "./PostData";

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
                {this.showComentarios(this.props.postId)}
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
  //função que pelo id do item do postdata devolve a lista de comentarios
  showComentarios = id => {
    const postComment = [];
    for (let i = 0; i < postData.length; i++) {
      if (postData[i].id == id) {
        for (let j = 0; j < postData[i].comentarios.length; j++) {
          postComment.push(
            <Comentario
              author={postData[i].comentarios[j][0]}
              date={postData[i].comentarios[j][1]}
              coment={postData[i].comentarios[j][2]}
            />
          );
        }
      }
    }
    return postComment;
  };
}
