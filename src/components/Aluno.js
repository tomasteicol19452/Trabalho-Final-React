import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

//componente onde se vão colocar os aluno que participara no trabalho
export class Aluno extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <td>
              <img
                className="aluno"
                align="left"
                src={this.props.source}
                placeholder="student image"
              />
            </td>
            <td>
              <p>
                {this.props.nome} || Aluno nº{this.props.nAluno}
              </p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
