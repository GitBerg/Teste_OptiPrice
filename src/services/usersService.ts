import axios from 'axios'

export interface User {
  id: number
  name: string
}

export const getUsers = async (): Promise<User[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data
}