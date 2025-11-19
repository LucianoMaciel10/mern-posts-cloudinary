import { Router } from 'express'
import { getPosts, createPost, deletePost, updatePost, getPost, } from '../controllers/post.controllers.js'

const router = Router()

router.get('/', getPosts)

router.post('/', createPost)

router.put('/:id', updatePost)

router.delete('/:id', deletePost)

router.get('/:id', getPost)

export default router