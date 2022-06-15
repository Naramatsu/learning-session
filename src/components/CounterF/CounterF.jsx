import React, { useState } from 'react';
import { saveLocalStorageValues } from '../../localstorage';
import PersonF from '../PersonF';

const CounterF = (props) => {
  const [counter, setCounter] = useState(0);
  const [person, setPerson] = useState({
    name: '',
  });

  const handleAdd = () => {
    setCounter(counter + 1);
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
    <section>
      <h1>Hello From Counter Function Component</h1>
      <section>
        <p>Counter: {counter}</p>
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
      <PersonF name={person.name} />
    </section>
  );
};

export default CounterF;
