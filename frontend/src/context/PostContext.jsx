/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext, useEffect } from "react"
import { getPostsReq, getPostReq, createPostReq, deletePostReq, updatePostReq } from '../api/posts'

export const PostContext = createContext()

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const res = await getPostsReq()
    setPosts(res.data)
  }

  const createPost = async (post) => {
    const res = await createPostReq(post)
    setPosts([...posts, res.data])
  }

  const deletePost = async (id) => {
    await deletePostReq(id)
    setPosts(posts.filter(post => post._id !== id))
  }

  const getPost = async (id) => {
    const res = await getPostReq(id)
    return res.data
  }

  const updatePost = async (id, values) => {
    const res = await updatePostReq(id, values)
    setPosts(posts.map(post => post._id === id ? res.data : post))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <PostContext.Provider
      value={{
        posts,
        getPosts,
        createPost,
        deletePost,
        getPost,
        updatePost
      }}
    >
      {children}
    </PostContext.Provider>
  )
}

export function usePostContext() {
  return useContext(PostContext);
}