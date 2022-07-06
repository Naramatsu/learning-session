import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = () => axios.get(baseUrl)

export const fetchPost = id => axios.get(`${baseUrl}/${id}`)