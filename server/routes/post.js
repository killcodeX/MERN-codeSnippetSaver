import express from 'express'
import { getPost, getLanguage, createPost, updatePost, deletePost } from '../controller/posts.js'



const router = express.Router()

router.get('/', getPost)
router.get('/language', getLanguage)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)

export default router;