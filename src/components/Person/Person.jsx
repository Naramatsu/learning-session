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
    ({
      prevProps,
      actualProps: this.props,
    });
    ({
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
    'actualScroll: ', this.state.actualScroll;
  };

  UNSAVE_componentWillUpdate() {
    ('here');
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
