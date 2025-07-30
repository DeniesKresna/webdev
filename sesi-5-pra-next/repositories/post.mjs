import { PostModel } from "../models/post.mjs";

export const getAllPostRepo = async () => {
    const data = await PostModel.find()
    return data
}

export const addPostRepo = async (postData) => {
    const dateNow = new Date()
    postData.createdAt = dateNow
    postData.updatedAt = dateNow
    const newPost = new PostModel(postData)
    return await newPost.save()
}

export const updatePostByIdRepo = async (id, updateData) => {
    updateData.updatedAt = new Date()
    return await PostModel.findByIdAndUpdate(id, updateData, {new: true})
}

export const deletePostByIdRepo = async (id) => {
    return await PostModel.findByIdAndDelete(id)
}