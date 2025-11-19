import { toast } from 'react-hot-toast'
import { usePostContext } from '../context/PostContext'
import { useNavigate } from 'react-router-dom'

function PostCard({ post }) {
  const { deletePost } = usePostContext()
  const navigate = useNavigate()

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className='text-white mb-2'>Do you want to delete? </p>
        <div>
          <button
            onClick={() => {
              deletePost(id)
              toast.dismiss(t.id)
            }}
            className='bg-red-500 hover:bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2 hover:cursor-pointer'
          >
            Delete
          </button>
          <button
            className='bg-slate-500 hover:bg-slate-400 px-3 py-2 text-white rounded-sm mx-2 hover:cursor-pointer'
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ), {
      style: {
        background: "#202020"
      }
    })
  }

  return (
    <div
      className="bg-zinc-800 text-white rounded-sm shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer h-fit"
      onClick={() => navigate('/posts/' + post._id)}
    >
      <div className="pt-7">
        <div className='flex flex-col gap-2 px-4 pb-6'>
          <div className='flex justify-between'>
            <h2 className='text-xl'>{post.title}</h2>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleDelete(post._id)
              }
              }
              className="bg-red-600 text-sm px-4 py-2 rounded-sm hover:cursor-pointer hover:bg-red-500"
            >
              Delete
            </button>
          </div>
          <p>{post.description}</p>
        </div>
        {
          post.image && <img className='w-full' src={post.image.url} />
        }
      </div>
    </div>
  )
}

export default PostCard