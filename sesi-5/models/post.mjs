import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
    createdAt: Date,
    updatedAt: Date
})

export const PostModel = mongoose.model('Post', postSchema)