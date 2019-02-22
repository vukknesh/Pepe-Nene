import React, { Component } from "react";

export default class Searchbar extends Component {
  render() {
    return (
      <div style={searchStyle} className="container">
        <div style={div}>
          <i className="fas fa-search" />
          <input
            className="form-control has-icon"
            type="search"
            placeholder="I'm looking for..."
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}

const searchStyle = {
  maxWidth: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "30px",
  display: "flex"
};

const div = {
  display: "flex",
  minHeight: "1px",
  width: "100%"
};
const btn1 = {
  width: "150px"
};
