import React, { Component } from 'react';
import axios from 'axios';
const querystring = require('querystring');

class Contato extends Component {

    constructor(props) {
    super(props);
    this.state = {
      email: '',
      nome: '',
      mensagem: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;
   
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    var data = querystring.stringify({ 
      "email": this.state.email,
      "nome": this.state.nome,
      "mensagem": this.state.mensagem
    });

    axios({
      method: 'post',
      url: 'http://localhost:8081/contato',
      data: data,
      config: { 
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    })
    .then(function (response) {
        alert(response.data);
    })
    .catch(function (response) {
        console.log(response);
    });
    
    event.preventDefault();
  }

  render() {
    return (
      <main role="main" class="text-center">
        <h1 class="cover-heading">Contato</h1><br/>
        <form class="form-signin" onSubmit={this.handleSubmit}>
          <label for="email" class="sr-only">Email</label>
          <input type="email" name="email" id="email" class="form-control" placeholder="Email" required autofocus value={this.state.email} onChange={this.handleInputChange} />
          <label for="nome" class="sr-only">Nome</label>
          <input type="text" id="nome" name="nome" class="form-control" placeholder="Nome" required value={this.state.nome} onChange={this.handleInputChange} />
           <label for="mensagem" class="sr-only">Mensagem</label>
          <textarea id="mensagem" name="mensagem" class="form-control mensagem" name="mensagem" placeholder="Mensagem" value={this.state.mensagem} onChange={this.handleInputChange}></textarea>
          <button class="btn btn-lg btn-secondary btn-block" type="submit">Enviar</button>
        </form>
      </main>
    );
  }
}

export default Contato;
