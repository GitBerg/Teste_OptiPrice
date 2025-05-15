import axios from 'axios'
import { User } from '../types/user'


export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data
}