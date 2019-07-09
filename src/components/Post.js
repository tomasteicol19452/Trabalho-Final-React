import React from "react";
import ReactDOM from "react-dom";

//Componente que Cria a primeira view de cada post
export class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className="post">
        <h2 class="autor">{this.props.author}</h2>

        <img
          src={this.props.imgUrl}
          onClick={() => this.props.show(this.props.postId)}
        />

        <p className="date">{this.props.date}</p>

        <div class="likesComments">
          <p className="likes">{this.props.nLikes} ❤️</p>

          <p
            onClick={() => this.props.show(this.props.postId)}
            className="nComentarios"
          >
            {this.props.nComentarios} 💬
          </p>
        </div>

        <div className="colorBot">
          <h1> </h1>
        </div>
      </div>
    );
  }
}
