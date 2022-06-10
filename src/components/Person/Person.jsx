import React, { Component } from 'react';

class Person extends Component {
  state = {
    name: '',
  };
  render() {
    const { name } = this.state;
    return (
      <section>
        <h1>Hello from Perons Class Component</h1>
        <p>
          <b>Name: </b>
          {this.props.name}
        </p>
        <p>Person Name</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name || ''}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
      </section>
    );
  }
}
export default Person;
