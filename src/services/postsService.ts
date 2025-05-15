import axios from 'axios'
import { Post } from '../types/post'

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  return response.data
}