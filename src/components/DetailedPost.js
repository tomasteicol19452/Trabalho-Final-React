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
              <img src="https://recipes.timesofindia.com/photo/53110049.cms" />
            </td>
            <td>
              <h3>Autor:{this.props.autor}</h3>
            </td>
            <td>
              <h3>Data</h3>
            </td>
          </tr>
          <tr colspan="2">
            <td>
              <div id="descricaoPost" className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                mattis mauris eget finibus laoreet. In ultrices tortor at massa
                venenatis, in vehicula sem commodo. Etiam dapibus vestibulum sem
                at mattis. Vestibulum semper nec libero vitae tempus. Nulla id
                hendrerit leo. Fusce vel est risus. Vestibulum laoreet arcu
                nisl, euismod ullamcorper ante cursus a.{this.props.descricao}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <h4>{this.props.nComentarios} Comentarios</h4>
            </td>
            <td>
              <h4>{this.props.likes} Likes</h4>
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
