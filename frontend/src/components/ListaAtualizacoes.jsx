import React, { Component } from 'react';
import axios from 'axios';
import Atualizacao from './Atualizacao';
import './../assets/css/signin.css';

const querystring = require('querystring');

class ListaAtualizacoes extends Component {

  constructor(props) {
    super(props);
    this.state = { atualizacoes: [] };
  }

  componentWillMount() {
    axios.get('http://localhost:8081/updates').then(resposta => { 
      this.setState({ atualizacoes: resposta.data });
    }).catch(() => { 

    });
  }

  render() {
    return (
      <div className="my-3 p-3 bg-white rounded box-shadow">
        {
          this.state.atualizacoes.map(item => (
            <Atualizacao key={item.usuario} atualizacao={item} />
          ))
        }
      </div>
    );
  }
}

export default ListaAtualizacoes;
