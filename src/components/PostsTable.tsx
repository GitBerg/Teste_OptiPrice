import React, { useEffect, useState } from 'react'
import { Post } from '../types/post'

interface PostsTableProps {
  posts: Post[]
}

const PostsTable: React.FC<PostsTableProps> = ({ posts }) => {
  const [editablePostId, setEditablePostId] = useState<number | null>(null)
  const [editedTitle, setEditedTitle] = useState('')
  const [editedBody, setEditedBody] = useState('')
  const [postList, setPostList] = useState<Post[]>([])

  useEffect(() => {
  setPostList(posts)
}, [posts])

  const handleEdit = (post: Post) => {
    setEditablePostId(post.id)
    setEditedTitle(post.title)
    setEditedBody(post.body)
  }

  const handleSave = (id: number) => {
    const updated = postList.map((post) =>
      post.id === id ? { ...post, title: editedTitle, body: editedBody } : post
    )
    setPostList(updated)
    setEditablePostId(null)
  }

  

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto bg-[#FFF]/50 rounded-lg overflow-hidden">
        <thead className='bg-accent/40'>
          <tr>
            <th className="text-center py-4 px-6 border-b text-header">ID</th>
            <th className="text-center py-4 px-6 border-b text-header">Título</th>
            <th className="text-center py-4 px-6 border-b text-header">Conteúdo</th>
            <th className="text-center py-4 px-6 border-b text-header">Ações</th>
          </tr>
        </thead>
        <tbody>
          {postList.map((post) => (
            <tr key={post.id}>
              <td className="p-2 border-b text-muted">{post.id}</td>
              <td className="p-2 border-b text-muted">
                {editablePostId === post.id ? (
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="border border-header p-2 p-1 w-full bg-white rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                ) : (
                  post.title
                )}
              </td>
              <td className="text-justify p-2 border-b text-muted">
                {editablePostId === post.id ? (
                  <textarea
                    value={editedBody}
                    onChange={(e) => setEditedBody(e.target.value)}
                    className="border border-header p-2 bg-white w-full rounded focus:outline-none focus:ring-2 focus:ring-accent "
                  />
                ) : (
                  post.body
                )}
              </td>
              <td className="p-2 border-b">
                {editablePostId === post.id ? (
                  <button
                    onClick={() => handleSave(post.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 cursor-pointer"
                  >
                    Salvar
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-accent text-white px-3 py-1 rounded hover:bg-accent/80 cursor-pointer"
                  >
                    Editar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostsTable
