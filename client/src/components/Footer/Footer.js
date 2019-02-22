import React from "react";

export default function Footer() {
  return (
    <div style={footerStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>Telefone: 02039023</li>
        <li style={liStyle}>Volte sempre</li>
        <li style={liStyle}>
          <i className="fab fa-github" />
        </li>
      </ul>
    </div>
  );
}

const footerStyle = {
  background: "#78C2AD",
  color: "grey",
  margin: "0",

  textAlign: "center",
  padding: "2rem 1rem",
  marginBottom: "2rem",

  borderRadius: "0.6rem"
};
const ulStyle = {
  listStyleType: "none",
  margin: "0"
};
const liStyle = {
  display: "inline",
  padding: "30px"
};
