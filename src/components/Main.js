import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

export class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayImagens: [
        {
          autor: "Author",
          source: "https://recipes.timesofindia.com/photo/53110049.cms",
          data: "04/08/2019",
          likes: 0,
          comentarios: 0
        }
      ]
    };
  }

  render() {
    return (
      <div className="mainPage">
        <table>
          <tr>
            <td colSpan="2">
              <h3>Author</h3>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <img src="https://recipes.timesofindia.com/photo/53110049.cms" />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <p>04/08/2019</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>30 Likes</p>
            </td>
            <td>
              <p className="nComentarios">1 Comentario(s)</p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
