import { usePostContext } from '../context/PostContext'
import { Link } from 'react-router-dom'
import PostCard from '../components/PostCard'

export function Home() {

  const { posts } = usePostContext()

  return (
    <>
      <Link className='bg-gray-700 text-white p-3 rounded-sm hover:bg-gray-600 absolute top-2 left-2 text-xl pb-4 px-4' to={'/new'}>
        Create New Post
      </Link>
      <div className='grid responsive-grid grid-cols-3 gap-4 my-20'>
        {
          posts.length > 0
            ? posts.map(post => <PostCard key={post._id} post={post} />)
            : <h1>There are no posts</h1>
        }
      </div>
      <div className="absolute right-3 text-2xl top-2 text-white font-bold">
        Posts <span className='text-red-500 font-medium'>{posts.length}</span>
      </div>
    </>
  )
}
