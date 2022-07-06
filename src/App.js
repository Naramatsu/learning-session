import React from 'react'
import Posts from './components/Posts';
import PostsContext from './context/Posts/PostsContext';

const App = () => {
  return (
    <div className="App">
      <h1>Hello Word</h1>
      <hr />
      <PostsContext>
        <Posts />
      </PostsContext>
    </div>
  );
}

export default App;
