import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import { Post } from "./Post.js";
import { getPosts } from "./PostData.js";
import { DetailedPost } from "./DetailedPost.js";

export class Body extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allPosts: true,
      idPost: 0,
      data: []
    };
  }

  //retorna os dados da api para um objecto alojado no state 'data'
  async componentDidMount() {
    //fetch asyncrono pois retorna promise 
    if (this.state.allPosts && this.props.filter === "") {
      const response = await getPosts();
      if (response === []) {
        alert("Error 404: Posts not found.");
      }
      this.setState({ data: response });
    }
  }

  render() {
    //Se a pesquisa estiver vazia colocar todos os posts
    if (this.props.filter === "" && this.state.allPosts) {
      return <div className="mainPage">{this.postPosts(this.state.data)}</div>
    }
    //Se a tiver sido feito uma pesquisa apresenta apenas os postos cujo o autor corresponde a pesquisa 
    else if (this.state.allPosts) {
      return (
        <div className="mainPage">
          {this.postAuthor(this.props.filter, this.state.data)}
        </div>
      );
    }
    //Se tiver sido selecionada uma das imagens 
    else {
      return (
        <div className="mainPage">
          {this.postDetail(this.state.idPost, this.state.data)}
        </div>
      );
    }
  }

  //Função que altera o state para identificar o post selecionado
  showPost = id => {
    this.setState({
      allPosts: false,
      idPost: id
    });
  };

  //Função que altera os states para demonstrar todos os posts disponives
  showPosts = () => {
    this.setState({
      allPosts: true,
      idPost: 0
    });
  };

  //função para ir buscar os valores ao ficheiro JSON
  //cria um novo array de objectos <Post/>
  postPosts = data => {
    const postComponent = data.map(post => (
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

  // função que vai buscar apenas aqueles selecionados pelo filtro da pesquisa
  postAuthor = (filter, postData) => {
    const postAuthorComponent = [];
    for (let i = 0; i < postData.length; i++) {
      if (postData[i].author.toLowerCase() === filter.toLowerCase()) {
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

  // função que cria uma view para cada um dos posts depois de feito o click na imagem
  postDetail = (id, postData) => {
    const postDetailedPost = [];
    for (let i = 0; i < postData.length; i++) {
      if (postData[i].id === id) {
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
