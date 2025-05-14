import { useEffect, useState } from 'react'
import axios from 'axios'
import { Post } from '../types/post'
import SearchInput from '../components/SearchInput'
import PostsTable from '../components/PostsTable'

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      setPosts(res.data.slice(0, 10))
    })
    .catch((err) => console.error(err))
}, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-header">Tabela Interativa</h1>
      <SearchInput value={searchTerm} onChange={setSearchTerm} />
      <PostsTable posts={filteredPosts} />
    </div>
  )
}

export default Home