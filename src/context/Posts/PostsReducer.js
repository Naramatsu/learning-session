import { FETCH_ALL_POSTS, FETCH_ONE_POST } from "./PostsActions";

export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_ALL_POSTS:
      return {
        ...state,
        posts: payload
      }
    case FETCH_ONE_POST:
      return {
        post: {
          [payload.id]: payload
        }
      }
    default:
      return state;
  }
}