import React, { useState } from 'react';
import { saveLocalStorageValues } from '../../localstorage';
import PersonF from '../PersonF';
import { Container, PersonFStyled } from './styledComponents';

const styles = {
  border: 'solid 1px',
  padding: '1em',
  width: '150px',
};

const CounterF = (props) => {
  const [counter, setCounter] = useState(0);
  const [pairstyle, setPairStyle] = useState({});
  const [person, setPerson] = useState({
    name: '',
  });

  const handleAdd = () => {
    setCounter(counter + 1);
    if (counter % 2 === 0) {
      setPairStyle({
        backgroundColor: 'green',
      });
    } else {
      setPairStyle({
        backgroundColor: 'red',
      });
    }
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  };

  const onSaveInfo = (e) => {
    saveLocalStorageValues('counter', counter);
    saveLocalStorageValues('person', person);
    e.preventDefault();
  };

  return (
    <Container>
      <h1>Hello From Counter Function Component</h1>
      <section>
        <p style={{ ...styles, ...pairstyle }}>Counter: {counter}</p>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleDecrement}>-</button>
      </section>
      <br />
      <section>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={person.name || ''}
          onChange={handlerChange}
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={person.surname || ''}
          onChange={handlerChange}
        />
        <button onClick={onSaveInfo}>Save infromation</button>
      </section>
      <PersonFStyled color="yellow">
        <PersonF name={person.name} />
      </PersonFStyled>
    </Container>
  );
};

export default CounterF;
