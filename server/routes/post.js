import express from 'express'
import { getPost, getLanguage, createPost, updatePost, deletePost } from '../controller/posts.js'
import auth from '../middleware/auth.js';


const router = express.Router()

router.get('/', getPost)
router.get('/language', getLanguage)
router.post('/', auth, createPost)
router.patch('/:id', auth, updatePost)
router.delete('/:id', auth, deletePost)

export default router;