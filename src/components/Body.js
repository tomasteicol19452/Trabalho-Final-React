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
      idPost: null
    };
    this.showPost = this.showPost.bind(this);

    this.showPosts = this.showPosts.bind(this);
  }

  render() {
    console.log("Body");
    //getFilter(this.props.searched);
    if (this.props.filter == "" && this.state.allPosts) {
      return <DetailedPost img="" />; //<div className="mainPage">{postPosts()}</div>;
    } else if (this.state.allPosts) {
      return <div className="mainPage">{postAuthor(this.props.filter)}</div>;
    }
  }
}

//função para ir buscar os valores ao ficheiro JSON
//cria um novo array de objectos <Post/>
function postPosts() {
  const postComponent = postData.map(post => (
    <Post
      key={post.id}
      author={post.author}
      imgUrl={post.imgUrl}
      date={post.date}
      nLikes={post.nLikes}
      nComentarios={post.comentarios.length}
    />
  ));
  return postComponent;
}

//função que vai buscar apenas aqueles selecionados
function postAuthor(filter) {
  const postAuthorComponent = [];
  for (let i = 0; i < postData.length; i++) {
    if (postData[i].author == filter) {
      postAuthorComponent.push(
        <Post
          key={postData[i].id}
          author={postData[i].author}
          imgUrl={postData[i].imgUrl}
          date={postData[i].date}
          nLikes={postData[i].nLikes}
          nComentarios={postData[i].comentarios.length}
        />
      );
    }
  }
  return postAuthorComponent;
}

function showPost(id) {
  this.setState({
    allPosts: false,
    idPost: id
  });
}

function showPosts() {
  this.setState({
    allPosts: true,
    idPost: null
  });
}
