import React, { Component } from "react";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="card" styles={{ width: "18rem" }}>
        <img src={this.props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <a href="/" className="btn btn-primary">
            buy and eat
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
