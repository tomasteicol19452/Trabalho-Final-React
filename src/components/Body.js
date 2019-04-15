import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import { Post } from "./Post.js";

export class Body extends React.Component {
  render() {
    return (
      <div className="mainPage">
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
        />
      </div>
    );
  }
}
