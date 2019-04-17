import React from "react";
import ReactDOM from "react-dom";

export class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    console.log("Post");
    return (
      <div className="post">
        <table>
          <tr>
            <td colSpan="2">
              <h3>{this.props.author}</h3>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <img src={this.props.imgUrl} />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <p>{this.props.date}</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>{this.props.nLikes} Likes</p>
            </td>
            <td>
              <p className="nComentarios">
                {this.props.nComentarios} Comentários
              </p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
