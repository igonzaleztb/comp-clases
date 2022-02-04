import React, { Component } from "react";
import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          <li> Producto : {this.props.product} ✔️</li>
        </ul>
      </div>
    );
  }
}

export default List;
