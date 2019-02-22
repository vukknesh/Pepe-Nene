const db = require("../database");

class Products {
  static retrieveAll(callback) {
    db.query("SELECT nome from products", (err, res) => {
      if (err.error) return callback(err);
      callback(res);
    });
  }
  static insert(product, callback) {
    db.query(
      "INSERT INTO products (product) VALUES ($1)",
      [product],
      (err, res) => {
        if (err.error) return callback(err);
        callback(res);
      }
    );
  }
}

module.exports = Products;
