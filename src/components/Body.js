import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import { Post } from "./Post.js";
import postData from "./PostData.js";

export class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = { filter: "" };
  }

  render() {
    if (this.state.filter == "") {
      return <div className="mainPage">{postPosts()}</div>;
    } else {
      return <div className="mainPage">{postAuthor(this.state.filter)}</div>;
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
  const postAuthorComponent = postData.map(post => {
    if (post.author === filter) {
      <Post
        key={post.id}
        author={post.author}
        imgUrl={post.imgUrl}
        date={post.date}
        nLikes={post.nLikes}
        nComentarios={post.comentarios.length}
      />;
    }
  });
  return postAuthorComponent;
}

/*===EXEMPLO PREVIO===
        <Post
          author="Pizza"
          imgUrl="https://recipes.timesofindia.com/photo/53110049.cms"
          date="04/08/2019"
          nLikes="500"
          nComentarios="1"
        />
        <Post
          author="Hamburger"
          imgUrl="https://www.tasteofhome.com/wp-content/uploads/2017/10/exps28800_UG143377D12_18_1b_RMS-696x696.jpg"
          date="19/08/2019"
          nLikes="20"
          nComentarios="3"
        />
        <Post
          author="Salada"
          imgUrl="https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg"
          date="01/08/2019"
          nLikes="0"
          nComentarios="0"
        />*/
