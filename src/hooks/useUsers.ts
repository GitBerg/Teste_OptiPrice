import { useEffect, useState } from 'react'
import { getUsers } from '../services/usersService'

export const useUsers = () => {
  const [usersMap, setUsersMap] = useState<Map<number, string>>(new Map())
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUsers()
    .then((data) => {
      const map = new Map()
      data.forEach((user) => {
        map.set(user.id, user.name)
      })
      setUsersMap(map)
    })
    .catch(console.error)
    .finally(() => setLoading(false))
  }, [])

  return { usersMap, loading }
}