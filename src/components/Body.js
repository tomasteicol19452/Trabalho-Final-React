import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import { Post } from "./Post.js";
import postData from "./PostData.js";
import { DetailedPost } from "./DetailedPost.js";

export class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: true,
      idPost: 0
    };
  }

  render() {
    console.log("Body");
    console.log(this.state);
    if (this.props.filter == "" && this.state.allPosts) {
      return <div className="mainPage">{this.postPosts()}</div>;
    } else if (this.state.allPosts) {
      return (
        <div className="mainPage">{this.postAuthor(this.props.filter)}</div>
      );
    } else {
      return (
        <div className="mainPage">{this.postDetail(this.state.idPost)}</div>
      );
    }
  }

  showPost = id => {
    this.setState({
      allPosts: false,
      idPost: id
    });
  };

  showPosts = () => {
    this.setState({
      allPosts: true,
      idPost: 0
    });
  };

  //função para ir buscar os valores ao ficheiro JSON
  //cria um novo array de objectos <Post/>
  postPosts = () => {
    const postComponent = postData.map(post => (
      <Post
        key={post.id}
        postId={post.id}
        author={post.author}
        imgUrl={post.imgUrl}
        date={post.date}
        nLikes={post.nLikes}
        nComentarios={post.comentarios.length}
        show={id => this.showPost(id)}
      />
    ));
    return postComponent;
  };

  //função que vai buscar apenas aqueles selecionados
  postAuthor = filter => {
    const postAuthorComponent = [];
    for (let i = 0; i < postData.length; i++) {
      if (postData[i].author == filter) {
        postAuthorComponent.push(
          <Post
            key={postData[i].id}
            postId={postData[i].id}
            author={postData[i].author}
            imgUrl={postData[i].imgUrl}
            date={postData[i].date}
            nLikes={postData[i].nLikes}
            nComentarios={postData[i].comentarios.length}
            show={id => this.showPost(id)}
          />
        );
      }
    }
    return postAuthorComponent;
  };

  //função que cria uma view para cada um dos posts depois de clickada
  postDetail = id => {
    const postDetailedPost = [];
    for (let i = 0; i < postData.length; i++) {
      if (postData[i].id == id) {
        postDetailedPost.push(
          <DetailedPost
            return={() => this.showPosts()}
            key={postData[i].id}
            postId={postData[i].id}
            author={postData[i].author}
            imgUrl={postData[i].imgUrl}
            date={postData[i].date}
            nLikes={postData[i].nLikes}
            nComentarios={postData[i].comentarios.length}
            comentarios={postData[i].comentarios}
            descricao={postData[i].description}
          />
        );
      }
    }
    return postDetailedPost;
  };
}
