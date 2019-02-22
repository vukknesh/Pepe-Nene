import React, { Component } from "react";
import ProductList from "./ProductList";

export default class Product extends Component {
  render() {
    return this.props.produtos.map(produto => (
      <div>
        <ProductList
          handleDelete={this.props.handleDelete}
          produto={produto}
          key={produto.id}
        />
      </div>
    ));
  }
}
