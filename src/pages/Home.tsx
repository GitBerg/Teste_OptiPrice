import { useEffect, useState } from 'react'
import axios from 'axios'
import { Post } from '../types/post'
import SearchInput from '../components/SearchInput'
import PostsTable from '../components/PostsTable'
import { PaginationControl } from '../components/PaginationControl'

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const POSTS_PER_PAGE = 10

  useEffect(() => {
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      setPosts(res.data)
    })
    .catch((err) => console.error(err))
}, [])

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div className="max-w-5xl mx-auto sm:px-6 md:px-16">
      <h1 className="text-3xl font-bold mb-6 text-header">Tabela Interativa</h1>
      <SearchInput value={searchTerm} onChange={(value) => {
        setSearchTerm(value)
        setCurrentPage(1) 
      }} />
      <PostsTable posts={currentPosts} />
      <PaginationControl
        goToPreviousPage={() => setCurrentPage(currentPage - 1)}
        goToNextPage={() => setCurrentPage(currentPage + 1)}        
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default Home