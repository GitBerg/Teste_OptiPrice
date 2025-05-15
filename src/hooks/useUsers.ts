import { useEffect, useState } from 'react'
import axios from 'axios'

interface User {
  id: number
  name: string
  username: string
}

export const useUsers = () => {
  const [usersMap, setUsersMap] = useState<Map<number, string>>(new Map())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const map = new Map()
        res.data.forEach((user: User) => {
          map.set(user.id, user.name) 
        })
        setUsersMap(map)
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  return { usersMap, loading }
}