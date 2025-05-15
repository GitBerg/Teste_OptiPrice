import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PostsTableSkeleton = () => {
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
          {[...Array(10)].map((_, i) => (
            <tr key={i} className='border-surface border'>
              <td className="p-2  border-r-1 border-accent">
                <Skeleton count={1} width={15} baseColor="#A6E3DC" highlightColor="#c4f0ea" />
              </td>
              <td className="p-2  border-r-1 border-accent">
                <Skeleton count={2} baseColor="#A6E3DC" highlightColor="#c4f0ea" />
              </td>
              <td className="p-2  w-2/10 border-r-1 border-accent">
                <Skeleton count={2}  baseColor="#A6E3DC" highlightColor="#c4f0ea" />
              </td>
              <td className="p-2  w-6/10 border-r-1 border-accent">
                <Skeleton count={3}  baseColor="#A6E3DC" highlightColor="#c4f0ea" />
              </td>
              <td className="p-2 ">
                <Skeleton height={30}  baseColor="#A6E3DC" highlightColor="#c4f0ea" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PostsTableSkeleton