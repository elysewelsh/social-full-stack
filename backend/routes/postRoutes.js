import express from 'express'
import Post from '../models/Post.js'
import { authMiddleware } from '../utils/auth.js'

const router = express.Router()

router.use(authMiddleware)

router.post('/', async (req,res) => {
    try {
        const posts = await Post.create({
            ...req.body,
            author: req.user._id
        })
        res.status(200).json(posts)
    }
    catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json(posts)
    }
    catch (err) {
        console.error(err)
        res.status(400).json({ message: err.message })
    }
})

export default router