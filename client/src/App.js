import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import uuid from "uuid";
import Searchbar from "./components/Searchbar/Searchbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [
        {
          id: uuid.v4(),
          category: "carrinho",
          nome: "carrinho x123",
          description:
            "Carrinho na promocao, importado de miami... venha conferir o produto"
        },
        {
          id: uuid.v4(),
          category: "mala",
          nome: "mala com rodinha",
          description:
            "mala com rodinha na promocao, importado de miami... venha conferir o produto"
        },
        {
          id: uuid.v4(),
          category: "roupa",
          nome: "camisa carter",
          description:
            "camisa carter na promocao, importado de miami... venha conferir o produto"
        },
        {
          id: uuid.v4(),
          category: "roupa",
          nome: "calca carter",
          description:
            "calca moletom pra nenem na promocao, importado de miami... venha conferir o produto"
        }
      ],
      searchField: ""
    };
  }
  handleDelete = id => {
    this.setState({
      produtos: [...this.state.produtos.filter(produto => produto.id !== id)]
    });
  };

  handleChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredProducts = this.state.produtos.filter(produto => {
      return (
        produto.nome
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase()) ||
        produto.category
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase())
      );
    });
    return (
      <div>
        <Header />
        <Hero />
        <Searchbar handleChange={this.handleChange} onSubmit={this.onSubmit} />
        <Product handleDelete={this.handleDelete} produtos={filteredProducts} />
        <Footer />
      </div>
    );
  }
}

export default App;
