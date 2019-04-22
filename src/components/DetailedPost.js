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
              <h3>Autor:{this.props.author}</h3>
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
                <Comentario
                  author="João"
                  coment="Isto é um teste!"
                  date="10/08/2019"
                />
                <Comentario
                  author="João"
                  coment="Isto é um teste!"
                  date="10/08/2019"
                />
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
