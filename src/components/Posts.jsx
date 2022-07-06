import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/index';

const Posts = () => {
  const { posts = [], fetchAllPosts } = useContext(AppContext);

  useEffect(() => {
    if (!posts.length) {
      fetchAllPosts();
    }
  }, [posts, fetchAllPosts]);

  return (
    <div>
      <h1>Posts Component</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <p>
            <label>Title:</label>
            {post.title}
          </p>
          <p>
            <label>Body:</label>
            {post.body}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Posts;
