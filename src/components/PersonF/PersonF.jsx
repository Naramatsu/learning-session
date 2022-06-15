import React, { useState, useEffect, useRef } from 'react';

const PersonF = (props) => {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);
  const [actualScroll, setActualScroll] = useState(0);
  const refNameState = useRef();
  const refNameProps = useRef();

  useEffect(() => {
    const scrollEvent = window.addEventListener('scroll', (e) => {
      setActualScroll(window.scrollY);
      console.log('actualScroll :>> ', actualScroll);
    });
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [actualScroll]);

  useEffect(() => {
    refNameProps.current = props.name;
    refNameState.current = name;
  });

  useEffect(() => {
    const getTodos = async () => {
      await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => setTodos(data));
    };
    if (!todos.length) {
      getTodos();
    }
  }, [todos]);

  console.log('todos :>> ', todos);

  return (
    <section>
      <h1>Hello from Perons Functional Component</h1>
      <p>
        <b>Name: </b>
        {props.name}
      </p>
      <p>Person Name</p>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name || ''}
        onChange={(e) => setName(e.target.value)}
      />
    </section>
  );
};

export default PersonF;
