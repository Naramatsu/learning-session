import React, { Component } from 'react';

class Person extends Component {
  state = {
    name: '',
    actualScroll: 0,
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handlerScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({
      prevProps,
      actualProps: this.props,
    });
    console.log({
      prevState,
      actualState: this.state,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handlerScroll);
  }

  handlerScroll = (event) => {
    this.setState({
      actualScroll: window.scrollY,
    });
    console.log('actualScroll: ', this.state.actualScroll);
  };

  UNSAVE_componentWillUpdate() {
    console.log('here');
  }

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
