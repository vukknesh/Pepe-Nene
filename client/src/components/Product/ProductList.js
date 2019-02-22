import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    const { id, category, nome, description } = this.props.produto;
    return (
      <div className="divStyle">
        <div className="box">
          <div className="card text-white bg-secondary">
            <div className="card-header">{category}</div>
            <div className="card-body">
              <h4 className="card-title">{nome}</h4>
              <p className="card-text">{description}</p>
            </div>
            <button
              onClick={this.props.handleDelete.bind(this, id)}
              className="btn-outline-secondary"
            >
              Delete
            </button>
          </div>
          {/* <div className="card text-white bg-secondary mb-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h4 className="card-title">Secondary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
          </div> */}

          {/* <div class="card mb-3">
            <h3 class="card-header">{produto.category}</h3>
            <div class="card-body">
              <h5 class="card-title">{produto.nome}</h5>
              <h6 class="card-subtitle text-muted">{produto.description}</h6>
            </div>
            <img
              style="height: 200px; width: 100%; display: block;"
              alt="Card image"
              src=""
            />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Cras justo odio</li>
              <li class="list-group-item">Dapibus ac facilisis in</li>
              <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
              <a class="card-link" href="#">
                Card link
              </a>
              <a class="card-link" href="#">
                Another link
              </a>
            </div>
            <div class="card-footer text-muted">2 days ago</div>
          </div> */}
        </div>
      </div>
    );
  }
}
