import React, { Component } from 'react';

class Producto extends Component {
  name = 'Andres JS';
  render() {
    // props y state variables
    return (
      <div>
        <h1>Hello {this.name} from Producto</h1>
      </div>
    );
  }
}

export default Producto;
