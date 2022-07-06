import React, { useReducer } from 'react'
import { AppContext } from '..'
import { fetchPosts, fetchPost } from '../../api/posts'
import { FETCH_ALL_POSTS, FETCH_ONE_POST } from './PostsActions'
import PostsReducer from './PostsReducer'

const PostsContext = props => {
  const intialState = {
    posts: [],
    post: null
  }
  const [globalState, dispatch] = useReducer(PostsReducer, intialState);

  const fetchAllPosts = async () => {
    const { data } = await fetchPosts();
    dispatch({
      type: FETCH_ALL_POSTS,
      payload: data
    })
  }

  const fetchOnePost = async id => {
    const { data } = await fetchPost(id);
    dispatch({
      type: FETCH_ONE_POST,
      payload: data
    })
  }

  const combineFunctions = {
    fetchAllPosts,
    fetchOnePost
  }

  return (
    <AppContext.Provider value={{ ...globalState, ...combineFunctions }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default PostsContext
