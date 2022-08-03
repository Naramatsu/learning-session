import React from 'react';
import Posts from './components/Posts';
import PostsContext from './context/Posts/PostsContext';
import { Route, Routes } from 'react-router-dom';
import Post from './components/Post';

const App = () => {
  return (
    <div className="App">
      <h1>Hello Word</h1>
      <hr />
      <PostsContext>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </PostsContext>
    </div>
  );
};

export default App;
