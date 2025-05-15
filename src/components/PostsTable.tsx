import React, { useEffect, useState } from 'react'
import { Post } from '../types/post'
import removeBreakLines from '../utils/removeBreakLines'

interface PostsTableProps {
  posts: Post[]
  usersMap: Map<number, string>
}

const PostsTable: React.FC<PostsTableProps> = ({ posts, usersMap }) => {
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
    setEditedBody(removeBreakLines(post.body))
  }

  const handleSave = (id: number) => {

    const updated = postList.map((post) =>
      post.id === id ? { ...post, title: editedTitle, body: editedBody } : post
    )
    setPostList(updated)
    setEditablePostId(null)
  }

  

  return (
    <div className="overflow-x-auto shadow-lg bg-[#FFF]/50 border-2 border-accent rounded-lg">
      <table className="w-full table-auto">
        <thead className='bg-accent/40'>
          <tr>
            <th className="text-center py-4 px-6 border-b text-header">ID</th>
            <th className="text-center py-4 px-6 border-b text-header">Usuário</th>
            <th className="text-center py-4 px-6 border-b text-header">Título</th>
            <th className="text-center py-4 px-6 border-b text-header">Conteúdo</th>
            <th className="text-center py-4 px-6 border-b text-header">Ações</th>
          </tr>
        </thead>
        <tbody>
          {postList.map((post) => (
            <tr key={post.id} className='border-surface border'>
              <td className="p-2  text-muted border-r-1 border-accent font-bold">{post.id}</td>
              <td className="p-2  text-muted border-r-1 border-accent text-sm ">
                {usersMap.get(post.userId) ?? 'Desconhecido'}
              </td>
              <td className="p-2  text-muted w-2/10 border-r-1 border-accent">
                {editablePostId === post.id ? (
                  <input
                    type="text"
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                    className="border border-header p-2 p-1 w-full bg-white rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                ) : (
                 <p className='break-all line-clamp-3 text-sm'>{post.title}</p> 
                )}
              </td>
              <td className="text-justify p-2 text-muted w-6/10 border-r-1 border-accent">
                {editablePostId === post.id ? (
                  <textarea
                    value={editedBody}
                    rows={3}
                    onChange={(e) => setEditedBody(e.target.value)}
                    className="border border-header p-2 bg-white w-full rounded focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                ) : (
                    <p className='break-all text-ellipsis line-clamp-3 text-sm'>{post.body}</p> 
                )}
              </td>
              <td className="p-2 ">
                {editablePostId === post.id ? (
                  <button
                    onClick={() => handleSave(post.id)}
                    disabled={!editedTitle.trim() || !editedBody.trim()}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 cursor-pointer font-medium disabled:bg-gray-300 disabled:cursor-default"
                  >
                    Salvar
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-accent text-white px-3 py-1 rounded hover:bg-accent/80 cursor-pointer font-medium"
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
