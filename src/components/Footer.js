import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";
import { Aluno } from "./Aluno.js";

//Componente que cria o footer da página
export class Footer extends React.Component {
  render() {
    return (
      <div className="pageFooter">
        <Aluno
          source="https://i.imgur.com/8tHpPMP.jpg?1"
          nome="Tomás Colaço"
          nAluno="19452"
        />
        <Aluno
          source="https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/49803817_1189578611197281_7560484699844378624_n.jpg?_nc_cat=107&_nc_ht=scontent.fopo1-1.fna&oh=76055682c61252944706d459e0834c29&oe=5D4C8620"
          nome="Hugo Marques"
          nAluno="20175"
        />
      </div>
    );
  }
}
