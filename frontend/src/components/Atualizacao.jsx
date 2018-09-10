import React, { Component } from 'react';
import './../assets/css/signin.css';

class Atualizacao extends Component {
  render() {
    return (
      <div className="media text-muted pt-3">
        <p className="pb-3 mb-0 border-bottom border-gray">
          <strong className="d-block text-gray-dark">{this.props.atualizacao.usuario}</strong>
          {this.props.atualizacao.atualizacao}
        </p>
      </div>
    );
  }
}

export default Atualizacao;
