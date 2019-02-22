import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Searchbar from "./components/Searchbar/Searchbar";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: [],
      searchField: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/produtos")
      .then(res => this.setState({ produtos: res.data }));
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
        <div style={productContainer}>
          <Product
            handleDelete={this.handleDelete}
            produtos={filteredProducts}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

const productContainer = {
  display: "flex",
  justifyContent: "space-between"
};

export default App;
