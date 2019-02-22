import React, { Component } from "react";

export default class Hero extends Component {
  render() {
    return (
      <div>
        <div className="imgbebe jumbotron bg-primary">
          <h1 className="display-3 text-center">Pepe e Nene</h1>
          <h4 className="lead text-center text-black">
            Em breve um Ecommerce de produtos para bebes
          </h4>
          <hr className="my-4" />
          <p>Alguma descricao aqui...</p>
          <p className="lead">
            <button className="bg-secondary btn" type="button">
              Learn More
            </button>
          </p>
        </div>
      </div>
    );
  }
}
