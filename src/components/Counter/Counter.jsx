import React, { Component } from 'react';
import Person from '../Person';

class Counter extends Component {
  state = {
    counter: 0,
    name: '',
    surname: '',
  };

  handleAdd = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  handlerChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  render() {
    const { counter, name, surname } = this.state;
    return (
      <section>
        <h1>Hello from Counter Class Component</h1>
        <section>
          <p>Counter: {counter}</p>
          <button onClick={this.handleAdd}>+</button>
          <button onClick={this.handleDecrement}>-</button>
        </section>
        <br />
        <section>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handlerChange}
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={surname}
            onChange={this.handlerChange}
          />
        </section>
        <Person name={name} />
      </section>
    );
  }
}

export default Counter;
