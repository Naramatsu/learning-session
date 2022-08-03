import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/index';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

const Post = () => {
  const { post, fetchOnePost } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    if (post === null || post[id] === undefined) {
      fetchOnePost(id);
    }
  }, [id, post, fetchOnePost]);

  return (
    <div>
      <Link to="/">Go home</Link>
      {post && post[id] ? (
        <section>
          <p>
            <label>
              <b>Title:</b>
            </label>
            {post[id].title}
          </p>
          <p>
            <label>
              <b>Description:</b>
            </label>
            {post[id].body}
          </p>
        </section>
      ) : (
        <p>Loading...!</p>
      )}
    </div>
  );
};

export default Post;
